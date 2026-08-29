import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getUserFromToken } from '@/utils/auth-util';
import { handleApiError } from '@/utils/api-error';

export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromToken();
    if (!user || (user.role !== 'SuperAdmin' && user.role !== 'AdminPPDB')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    await prisma.pendaftarPPDB.updateMany({
      where: { isRead: false },
      data: { isRead: true },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return handleApiError(error, 'POST /api/v1/pendaftar/markAll');
  }
}
