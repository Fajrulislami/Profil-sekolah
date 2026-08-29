import React from 'react';
import { getUserFromToken } from '@/utils/auth-util';
import AccessDenied from '@/components/admin/AccessDenied';
import PendaftarTable from '@/components/admin/pendaftar/PendaftarTable';
import { Users } from 'lucide-react';

export default async function PendaftarPage() {
  const user = await getUserFromToken();

  if (user?.role === 'AdminHumas') {
    return <AccessDenied message="Data pendaftar PPDB bersifat rahasia. Hanya Super Admin dan Admin PPDB yang memiliki akses." />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Users className="w-6 h-6 text-emerald-600" />
            Data Pendaftar PPDB
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Kelola dan pantau status pendaftar calon siswa baru dari form PPDB publik.
          </p>
        </div>
      </div>

      <PendaftarTable />
    </div>
  );
}
