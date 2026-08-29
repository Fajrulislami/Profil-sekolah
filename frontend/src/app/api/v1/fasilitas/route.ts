import { NextResponse } from 'next/server';
import * as fasilitasService from '@/services/fasilitas-service';
import { getUserFromToken } from '@/utils/auth-util';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const data = await fasilitasService.getAllFasilitas();
    return NextResponse.json(data, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' }
    });
  } catch (error) {
    console.error('Error fetching fasilitas:', error);
    return NextResponse.json({ error: 'Failed to fetch fasilitas' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const user = await getUserFromToken();
    if (!user || (user.role !== 'SuperAdmin' && user.role !== 'AdminHumas')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const body = await request.json();
    // Simple validation – ensure required fields exist
    const required = ['nama', 'deskripsi', 'fungsiUtama', 'kapasitas', 'lokasi', 'pengguna'];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json({ error: `Field ${field} is required` }, { status: 400 });
      }
    }
    // Optional fields
    const imageUrl = body.imageUrl ?? null; // URL from Vercel Blob upload (optional)
    const category = body.category ?? 'umum';
    const status = body.status ?? 'Aktif';

    const newFasilitas = await fasilitasService.createFasilitas({
      nama: body.nama,
      category,
      deskripsi: body.deskripsi,
      fungsiUtama: body.fungsiUtama,
      kapasitas: body.kapasitas,
      lokasi: body.lokasi,
      pengguna: body.pengguna,
      status,
      imageUrl,
    });
    return NextResponse.json(newFasilitas, { status: 201 });
  } catch (error) {
    console.error('Error creating fasilitas:', error);
    return NextResponse.json({ error: 'Failed to create fasilitas' }, { status: 500 });
  }
}
