import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token');

  // 1. Jika pengguna mencoba mengakses halaman login
  if (request.nextUrl.pathname.startsWith('/admin/login')) {
    if (token) {
      // Jika sudah punya token, arahkan ke dashboard (jangan biarkan login lagi)
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
    // Jika tidak punya token, biarkan mengakses halaman login
    return NextResponse.next();
  }

  // 2. Jika pengguna mencoba mengakses halaman dashboard
  if (request.nextUrl.pathname.startsWith('/admin/dashboard')) {
    if (!token) {
      // Jika tidak ada token, tendang kembali ke halaman login
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Jika aman, biarkan pengunjung lewat
  return NextResponse.next();
}

// Tentukan path mana saja yang akan diproses oleh middleware ini
export const config = {
  matcher: ['/admin/dashboard/:path*', '/admin/login'],
};
