"use client";

import React from 'react';
import { Search, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export interface PrestasiModel {
  id: number;
  title: string;
  recipient: string;
  competitionName: string;
  level: string;
  category: string;
  medal: string;
  year: number;
  isFeatured: boolean;
  status: string;
}

export default function PrestasiTable() {
  const [data, setData] = useState<PrestasiModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTingkat, setFilterTingkat] = useState("");
  const [filterBidang, setFilterBidang] = useState("");
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchPrestasi = async () => {
    try {
      const res = await fetch('/api/v1/prestasi', { cache: 'no-store' });
      if (res.ok) {
        const result = await res.json();
        setData(result);
      }
    } catch (error) {
      console.error("Gagal mengambil data prestasi:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPrestasi();
  }, []);

  const handleDelete = async (id: number, judul: string) => {
    if (confirm(`Apakah Anda yakin ingin menghapus prestasi '${judul}' ini secara permanen?`)) {
      try {
        const res = await fetch(`/api/v1/prestasi/${id}`, {
          method: 'DELETE',
        });
        if (res.ok) {
          setData(data.filter(item => item.id !== id));
        } else {
          alert('Gagal menghapus prestasi');
        }
      } catch (error) {
        alert('Terjadi kesalahan saat menghapus');
      }
    }
  };

  const filteredData = data.filter(item => {
    const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        item.recipient.toLowerCase().includes(searchQuery.toLowerCase());
    const matchTingkat = filterTingkat ? item.level === filterTingkat : true;
    const matchBidang = filterBidang ? item.category === filterBidang : true;
    return matchSearch && matchTingkat && matchBidang;
  });

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filterTingkat, filterBidang]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

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
            placeholder="Cari nama prestasi atau siswa..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select 
            value={filterTingkat}
            onChange={(e) => setFilterTingkat(e.target.value)}
            className="block w-full sm:w-auto py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
          >
            <option value="">Semua Tingkat</option>
            <option value="Internasional">Internasional</option>
            <option value="Nasional">Nasional</option>
            <option value="Provinsi">Provinsi</option>
            <option value="Kota/Kabupaten">Kota/Kabupaten</option>
          </select>
          <select 
            value={filterBidang}
            onChange={(e) => setFilterBidang(e.target.value)}
            className="block w-full sm:w-auto py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
          >
            <option value="">Semua Bidang</option>
            <option value="Sains & Riset">Sains & Riset</option>
            <option value="Tahfidz & Agama">Tahfidz & Agama</option>
            <option value="Seni & Robotika">Seni & Robotika</option>
            <option value="Olahraga & Silat">Olahraga & Silat</option>
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
                <th className="px-6 py-4">Nama Prestasi</th>
                <th className="px-6 py-4">Siswa / Tim</th>
                <th className="px-6 py-4">Bidang</th>
                <th className="px-6 py-4">Tingkat & Medali</th>
                <th className="px-6 py-4 text-center">Tahun</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {isLoading ? (
                <tr>
                  <td colSpan={8} className="px-6 py-8 text-center text-slate-500">
                    Memuat data...
                  </td>
                </tr>
              ) : filteredData.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-8 text-center text-slate-500">
                    Tidak ada prestasi yang sesuai dengan kriteria pencarian.
                  </td>
                </tr>
              ) : (
                paginatedData.map((item, i) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-center text-slate-400">{startIndex + i + 1}</td>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-800 mb-1">{item.title}</p>
                      <div className="flex items-center gap-1.5">
                        {item.isFeatured && (
                          <span className="inline-flex px-2 py-0.5 text-[11px] font-medium bg-slate-100 text-slate-600 rounded border border-slate-200">
                            Hall of Fame
                          </span>
                        )}
                        <span className="text-xs text-slate-400">{item.competitionName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{item.recipient}</td>
                    <td className="px-6 py-4 text-slate-600">{item.category}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <span className="inline-flex w-max px-2.5 py-1 text-xs font-medium rounded-full border bg-slate-100 text-slate-600 border-slate-200">
                          {item.level}
                        </span>
                        <span className="inline-flex w-max px-2.5 py-1 text-xs font-medium rounded-full border bg-slate-100 text-slate-600 border-slate-200">
                          {item.medal}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-slate-500">{item.year}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${
                        item.status === 'PUBLISHED' 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {item.status === 'PUBLISHED' ? 'Publish' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <Link href={`/admin/dashboard/prestasi/edit/${item.id}`} title="Edit Prestasi" className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors inline-block">
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          title="Hapus Prestasi"
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
          <p className="text-sm text-slate-500">
            {isLoading 
              ? "Menghitung data..." 
              : `Menampilkan ${paginatedData.length > 0 ? startIndex + 1 : 0} - ${Math.min(startIndex + itemsPerPage, filteredData.length)} dari ${filteredData.length} prestasi`}
          </p>
          <div className="flex gap-2">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition-colors ${
                currentPage === 1 
                  ? 'text-slate-400 border-slate-200 cursor-not-allowed bg-slate-50' 
                  : 'text-slate-600 border-slate-200 hover:bg-slate-50 bg-white'
              }`}
            >
              Sebelumnya
            </button>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages || totalPages === 0}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition-colors ${
                currentPage === totalPages || totalPages === 0
                  ? 'text-slate-400 border-slate-200 cursor-not-allowed bg-slate-50' 
                  : 'text-slate-600 border-slate-200 hover:bg-slate-50 bg-white'
              }`}
            >
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
