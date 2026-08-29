import { NextRequest, NextResponse } from 'next/server';
import { PenggunaService } from '@/services/pengguna-service';
import { getUserFromToken } from '@/utils/auth-util';
import { handleApiError } from '@/utils/api-error';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getUserFromToken();
    if (!user || user.role !== 'SuperAdmin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { id } = await params;
    const penggunaId = parseInt(id);

    if (isNaN(penggunaId)) {
      return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
    }

    const pengguna = await PenggunaService.getById(penggunaId);
    return NextResponse.json(pengguna, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' }
    });
  } catch (error) {
    return handleApiError(error, 'GET /api/v1/pengguna/[id]');
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getUserFromToken();
    if (!user || user.role !== 'SuperAdmin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { id } = await params;
    const penggunaId = parseInt(id);

    if (isNaN(penggunaId)) {
      return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
    }

    const body = await request.json();
    const updatedUser = await PenggunaService.update(penggunaId, body, user.role);

    return NextResponse.json(updatedUser);
  } catch (error) {
    return handleApiError(error, 'PUT /api/v1/pengguna/[id]');
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getUserFromToken();
    if (!user || user.role !== 'SuperAdmin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { id } = await params;
    const penggunaId = parseInt(id);

    if (isNaN(penggunaId)) {
      return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
    }

    await PenggunaService.delete(penggunaId, user.role);

    return NextResponse.json({ message: 'Pengguna berhasil dihapus' });
  } catch (error) {
    return handleApiError(error, 'DELETE /api/v1/pengguna/[id]');
  }
}
