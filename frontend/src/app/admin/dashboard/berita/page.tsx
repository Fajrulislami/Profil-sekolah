import React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react'; // Hapus Search, Edit, Trash2 karena sudah dipindah ke tabel
import BeritaTable from '@/components/admin/berita/BeritaTable';
import { getUserFromToken } from '@/utils/auth-util';
import AccessDenied from '@/components/admin/AccessDenied';

export default async function DaftarBeritaPage() {
  const user = await getUserFromToken();

  if (user?.role === 'AdminPPDB') {
    return <AccessDenied />;
  }
  return (
    <div className="space-y-6">
      
      {/* Header & Aksi Utama */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Kelola Berita & Informasi</h1>
          <p className="text-sm text-slate-500 mt-1">
            Daftar semua artikel, pengumuman, dan berita yang tampil di website.
          </p>
        </div>
        <div>
          {/* Tombol Utama yang sangat menonjol */}
          <Link 
            href="/admin/dashboard/berita/tambah"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <Plus className="w-5 h-5" />
            Tulis Berita Baru
          </Link>
        </div>
      </div>

      {/* Komponen Tabel Berita */}
      <BeritaTable />
    </div>
  );
}
