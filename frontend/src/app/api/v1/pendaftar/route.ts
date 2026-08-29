import { NextRequest, NextResponse } from 'next/server';
import { PendaftarService } from '@/services/pendaftar-service';
import { getUserFromToken } from '@/utils/auth-util';
import { handleApiError } from '@/utils/api-error';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const user = await getUserFromToken();
    if (!user || (user.role !== 'SuperAdmin' && user.role !== 'AdminPPDB')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const pendaftar = await PendaftarService.getAll();
    return NextResponse.json(pendaftar, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' }
    });
  } catch (error) {
    return handleApiError(error, 'GET /api/v1/pendaftar');
  }
}

export async function POST(request: NextRequest) {
  try {
    // POST is public because it is used by the PPDBCTA form on the landing page
    const body = await request.json();
    const newPendaftar = await PendaftarService.create(body);

    return NextResponse.json(newPendaftar, { status: 201 });
  } catch (error) {
    return handleApiError(error, 'POST /api/v1/pendaftar');
  }
}
