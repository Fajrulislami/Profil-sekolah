import { NextRequest, NextResponse } from 'next/server';
import { OAuth2Client } from 'google-auth-library';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';

const client = new OAuth2Client(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key-change-in-production';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { credential } = body;

    if (!credential) {
      return NextResponse.json(
        { success: false, message: 'Token Google tidak ditemukan' },
        { status: 400 }
      );
    }

    // 1. Verifikasi token ke Google
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    });
    
    const payload = ticket.getPayload();
    if (!payload || !payload.email) {
      return NextResponse.json(
        { success: false, message: 'Gagal mendapatkan data pengguna dari Google' },
        { status: 400 }
      );
    }

    const { email, sub: googleId } = payload;

    // 2. Cari pengguna di database berdasarkan email
    const user = await prisma.pengguna.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Alamat email tidak terdaftar di sistem kami' },
        { status: 401 }
      );
    }

    if (!user.isActive) {
      return NextResponse.json(
        { success: false, message: 'Akun Anda telah dinonaktifkan. Hubungi Super Admin.' },
        { status: 403 }
      );
    }

    // Update googleId if not present (linking account)
    if (!user.googleId) {
      await prisma.pengguna.update({
        where: { id: user.id },
        data: { googleId },
      });
    }

    // 3. Buat token sesi JWT seperti login biasa
    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Update lastLogin
    await prisma.pengguna.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });

    // 4. Set Cookie (mirip seperti auth/login/route.ts)
    const response = NextResponse.json({
      success: true,
      message: 'Login berhasil dengan Google',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

    response.cookies.set({
      name: 'auth_token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 1 hari
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Google Auth Error:', error);
    return NextResponse.json(
      { success: false, message: 'Terjadi kesalahan saat memproses login Google' },
      { status: 500 }
    );
  }
}
