import React from 'react';
import PPDBPanel from '@/components/admin/ppdb/PPDBPanel';

export default function PPDBPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Kelola Informasi PPDB</h1>
        <p className="text-sm text-slate-500 mt-1">
          Perbarui jalur pendaftaran, jadwal gelombang, biaya, persyaratan, dan FAQ yang tampil di halaman PPDB publik.
        </p>
      </div>

      <PPDBPanel />
    </div>
  );
}
