"use client";

import React, { useState, useEffect } from 'react';
import { Search, Edit, Trash2, Eye, Calendar, User, ImageIcon } from 'lucide-react';
import Link from 'next/link';

interface BeritaModel {
  id: number;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  imageUrl: string | null;
  author: string;
  isFeatured: boolean;
  status: string;
  viewer: number;
  createdAt: string;
  updatedAt: string;
}

const statusColor: Record<string, string> = {
  "Published": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "published": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Draft":     "bg-slate-100 text-slate-600 border-slate-300",
  "draft":     "bg-slate-100 text-slate-600 border-slate-300",
};

export default function BeritaTable() {
  const [data, setData] = useState<BeritaModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterKategori, setFilterKategori] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const fetchBerita = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/v1/berita', { cache: 'no-store' });
      if (!response.ok) throw new Error('Gagal mengambil data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan saat memuat data berita.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBerita();
  }, []);

  const handleDelete = async (id: number, judul: string) => {
    if (confirm(`Apakah Anda yakin ingin menghapus berita '${judul}' ini secara permanen?`)) {
      try {
        const res = await fetch(`/api/v1/berita/${id}`, {
          method: 'DELETE',
        });
        if (!res.ok) throw new Error('Gagal menghapus berita');
        
        setData(data.filter(item => item.id !== id));
      } catch (error) {
        console.error(error);
        alert('Gagal menghapus berita.');
      }
    }
  };

  if (isLoading) {
    return <div className="p-8 text-center text-slate-500">Memuat data berita...</div>;
  }

  const filteredData = data.filter(item => {
    const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        item.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchKategori = filterKategori ? item.category === filterKategori : true;
    const matchStatus = filterStatus ? item.status.toLowerCase() === filterStatus.toLowerCase() : true;
    return matchSearch && matchKategori && matchStatus;
  });

  return (
    <div className="space-y-4">
      {/* Filter & Pencarian */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Cari judul berita atau penulis..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select 
            value={filterKategori}
            onChange={(e) => setFilterKategori(e.target.value)}
            className="block w-full sm:w-auto py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
          >
            <option value="">Semua Kategori</option>
            <option value="Kegiatan">Kegiatan</option>
            <option value="Prestasi">Prestasi</option>
            <option value="Informasi Umum">Informasi Umum</option>
            <option value="Pengumuman Penting">Pengumuman Penting</option>
          </select>
          <select 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="block w-full sm:w-auto py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
          >
            <option value="">Semua Status</option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>
        </div>
      </div>

      {/* Tabel Data */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-semibold text-slate-500">
              <tr>
                <th className="px-6 py-4 w-12 text-center">No</th>
                <th className="px-4 py-4 w-20 text-center">Gambar</th>
                <th className="px-6 py-4">Informasi Berita</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-center">Statistik</th>
                <th className="px-6 py-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                    Tidak ada berita yang sesuai dengan kriteria pencarian.
                  </td>
                </tr>
              ) : (
              filteredData.map((item, i) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-center text-slate-400">{i + 1}</td>
                  <td className="px-4 py-4 text-center">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        loading="lazy"
                        className="w-16 h-10 object-cover rounded shadow-sm border border-slate-200"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://placehold.co/100x60/f8fafc/94a3b8?text=Error';
                        }}
                      />
                    ) : (
                      <div className="w-16 h-10 bg-slate-100 rounded border border-slate-200 flex items-center justify-center">
                        <ImageIcon className="w-4 h-4 text-slate-400" />
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-slate-800 mb-1.5 leading-snug max-w-md">{item.title}</p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      {item.isFeatured && (
                        <span className="inline-flex px-2 py-0.5 text-[11px] font-medium bg-amber-50 text-amber-600 rounded border border-amber-200">
                          Berita Utama
                        </span>
                      )}
                      <span className="flex items-center gap-1 font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {new Date(item.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" /> {item.author}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full border ${statusColor[item.status] ?? 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-1.5 text-slate-500 font-medium" suppressHydrationWarning>
                      <Eye className="w-4 h-4 text-slate-400" />
                      {item.viewer?.toLocaleString('id-ID') || 0}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <Link href={`/admin/dashboard/berita/edit/${item.id}`} title="Edit Berita" className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors inline-block">
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button 
                        title="Hapus Berita" 
                        className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        onClick={() => handleDelete(item.id, item.title)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Bawah */}
        <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <p className="text-sm text-slate-500">Menampilkan {filteredData.length} dari {data.length} berita</p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-sm font-medium text-slate-400 border border-slate-200 rounded-lg cursor-not-allowed">
              Sebelumnya
            </button>
            <button className="px-3 py-1.5 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
