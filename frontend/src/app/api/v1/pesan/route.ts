import { NextRequest, NextResponse } from 'next/server';
import { PesanService } from '@/services/pesan-service';
import { getUserFromToken } from '@/utils/auth-util';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const user = await getUserFromToken();
    if (!user || (user.role !== 'SuperAdmin' && user.role !== 'AdminHumas')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const messages = await PesanService.getAll();
    return NextResponse.json(messages, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' }
    });
  } catch (error: any) {
    console.error('Error fetching pesan:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newPesan = await PesanService.create(body);
    return NextResponse.json(newPesan, { status: 201 });
  } catch (error: any) {
    console.error('Error creating pesan:', error);
    
    if (error && error.name === 'ZodError') {
      const errorMessage = error.issues?.[0]?.message || error.errors?.[0]?.message || 'Data tidak valid';
      return NextResponse.json({ error: errorMessage }, { status: 400 });
    }
    
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
