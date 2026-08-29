"use client";

import React, { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save } from 'lucide-react';
import FasilitasForm, { FasilitasData } from '@/components/admin/fasilitas/FasilitasForm';
// import { useLocalStorage } from '@/hooks/useLocalStorage';

export default function EditFasilitasPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [initialData, setInitialData] = useState<FasilitasData | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [apiError, setApiError] = React.useState<string | null>(null);

  useEffect(() => {
    // Cari data berdasarkan ID via API
    const fetchFasilitas = async () => {
      try {
        const res = await fetch(`/api/v1/fasilitas/${id}`);
        if (res.ok) {
          const result = await res.json();
          setInitialData(result);
        } else {
          alert("Data fasilitas tidak ditemukan!");
          router.push('/admin/dashboard/fasilitas');
        }
      } catch (error) {
        console.error(error);
        alert("Gagal mengambil data fasilitas");
        router.push('/admin/dashboard/fasilitas');
      }
    };
    fetchFasilitas();
  }, [id, router]);

  const handleSubmit = async (updatedData: FasilitasData) => {
    setApiError(null);
    try {
      setIsSubmitting(true);
      const res = await fetch(`/api/v1/fasilitas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Gagal memperbarui fasilitas');
      }

      alert("Fasilitas berhasil diperbarui!");
      router.push('/admin/dashboard/fasilitas');
    } catch (error: any) {
      setApiError(error.message || 'Terjadi kesalahan saat memperbarui fasilitas.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!initialData) {
    return <div className="p-8 text-center text-slate-500">Memuat data...</div>;
  }

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
            <h1 className="text-2xl font-bold text-slate-800">Edit Fasilitas</h1>
            <p className="text-sm text-slate-500 mt-1">Perbarui informasi mengenai gedung, ruangan, atau sarana.</p>
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
            {isSubmitting ? 'Menyimpan...' : 'Simpan Perubahan'}
          </button>
        </div>
      </div>

      {/* Komponen Form Fasilitas */}
      <FasilitasForm initialData={initialData} onSubmit={handleSubmit} apiError={apiError} isSubmitting={isSubmitting} />

    </div>
  );
}
