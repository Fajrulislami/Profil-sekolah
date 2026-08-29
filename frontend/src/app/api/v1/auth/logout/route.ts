import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = NextResponse.json(
      { 
        success: true, 
        message: 'Berhasil logout'
      },
      { status: 200 }
    );

    // Menghapus cookie dengan mengosongkan nilainya dan mengatur maxAge ke 0
    response.cookies.set({
      name: 'auth_token',
      value: '',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Logout Error:', error);
    return NextResponse.json(
      { success: false, message: 'Terjadi kesalahan pada server saat logout' },
      { status: 500 }
    );
  }
}
