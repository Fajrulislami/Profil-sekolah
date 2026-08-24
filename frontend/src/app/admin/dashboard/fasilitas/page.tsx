import React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import FasilitasTable from '@/components/admin/fasilitas/FasilitasTable';

export default function DaftarFasilitasPage() {
  return (
    <div className="space-y-6">
      
      {/* Header & Aksi Utama */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Kelola Data Fasilitas</h1>
          <p className="text-sm text-slate-500 mt-1">
            Daftar fasilitas sekolah (ruang kelas, lab, asrama) beserta spesifikasinya.
          </p>
        </div>
        <div>
          {/* Tombol Utama yang sangat menonjol */}
          <Link 
            href="/admin/dashboard/fasilitas/tambah"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors shadow-sm"
          >
            <Plus className="w-5 h-5" />
            Tambah Fasilitas
          </Link>
        </div>
      </div>

      {/* Komponen Tabel Fasilitas */}
      <FasilitasTable />

    </div>
  );
}
