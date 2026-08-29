"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save } from 'lucide-react';
import PenggunaForm, { PenggunaData } from '@/components/admin/pengguna/PenggunaForm';


export default function TambahPenggunaPage() {
  const router = useRouter();
  const [apiError, setApiError] = useState<string | null>(null);

  const handleSubmit = async (newData: PenggunaData) => {
    setApiError(null);
    try {
      // Create user using API
      const response = await fetch('/api/v1/pengguna', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        alert("Admin baru berhasil ditambahkan!");
        router.push('/admin/dashboard/pengguna');
      } else {
        const errorData = await response.json();
        setApiError(errorData.error || 'Terjadi kesalahan saat menambahkan admin');
      }
    } catch (error) {
      console.error('Error creating user:', error);
      setApiError('Terjadi kesalahan koneksi saat menambahkan admin');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Aksi Utama */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <Link href="/admin/dashboard/pengguna" className="hover:text-emerald-600 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Kembali
            </Link>
            <span>/</span>
            <span>Tambah Pengguna</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Tambah Admin Baru</h1>
        </div>
        
        <button
          type="submit"
          form="pengguna-form"
          className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors shadow-sm"
        >
          <Save className="w-5 h-5" />
          Simpan Admin Baru
        </button>
      </div>

      <PenggunaForm onSubmit={handleSubmit} apiError={apiError} />
    </div>
  );
}
