import { NextRequest, NextResponse } from 'next/server';
import { PenggunaService } from '@/services/pengguna-service';
import { getUserFromToken } from '@/utils/auth-util';
import { handleApiError } from '@/utils/api-error';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const user = await getUserFromToken();
    if (!user || user.role !== 'SuperAdmin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const pengguna = await PenggunaService.getAll();
    return NextResponse.json(pengguna, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' }
    });
  } catch (error) {
    return handleApiError(error, 'GET /api/v1/pengguna');
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromToken();
    if (!user || user.role !== 'SuperAdmin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const body = await request.json();
    const newUser = await PenggunaService.create(body);

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return handleApiError(error, 'POST /api/v1/pengguna');
  }
}
