"use client";

import React, { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save } from 'lucide-react';
import BeritaForm, { BeritaData } from '@/components/admin/berita/BeritaForm';

export default function EditBeritaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [initialData, setInitialData] = useState<BeritaData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const res = await fetch(`/api/v1/berita/${id}`);
        if (!res.ok) {
          throw new Error('Data tidak ditemukan');
        }
        const data = await res.json();
        
        // Map database fields to form fields if needed
        const mappedData: BeritaData = {
          id: data.id,
          judul: data.title,
          ringkasan: data.excerpt,
          isi: data.content,
          kategori: data.category,
          penulis: data.author,
          isUtama: data.isFeatured,
          status: data.status,
          imageUrl: data.imageUrl || '',
        };
        
        setInitialData(mappedData);
      } catch (error) {
        alert("Data berita tidak ditemukan!");
        router.push('/admin/dashboard/berita');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBerita();
  }, [id, router]);

  const handleSubmit = async (updatedData: BeritaData) => {
    setApiError(null);
    try {
      if (!updatedData.imageUrl) {
        const confirmNoImage = window.confirm('Anda belum menambahkan gambar berita. Yakin ingin menyimpan berita tanpa gambar?');
        if (!confirmNoImage) return;
      }
      
      setIsSubmitting(true);
      const res = await fetch(`/api/v1/berita/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: updatedData.judul,
          category: updatedData.kategori,
          excerpt: updatedData.ringkasan,
          content: updatedData.isi,
          imageUrl: updatedData.imageUrl,
          author: updatedData.penulis,
          isFeatured: updatedData.isUtama,
          status: updatedData.status.toUpperCase(),
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Gagal memperbarui berita');
      }

      alert("Berita berhasil diperbarui!");
      router.push('/admin/dashboard/berita');
    } catch (error: any) {
      console.error(error);
      setApiError(error.message || 'Terjadi kesalahan saat memperbarui berita.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading || !initialData) {
    return <div className="p-8 text-center text-slate-500">Memuat data...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/dashboard/berita"
            className="p-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors"
            title="Kembali ke Daftar Berita"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Edit Berita</h1>
            <p className="text-sm text-slate-500 mt-1">Perbarui informasi, isi berita, atau status publikasi.</p>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="flex items-center gap-3">
          <Link
            href="/admin/dashboard/berita"
            className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Batal
          </Link>
          <button 
            type="submit" 
            form="berita-form"
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white text-sm font-medium py-2 px-5 rounded-lg transition-colors shadow-sm"
          >
            <Save className="w-4 h-4" />
            {isSubmitting ? 'Menyimpan...' : 'Simpan Perubahan'}
          </button>
        </div>
      </div>

      <BeritaForm initialData={initialData} onSubmit={handleSubmit} apiError={apiError} />
    </div>
  );
}
