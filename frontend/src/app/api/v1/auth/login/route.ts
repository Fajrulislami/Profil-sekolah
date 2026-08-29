import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // 1. Validasi input dasar
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email dan password harus diisi' },
        { status: 400 }
      );
    }

    // 2. Cari pengguna di database
    const user = await prisma.pengguna.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Email tidak ditemukan' },
        { status: 404 }
      );
    }

    if (!user.isActive) {
      return NextResponse.json(
        { success: false, message: 'Akun Anda tidak aktif' },
        { status: 403 }
      );
    }

    if (!user.password) {
      return NextResponse.json(
        { success: false, message: 'Akun ini terdaftar menggunakan Google. Silakan login menggunakan Google.' },
        { status: 400 }
      );
    }

    // 3. Verifikasi Password menggunakan bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: 'Password salah' },
        { status: 401 }
      );
    }

    // 4. Update waktu login terakhir
    await prisma.pengguna.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });

    // 5. Buat Token JWT
    const token = jwt.sign(
      { 
        id: user.id, 
        email: user.email, 
        role: user.role,
        name: user.name
      },
      process.env.JWT_SECRET || 'fallback-secret-key-change-in-production',
      { expiresIn: '1d' } // Token berlaku 1 hari
    );

    // 6. Siapkan respons dengan mengatur HTTP-Only Cookie
    const response = NextResponse.json(
      { 
        success: true, 
        message: 'Login berhasil',
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      },
      { status: 200 }
    );

    // Set cookie yang aman
    response.cookies.set({
      name: 'auth_token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 1 hari dalam detik
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Login Error:', error);
    return NextResponse.json(
      { success: false, message: 'Terjadi kesalahan pada server' },
      { status: 500 }
    );
  }
}
