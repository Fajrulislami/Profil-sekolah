"use client";

import React from 'react';
import { Search, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';
// import { useLocalStorage } from '@/hooks/useLocalStorage'; // removed

const initialFasilitasData = [
  {
    id: 1,
    nama: "Ruang Kelas Interaktif",
    deskripsi: "Ruang kelas modern yang dirancang untuk mendukung...",
    fungsiUtama: "Proses belajar mengajar harian berbasis teknologi terintegrasi.",
    kapasitas: "25 - 30 Siswa",
    lokasi: "Gedung Utama (Lantai 1-3)",
    pengguna: "Semua Jenjang",
    status: "Aktif",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    nama: "Laboratorium Sains",
    deskripsi: "Pusat penelitian dan eksperimen sains siswa.",
    fungsiUtama: "Praktikum Fisika, Biologi, dan Kimia.",
    kapasitas: "40 Siswa",
    lokasi: "Gedung B (Lantai Dasar)",
    pengguna: "SMA",
    status: "Tidak Aktif",
    image: ""
  }
];

export default function FasilitasTable() {
  const [data, setData] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filterKategori, setFilterKategori] = React.useState("");
  
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

  const fetchFasilitas = async () => {
    try {
      const res = await fetch('/api/v1/fasilitas', { cache: 'no-store' });
      if (res.ok) {
        const result = await res.json();
        setData(result);
      } else {
        console.error('Failed to fetch fasilitas');
      }
    } catch (error) {
      console.error('Error fetching fasilitas:', error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchFasilitas();
  }, []);

  const handleDelete = async (id: number, nama: string) => {
    if (confirm(`Apakah Anda yakin ingin menghapus fasilitas '${nama}' ini secara permanen?`)) {
      try {
        const res = await fetch(`/api/v1/fasilitas/${id}`, { method: 'DELETE' });
        if (res.ok) {
          setData(data.filter(item => item.id !== id));
        } else {
          alert('Gagal menghapus fasilitas');
        }
      } catch (error) {
        alert('Terjadi kesalahan saat menghapus');
      }
    }
  };

  const filteredData = data.filter(item => {
    const matchSearch = item.nama.toLowerCase().includes(searchQuery.toLowerCase());
    const matchKategori = filterKategori ? item.category === filterKategori : true;
    return matchSearch && matchKategori;
  });

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filterKategori]);

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
            placeholder="Cari nama fasilitas..."
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
            <option value="akademik">Akademik & Kelas</option>
            <option value="laboratorium">Laboratorium & Riset</option>
            <option value="olahraga">Olahraga & Seni</option>
            <option value="asrama">Asrama & Ibadah</option>
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
                <th className="px-6 py-4">Fasilitas & Deskripsi</th>
                <th className="px-6 py-4">Fungsi Utama</th>
                <th className="px-6 py-4">Lokasi & Kapasitas</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                    Tidak ada fasilitas yang sesuai dengan kriteria pencarian.
                  </td>
                </tr>
              ) : (
                paginatedData.map((item, i) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4 text-center text-slate-400">{startIndex + i + 1}</td>
                    <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                        {item.imageUrl ? (
                          <img src={item.imageUrl} alt={item.nama} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-xs text-slate-400">No Pic</span>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{item.nama}</p>
                        <p className="text-xs text-slate-400 mt-0.5 truncate max-w-[200px]">{item.deskripsi}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs text-slate-500 line-clamp-2 max-w-xs">{item.fungsiUtama}</span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs font-medium text-slate-700">{item.lokasi}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{item.kapasitas}</p>
                  </td>
                  <td className="px-6 py-4">
                    {item.status !== "Tidak Aktif" ? (
                      <span className="inline-flex px-2.5 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                        Aktif (Tampil)
                      </span>
                    ) : (
                      <span className="inline-flex px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                        Tidak Aktif
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <Link 
                        href={`/admin/dashboard/fasilitas/edit/${item.id}`}
                        title="Edit Fasilitas"
                        className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors inline-block"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button 
                        title="Hapus Fasilitas"
                        className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        onClick={() => handleDelete(item.id, item.nama)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              )))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Bawah */}
        <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            {isLoading 
              ? "Menghitung data..." 
              : `Menampilkan ${paginatedData.length > 0 ? startIndex + 1 : 0} - ${Math.min(startIndex + itemsPerPage, filteredData.length)} dari ${filteredData.length} fasilitas`}
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
