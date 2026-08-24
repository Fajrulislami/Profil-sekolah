import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';
import PrestasiForm from '@/components/admin/prestasi/PrestasiForm';

export default function TambahPrestasiPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/dashboard/prestasi"
            className="p-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors"
            title="Kembali ke Daftar Prestasi"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Tambah Data Prestasi</h1>
            <p className="text-sm text-slate-500 mt-1">Catat penghargaan atau pencapaian terbaru dari siswa atau tim sekolah.</p>
          </div>
        </div>

        {/* Tombol Aksi - Hierarki Jelas */}
        <div className="flex items-center gap-3">
          <Link
            href="/admin/dashboard/prestasi"
            className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Batal
          </Link>
          <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-2 px-5 rounded-lg transition-colors shadow-sm">
            <Save className="w-4 h-4" />
            Simpan Prestasi
          </button>
        </div>
      </div>

      <PrestasiForm />
    </div>
  );
}
