"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save } from 'lucide-react';
import BeritaForm, { BeritaData } from '@/components/admin/berita/BeritaForm';

export default function TambahBeritaPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleSubmit = async (newData: BeritaData) => {
    setApiError(null);
    try {
      if (!newData.imageUrl) {
        const confirmNoImage = window.confirm('Anda belum menambahkan gambar berita. Yakin ingin menyimpan berita tanpa gambar?');
        if (!confirmNoImage) return;
      }
      
      setIsSubmitting(true);
      
      const payload = {
        title: newData.judul,
        category: newData.kategori,
        excerpt: newData.ringkasan,
        content: newData.isi,
        author: newData.penulis,
        isFeatured: newData.isUtama,
        status: newData.status.toUpperCase(),
        imageUrl: newData.imageUrl,
      };

      const res = await fetch('/api/v1/berita', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Gagal menyimpan berita');
      }

      alert('Berita berhasil ditambahkan!');
      router.push('/admin/dashboard/berita');
    } catch (e: any) {
      console.error(e);
      setApiError(e.message || 'Terjadi kesalahan saat menyimpan berita.');
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
            href="/admin/dashboard/berita"
            className="p-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors"
            title="Kembali ke Daftar Berita"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Tulis Berita Baru</h1>
            <p className="text-sm text-slate-500 mt-1">Buat artikel, pengumuman, atau dokumentasi kegiatan sekolah.</p>
          </div>
        </div>
        
        {/* Tombol Aksi Utama - Hierarki Jelas */}
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
            {isSubmitting ? 'Menyimpan...' : 'Simpan Berita'}
          </button>
        </div>
      </div>

      {/* Area Form Utama dari Component */}
      <BeritaForm onSubmit={handleSubmit} apiError={apiError} />
    </div>
  );
}
