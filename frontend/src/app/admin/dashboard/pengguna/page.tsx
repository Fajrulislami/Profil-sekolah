import React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import PenggunaTable from '@/components/admin/pengguna/PenggunaTable';

export default function PenggunaPage() {
  return (
    <div className="space-y-6">
      {/* Header & Aksi Utama */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Kelola Pengguna Admin</h1>
          <p className="text-sm text-slate-500 mt-1">
            Atur siapa saja yang memiliki hak akses untuk mengelola konten website (CMS).
          </p>
        </div>
        <Link
          href="/admin/dashboard/pengguna/tambah"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors shadow-sm"
        >
          <Plus className="w-5 h-5" />
          Tambah Admin Baru
        </Link>
      </div>

      <PenggunaTable />
    </div>
  );
}
