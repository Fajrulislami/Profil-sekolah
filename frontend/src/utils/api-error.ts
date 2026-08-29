import { NextResponse } from 'next/server';
import { z } from 'zod';

/**
 * Custom error class dengan HTTP status code.
 * Digunakan di service layer agar route handler bisa mengembalikan
 * status code yang tepat tanpa harus mencocokkan string message.
 */
export class ApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
  }
}

/**
 * Handler terpusat untuk menangkap error di API route.
 * Mengembalikan NextResponse dengan status code yang sesuai.
 *
 * Urutan pengecekan:
 * 1. ZodError → 400 (validasi input gagal)
 * 2. ApiError → statusCode dari error (404, 409, dll)
 * 3. Error biasa → 400 (business logic error)
 * 4. Unknown → 500
 */
export function handleApiError(error: unknown, context: string = 'API'): NextResponse {
  console.error(`Error di ${context}:`, error);

  // 1. Zod validation error
  if (error instanceof z.ZodError) {
    const message = error.issues[0]?.message || 'Data tidak valid';
    return NextResponse.json({ error: message }, { status: 400 });
  }

  // 2. ApiError (custom) — status code sudah di-set oleh service layer
  if (error instanceof ApiError) {
    return NextResponse.json({ error: error.message }, { status: error.statusCode });
  }

  // 3. Error biasa (thrown dari service tanpa ApiError)
  if (error instanceof Error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  // 4. Fallback
  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
}
