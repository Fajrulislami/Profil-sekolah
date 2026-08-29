"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save } from 'lucide-react';
import FasilitasForm, { FasilitasData } from '@/components/admin/fasilitas/FasilitasForm';
// import { useLocalStorage } from '@/hooks/useLocalStorage';

export default function TambahFasilitasPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [apiError, setApiError] = React.useState<string | null>(null);

  const handleSubmit = async (newData: FasilitasData) => {
    setApiError(null);
    try {
      setIsSubmitting(true);
      const res = await fetch('/api/v1/fasilitas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Gagal menambahkan fasilitas');
      }

      alert("Fasilitas berhasil ditambahkan!");
      router.push('/admin/dashboard/fasilitas');
    } catch (error: any) {
      setApiError(error.message || 'Terjadi kesalahan saat menyimpan fasilitas.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      
      {/* Header dengan Tombol Kembali */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/dashboard/fasilitas"
            className="p-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors"
            title="Kembali ke Daftar Fasilitas"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Tambah Fasilitas Baru</h1>
            <p className="text-sm text-slate-500 mt-1">Masukkan informasi mengenai gedung, ruangan, atau sarana baru.</p>
          </div>
        </div>
        
        {/* Tombol Aksi Utama - Hierarki Jelas */}
        <div className="flex items-center gap-3">
          <Link 
            href="/admin/dashboard/fasilitas"
            className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Batal
          </Link>
          <button 
            type="submit" 
            form="fasilitas-form"
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-sm font-medium py-2 px-5 rounded-lg transition-colors shadow-sm"
          >
            <Save className="w-4 h-4" />
            {isSubmitting ? 'Menyimpan...' : 'Simpan Fasilitas'}
          </button>
        </div>
      </div>

      {/* Komponen Form Fasilitas */}
      <FasilitasForm onSubmit={handleSubmit} apiError={apiError} isSubmitting={isSubmitting} />

    </div>
  );
}
