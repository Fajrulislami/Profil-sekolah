import { NextRequest, NextResponse } from 'next/server';
import { BeritaService } from '@/services/berita-service';
import { getUserFromToken } from '@/utils/auth-util';
import { validateImageUrl } from '@/utils/image-util';
import { handleApiError } from '@/utils/api-error';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get('type'); // e.g. 'featured', 'published'
    
    let berita;
    if (type === 'featured') {
      berita = await BeritaService.getFeatured();
    } else if (type === 'published') {
      berita = await BeritaService.getPublished();
    } else {
      berita = await BeritaService.getAll(); // for admin
    }
    
    return NextResponse.json(berita, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' }
    });
  } catch (error) {
    return handleApiError(error, 'GET /api/v1/berita');
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

    const newBerita = await BeritaService.create(body);

    return NextResponse.json(newBerita, { status: 201 });
  } catch (error) {
    return handleApiError(error, 'POST /api/v1/berita');
  }
}
