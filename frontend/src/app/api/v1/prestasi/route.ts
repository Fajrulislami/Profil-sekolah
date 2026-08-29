import { NextRequest, NextResponse } from 'next/server';
import { PrestasiService } from '@/services/prestasi-service';
import { getUserFromToken } from '@/utils/auth-util';
import { validateImageUrl } from '@/utils/image-util';
import { handleApiError } from '@/utils/api-error';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get('type');
    const isPublic = searchParams.get('public') === 'true';

    let prestasi;
    
    if (type === 'featured') {
      prestasi = await PrestasiService.getFeatured();
    } else if (isPublic) {
      prestasi = await PrestasiService.getPublished();
    } else {
      prestasi = await PrestasiService.getAll(); // for admin
    }

    return NextResponse.json(prestasi, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' }
    });
  } catch (error) {
    return handleApiError(error, 'GET /api/v1/prestasi');
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromToken();
    if (!user || (user.role !== 'SuperAdmin' && user.role !== 'AdminHumas')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const body = await request.json();
    
    // Validasi URL gambar
    if (body.imageUrl) {
      const imageError = await validateImageUrl(body.imageUrl);
      if (imageError) {
        return NextResponse.json({ error: imageError }, { status: 400 });
      }
    }

    const newPrestasi = await PrestasiService.create(body);

    return NextResponse.json(newPrestasi, { status: 201 });
  } catch (error) {
    return handleApiError(error, 'POST /api/v1/prestasi');
  }
}
