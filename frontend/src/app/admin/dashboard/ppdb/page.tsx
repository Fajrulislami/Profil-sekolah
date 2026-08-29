import React from 'react';
import PPDBPanel from '@/components/admin/ppdb/PPDBPanel';
import { getUserFromToken } from '@/utils/auth-util';
import AccessDenied from '@/components/admin/AccessDenied';

export default async function PPDBPage() {
  const user = await getUserFromToken();

  if (user?.role === 'AdminHumas') {
    return <AccessDenied message="Data pendaftar PPDB bersifat rahasia. Hanya Super Admin dan Admin PPDB yang memiliki akses." />;
  }
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
