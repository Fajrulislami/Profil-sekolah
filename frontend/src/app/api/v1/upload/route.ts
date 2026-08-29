import { NextRequest, NextResponse } from 'next/server';
import { getUserFromToken } from '@/utils/auth-util';
import { put } from '@vercel/blob';

export async function POST(request: NextRequest) {
  try {
    // 1. Verifikasi Autentikasi User
    const user = await getUserFromToken();
    if (!user || (user.role !== 'SuperAdmin' && user.role !== 'AdminHumas')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // 2. Menerima File dari Request
    const formData = await request.formData();
    const imageFile = formData.get('image') as File | null;

    if (!imageFile) {
      return NextResponse.json({ error: 'Tidak ada file gambar yang dikirim' }, { status: 400 });
    }

    // 3. Batasan ukuran file awal (misal 5MB)
    if (imageFile.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'Ukuran gambar tidak boleh melebihi 5MB' }, { status: 400 });
    }

    // 4. Bikin nama file unik dan upload ke Vercel Blob
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = imageFile.name.split('.').pop() || 'jpg';
    const filename = `berita-${uniqueSuffix}.${ext}`;

    const blob = await put(filename, imageFile, {
      access: 'public',
    });
    
    // 5. Kembalikan URL Gambar dari Vercel Blob
    return NextResponse.json({ url: blob.url });

  } catch (error) {
    console.error("Upload API Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
