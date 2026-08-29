import React from 'react';
import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';

interface AccessDeniedProps {
  message?: string;
}

export default function AccessDenied({ message = 'Anda tidak memiliki izin untuk melihat halaman ini.' }: AccessDeniedProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4">
        <ShieldAlert className="w-8 h-8 text-rose-600" />
      </div>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Akses Ditolak</h2>
      <p className="text-slate-500 max-w-md">
        {message}
      </p>
      <Link 
        href="/admin/dashboard" 
        className="mt-6 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors font-medium"
      >
        Kembali ke Dasbor
      </Link>
    </div>
  );
}
