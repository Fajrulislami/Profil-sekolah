import React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import PrestasiTable from '@/components/admin/prestasi/PrestasiTable';
import { getUserFromToken } from '@/utils/auth-util';
import AccessDenied from '@/components/admin/AccessDenied';

export default async function DaftarPrestasiPage() {
  const user = await getUserFromToken();

  if (user?.role === 'AdminPPDB') {
    return <AccessDenied />;
  }
  return (
    <div className="space-y-6">
      {/* Header & Aksi Utama */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Kelola Data Prestasi</h1>
          <p className="text-sm text-slate-500 mt-1">
            Daftar pencapaian dan penghargaan yang telah diraih oleh siswa dan sekolah.
          </p>
        </div>
        <Link
          href="/admin/dashboard/prestasi/tambah"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors shadow-sm"
        >
          <Plus className="w-5 h-5" />
          Tambah Prestasi
        </Link>
      </div>

      <PrestasiTable />
    </div>
  );
}
