"use client";

import React, { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save } from 'lucide-react';
import PenggunaForm, { PenggunaData } from '@/components/admin/pengguna/PenggunaForm';


export default function EditPenggunaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [initialData, setInitialData] = useState<PenggunaData | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/v1/pengguna/${id}`);
        if (response.ok) {
          const data = await response.json();
          setInitialData(data);
        } else {
          alert("Data admin tidak ditemukan!");
          router.push('/admin/dashboard/pengguna');
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    
    fetchUser();
  }, [id, router]);

  const handleSubmit = async (updatedData: PenggunaData) => {
    setApiError(null);
    try {
      const response = await fetch(`/api/v1/pengguna/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        alert("Data admin berhasil diperbarui!");
        router.push('/admin/dashboard/pengguna');
      } else {
        const errorData = await response.json();
        setApiError(errorData.error || 'Terjadi kesalahan saat memperbarui admin');
      }
    } catch (error) {
      console.error('Error updating user:', error);
      setApiError('Terjadi kesalahan koneksi saat memperbarui admin');
    }
  };

  if (!initialData) {
    return <div className="p-8 text-center text-slate-500">Memuat data...</div>;
  }

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
            <span>Edit Pengguna</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Edit Data Admin</h1>
        </div>
        
        <button
          type="submit"
          form="pengguna-form"
          className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors shadow-sm"
        >
          <Save className="w-5 h-5" />
          Simpan Perubahan
        </button>
      </div>

      <PenggunaForm initialData={initialData} onSubmit={handleSubmit} apiError={apiError} />
    </div>
  );
}
