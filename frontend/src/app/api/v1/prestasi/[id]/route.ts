import { NextRequest, NextResponse } from 'next/server';
import { PrestasiService } from '@/services/prestasi-service';
import { getUserFromToken } from '@/utils/auth-util';
import { validateImageUrl } from '@/utils/image-util';
import { handleApiError } from '@/utils/api-error';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const prestasiId = parseInt(id, 10);
    
    if (isNaN(prestasiId)) {
      return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
    }

    const prestasi = await PrestasiService.getById(prestasiId);
    return NextResponse.json(prestasi, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' }
    });
  } catch (error) {
    return handleApiError(error, 'GET /api/v1/prestasi/[id]');
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await getUserFromToken();
    if (!user || (user.role !== 'SuperAdmin' && user.role !== 'AdminHumas')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { id } = await params;
    const prestasiId = parseInt(id, 10);
    
    if (isNaN(prestasiId)) {
      return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
    }

    const body = await request.json();
    
    // Validasi URL gambar
    if (body.imageUrl) {
      const imageError = await validateImageUrl(body.imageUrl);
      if (imageError) {
        return NextResponse.json({ error: imageError }, { status: 400 });
      }
    }
    
    const updatedPrestasi = await PrestasiService.update(prestasiId, body);
    return NextResponse.json(updatedPrestasi);
  } catch (error) {
    return handleApiError(error, 'PUT /api/v1/prestasi/[id]');
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await getUserFromToken();
    if (!user || (user.role !== 'SuperAdmin' && user.role !== 'AdminHumas')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { id } = await params;
    const prestasiId = parseInt(id, 10);
    
    if (isNaN(prestasiId)) {
      return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
    }

    await PrestasiService.delete(prestasiId);

    return NextResponse.json({ message: 'Prestasi berhasil dihapus' });
  } catch (error) {
    return handleApiError(error, 'DELETE /api/v1/prestasi/[id]');
  }
}
