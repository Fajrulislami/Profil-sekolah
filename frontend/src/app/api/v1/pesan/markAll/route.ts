import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getUserFromToken } from '@/utils/auth-util';

export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromToken();
    if (!user || (user.role !== 'SuperAdmin' && user.role !== 'AdminHumas')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    await prisma.pesan.updateMany({
      where: { isRead: false },
      data: { isRead: true },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Error updating all pesan:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
