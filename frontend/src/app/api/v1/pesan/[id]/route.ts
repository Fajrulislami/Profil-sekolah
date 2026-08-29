import { NextRequest, NextResponse } from 'next/server';
import { PesanService } from '@/services/pesan-service';
import { getUserFromToken } from '@/utils/auth-util';

export const dynamic = 'force-dynamic';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getUserFromToken();
    if (!user || (user.role !== 'SuperAdmin' && user.role !== 'AdminHumas')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { id } = await params;
    const pesanId = parseInt(id, 10);
    
    if (isNaN(pesanId)) {
      return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
    }

    const body = await request.json();

    const updatedPesan = await PesanService.updateStatus(pesanId, body);
    return NextResponse.json(updatedPesan);
  } catch (error: any) {
    console.error('Error updating pesan:', error);
    
    if (error && error.name === 'ZodError') {
      const errorMessage = error.issues?.[0]?.message || error.errors?.[0]?.message || 'Data tidak valid';
      return NextResponse.json({ error: errorMessage }, { status: 400 });
    }
    
    if (error.message === 'Pesan tidak ditemukan') {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }
    
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getUserFromToken();
    if (!user || (user.role !== 'SuperAdmin' && user.role !== 'AdminHumas')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { id } = await params;
    const pesanId = parseInt(id, 10);
    
    if (isNaN(pesanId)) {
      return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
    }

    await PesanService.delete(pesanId);
    return NextResponse.json({ success: true, message: 'Pesan berhasil dihapus' });
  } catch (error: any) {
    console.error('Error deleting pesan:', error);
    
    if (error.message === 'Pesan tidak ditemukan') {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }
    
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
