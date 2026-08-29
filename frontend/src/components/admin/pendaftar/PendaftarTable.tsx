"use client";

import React, { useState, useEffect } from 'react';
import { RefreshCw, Search, MoreVertical, CheckCircle, XCircle, Trash2, Clock, Check } from 'lucide-react';

interface Pendaftar {
  id: number;
  registrationNumber: string;
  fullName: string;
  gradeLevel: string;
  parentName: string;
  phone: string;
  status: 'PENDING' | 'VERIFIED' | 'REJECTED' | 'ACCEPTED';
  createdAt: string;
}

export default function PendaftarTable() {
  const [data, setData] = useState<Pendaftar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/v1/pendaftar');
      if (!res.ok) throw new Error('Failed to fetch pendaftar data');
      const json = await res.json();
      setData(json);
      setError('');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateStatus = async (id: number, status: string) => {
    try {
      const res = await fetch(`/api/v1/pendaftar/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error('Gagal memperbarui status');
      
      // Update local state
      setData(data.map(p => p.id === id ? { ...p, status: status as Pendaftar['status'] } : p));
      setActiveDropdown(null);
    } catch (err: any) {
      alert(err.message);
    }
  };

  const deletePendaftar = async (id: number) => {
    if (!window.confirm('Yakin ingin menghapus data pendaftar ini?')) return;
    try {
      const res = await fetch(`/api/v1/pendaftar/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Gagal menghapus data');
      
      setData(data.filter(p => p.id !== id));
      setActiveDropdown(null);
    } catch (err: any) {
      alert(err.message);
    }
  };

  const filteredData = data.filter(p => 
    p.fullName.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.registrationNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'PENDING': return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700"><Clock className="w-3 h-3"/> Menunggu</span>;
      case 'VERIFIED': return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700"><CheckCircle className="w-3 h-3"/> Diverifikasi</span>;
      case 'ACCEPTED': return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700"><Check className="w-3 h-3"/> Diterima</span>;
      case 'REJECTED': return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-700"><XCircle className="w-3 h-3"/> Ditolak</span>;
      default: return null;
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      {/* Toolbar */}
      <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-50/50">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Cari nama atau nomor registrasi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
          />
        </div>
        <button 
          onClick={fetchData}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-50 hover:text-emerald-600 transition-colors w-full sm:w-auto justify-center"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto min-h-[400px]">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64 text-slate-400">
            <RefreshCw className="w-8 h-8 animate-spin mb-4 text-emerald-500" />
            <p className="text-sm">Memuat data pendaftar...</p>
          </div>
        ) : error ? (
          <div className="p-8 text-center text-rose-500 bg-rose-50 m-4 rounded-xl border border-rose-100">
            <p className="font-medium">{error}</p>
          </div>
        ) : filteredData.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-slate-400">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-slate-300" />
            </div>
            <p className="text-sm font-medium text-slate-600">Tidak ada pendaftar ditemukan.</p>
          </div>
        ) : (
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 font-semibold">
              <tr>
                <th className="px-6 py-4">No. Registrasi</th>
                <th className="px-6 py-4">Calon Siswa</th>
                <th className="px-6 py-4">Jenjang</th>
                <th className="px-6 py-4">Kontak Orang Tua</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4">
                    <span className="font-mono font-medium text-slate-700 bg-slate-100 px-2 py-1 rounded text-xs border border-slate-200">{p.registrationNumber}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-800">{p.fullName}</div>
                    <div className="text-xs text-slate-400 mt-0.5">Terdaftar: {new Date(p.createdAt).toLocaleDateString('id-ID')}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-slate-700">{p.gradeLevel}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-slate-800">{p.parentName}</div>
                    <a href={`https://wa.me/${p.phone.replace(/^0/, '62')}`} target="_blank" rel="noreferrer" className="text-xs text-emerald-600 hover:text-emerald-700 font-medium mt-0.5 inline-flex items-center gap-1">
                      {p.phone}
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(p.status)}
                  </td>
                  <td className="px-6 py-4 text-center relative">
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === p.id ? null : p.id)}
                      className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === p.id && (
                      <div className="absolute right-8 top-10 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-10 text-left">
                        <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Ubah Status</div>
                        <button onClick={() => updateStatus(p.id, 'PENDING')} className="w-full px-4 py-2 text-sm text-amber-600 hover:bg-amber-50 flex items-center gap-2"><Clock className="w-4 h-4"/> Menunggu</button>
                        <button onClick={() => updateStatus(p.id, 'VERIFIED')} className="w-full px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 flex items-center gap-2"><CheckCircle className="w-4 h-4"/> Diverifikasi</button>
                        <button onClick={() => updateStatus(p.id, 'ACCEPTED')} className="w-full px-4 py-2 text-sm text-emerald-600 hover:bg-emerald-50 flex items-center gap-2"><Check className="w-4 h-4"/> Diterima</button>
                        <button onClick={() => updateStatus(p.id, 'REJECTED')} className="w-full px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 flex items-center gap-2"><XCircle className="w-4 h-4"/> Ditolak</button>
                        <div className="h-px bg-slate-100 my-1"></div>
                        <button onClick={() => deletePendaftar(p.id)} className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 font-medium"><Trash2 className="w-4 h-4"/> Hapus Data</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
