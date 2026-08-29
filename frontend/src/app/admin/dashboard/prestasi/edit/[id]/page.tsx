"use client";

import React, { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save } from 'lucide-react';
import PrestasiForm, { PrestasiData } from '@/components/admin/prestasi/PrestasiForm';

export default function EditPrestasiPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [initialData, setInitialData] = useState<PrestasiData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrestasi = async () => {
      try {
        const res = await fetch(`/api/v1/prestasi/${id}`);
        if (!res.ok) {
          throw new Error('Gagal mengambil data prestasi');
        }
        const data = await res.json();
        
        // Mapping dari skema database ke PrestasiData
        setInitialData({
          id: data.id,
          title: data.title,
          recipient: data.recipient,
          competitionName: data.competitionName,
          level: data.level,
          category: data.category,
          medal: data.medal,
          year: data.year,
          description: data.description || "",
          imageUrl: data.imageUrl || "",
          isFeatured: data.isFeatured,
          status: data.status,
        });
      } catch (error) {
        alert("Data prestasi tidak ditemukan!");
        router.push('/admin/dashboard/prestasi');
      }
    };
    
    if (id) {
      fetchPrestasi();
    }
  }, [id, router]);

  const handleSubmit = async (updatedData: PrestasiData) => {
    setApiError(null);
    try {
      setIsSubmitting(true);
      const res = await fetch(`/api/v1/prestasi/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Gagal memperbarui prestasi');
      }

      alert("Prestasi berhasil diperbarui!");
      router.push('/admin/dashboard/prestasi');
    } catch (error: any) {
      setApiError(error.message || 'Terjadi kesalahan saat memperbarui prestasi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!initialData) {
    return <div className="p-8 text-center text-slate-500">Memuat data...</div>;
  }

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
            <h1 className="text-2xl font-bold text-slate-800">Edit Data Prestasi</h1>
            <p className="text-sm text-slate-500 mt-1">Perbarui informasi tentang penghargaan atau pencapaian.</p>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="flex items-center gap-3">
          <Link
            href="/admin/dashboard/prestasi"
            className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Batal
          </Link>
          <button 
            type="submit" 
            form="prestasi-form"
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-sm font-medium py-2 px-5 rounded-lg transition-colors shadow-sm"
          >
            <Save className="w-4 h-4" />
            {isSubmitting ? 'Menyimpan...' : 'Simpan Perubahan'}
          </button>
        </div>
      </div>

      <PrestasiForm initialData={initialData} onSubmit={handleSubmit} apiError={apiError} />
    </div>
  );
}
