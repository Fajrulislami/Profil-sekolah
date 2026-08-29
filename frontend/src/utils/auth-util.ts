import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export interface DecodedUser {
  id: number;
  email: string;
  role: string;
  name: string;
  iat?: number;
  exp?: number;
}

/**
 * Mengambil data user yang sedang login berdasarkan cookie auth_token.
 * Fungsi ini HANYA BISA dijalankan di Server Components.
 */
export async function getUserFromToken(): Promise<DecodedUser | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;

    if (!token) return null;

    const secret = process.env.JWT_SECRET || 'fallback-secret-key-change-in-production';
    if (secret === 'fallback-secret-key-change-in-production') {
      console.warn('JWT_SECRET tidak ditemukan di environment variables! Menggunakan fallback.');
    }

    // Verifikasi token JWT — memastikan token valid dan belum expired
    const decoded = jwt.verify(token, secret) as DecodedUser;
    
    return decoded;
  } catch (error: any) {
    // Token expired atau tidak valid → return null (bukan crash)
    if (error?.name === 'TokenExpiredError') {
      console.warn('Token JWT sudah expired');
    } else if (error?.name === 'JsonWebTokenError') {
      console.warn('Token JWT tidak valid:', error.message);
    } else {
      console.error('Gagal memverifikasi token:', error);
    }
    return null;
  }
}

/**
 * Mengecek apakah user memiliki salah satu role yang diizinkan
 */
export async function checkRole(allowedRoles: string[]): Promise<boolean> {
  const user = await getUserFromToken();
  if (!user) return false;
  return allowedRoles.includes(user.role);
}
