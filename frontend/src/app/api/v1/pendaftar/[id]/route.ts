import { NextRequest, NextResponse } from 'next/server';
import { PendaftarService } from '@/services/pendaftar-service';
import { getUserFromToken } from '@/utils/auth-util';
import { handleApiError, ApiError } from '@/utils/api-error';

export const dynamic = 'force-dynamic';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getUserFromToken();
    if (!user || (user.role !== 'SuperAdmin' && user.role !== 'AdminPPDB')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id);
    if (isNaN(id)) {
      throw new ApiError('Invalid ID', 400);
    }

    const body = await request.json();
    const updated = await PendaftarService.updateStatus(id, body);

    return NextResponse.json(updated);
  } catch (error) {
    return handleApiError(error, 'PUT /api/v1/pendaftar/[id]');
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getUserFromToken();
    if (!user || (user.role !== 'SuperAdmin' && user.role !== 'AdminPPDB')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id);
    if (isNaN(id)) {
      throw new ApiError('Invalid ID', 400);
    }

    await PendaftarService.delete(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return handleApiError(error, 'DELETE /api/v1/pendaftar/[id]');
  }
}
