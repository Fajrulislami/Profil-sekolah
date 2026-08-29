import React from 'react';
import PesanInbox from '@/components/admin/pesan/PesanInbox';
import { getUserFromToken } from '@/utils/auth-util';
import AccessDenied from '@/components/admin/AccessDenied';

export default async function PesanPage() {
  const user = await getUserFromToken();

  if (user?.role === 'AdminPPDB') {
    return <AccessDenied />;
  }
  return (
    <div className="space-y-6 h-full flex flex-col">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Pesan Masuk</h1>
        <p className="text-sm text-slate-500 mt-1">
          Kelola pertanyaan, konsultasi PPDB, dan pesan dari pengunjung website.
        </p>
      </div>

      <div className="flex-1 min-h-0">
        <PesanInbox />
      </div>
    </div>
  );
}
