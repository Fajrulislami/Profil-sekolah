import { NextResponse } from 'next/server';
import * as fasilitasService from '@/services/fasilitas-service';
import { getUserFromToken } from '@/utils/auth-util';

export const dynamic = 'force-dynamic';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }
  try {
    const data = await fasilitasService.getFasilitasById(id);
    if (!data) {
      return NextResponse.json({ error: 'Fasilitas not found' }, { status: 404 });
    }
    return NextResponse.json(data, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' }
    });
  } catch (error) {
    console.error('Error fetching fasilitas by id:', error);
    return NextResponse.json({ error: 'Failed to fetch fasilitas' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }
  try {
    const user = await getUserFromToken();
    if (!user || (user.role !== 'SuperAdmin' && user.role !== 'AdminHumas')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const body = await request.json();
    
    // Ambil data lama untuk merge
    const existing = await fasilitasService.getFasilitasById(id);
    if (!existing) {
      return NextResponse.json({ error: 'Fasilitas not found' }, { status: 404 });
    }

    const updatePayload = {
      nama: body.nama ?? existing.nama,
      deskripsi: body.deskripsi ?? existing.deskripsi,
      fungsiUtama: body.fungsiUtama ?? existing.fungsiUtama,
      kapasitas: body.kapasitas ?? existing.kapasitas,
      lokasi: body.lokasi ?? existing.lokasi,
      pengguna: body.pengguna ?? existing.pengguna,
      status: body.status ?? existing.status,
      category: body.category ?? existing.category,
      imageUrl: body.imageUrl !== undefined ? body.imageUrl : existing.imageUrl,
    };

    const updated = await fasilitasService.updateFasilitas(id, updatePayload);
    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating fasilitas:', error);
    return NextResponse.json({ error: 'Failed to update fasilitas' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }
  try {
    const user = await getUserFromToken();
    if (!user || (user.role !== 'SuperAdmin' && user.role !== 'AdminHumas')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const deleted = await fasilitasService.deleteFasilitas(id);
    return NextResponse.json(deleted);
  } catch (error) {
    console.error('Error deleting fasilitas:', error);
    return NextResponse.json({ error: 'Failed to delete fasilitas' }, { status: 500 });
  }
}
