"use client";

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Save, Plus, Trash2, Upload } from 'lucide-react';
import { fetcher, getErrorMessage, StatusBanner } from './PPDBShared';

export default function TabJalur() {
  const { data: fetchRes, error, mutate } = useSWR('/api/v1/ppdb-setting?section=jalur', fetcher);
  const fetchedJalur = fetchRes?.data || [];
  
  const [jalurList, setJalurList] = useState<any[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [apiSuccess, setApiSuccess] = useState<string | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, index: number, field: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setApiError(null);
    setApiSuccess(null);
    const formData = new FormData();
    formData.append('image', file);

    setIsUploading(true);
    try {
      const res = await fetch('/api/v1/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        setApiError(errorData.error || 'Gagal mengupload gambar.');
        return;
      }

      const data = await res.json();
      updateJalur(index, field, data.url);
    } catch (error) {
      console.error(error);
      setApiError('Terjadi kesalahan saat upload.');
    } finally {
      setIsUploading(false);
      e.target.value = '';
    }
  };

  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    if (fetchRes?.data && !isInit) {
      setJalurList(fetchRes.data);
      setIsInit(true);
    }
  }, [fetchRes, isInit]);

  const updateJalur = (index: number, field: string, value: any) => {
    const newList = [...jalurList];
    newList[index][field] = value;
    setJalurList(newList);
    setHasUnsavedChanges(true);
  };

  const updatePoint = (jalurIndex: number, pointIndex: number, value: string) => {
    const newList = [...jalurList];
    newList[jalurIndex].points[pointIndex] = value;
    setJalurList(newList);
    setHasUnsavedChanges(true);
  };

  const removePoint = (jalurIndex: number, pointIndex: number) => {
    const newList = [...jalurList];
    newList[jalurIndex].points.splice(pointIndex, 1);
    setJalurList(newList);
    setHasUnsavedChanges(true);
  };

  const addPoint = (jalurIndex: number) => {
    const newList = [...jalurList];
    newList[jalurIndex].points.push("Poin baru");
    setJalurList(newList);
    setHasUnsavedChanges(true);
  };

  const addJalur = () => {
    const newList = [...jalurList, {
      id: Date.now(),
      title: "Jalur Baru",
      subtitle: "",
      badge: "",
      desc: "",
      points: [],
      imageUrl: "",
      isFeatured: false
    }];
    setJalurList(newList);
    setHasUnsavedChanges(true);
  };
  
  const removeJalur = (index: number) => {
    if (!confirm('Yakin hapus jalur ini?')) return;
    const newList = [...jalurList];
    newList.splice(index, 1);
    setJalurList(newList);
    setHasUnsavedChanges(true);
  };

  const saveChanges = async () => {
    setIsSaving(true);
    setApiError(null);
    setApiSuccess(null);
    try {
      const res = await fetch('/api/v1/ppdb-setting', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section: 'jalur', content: jalurList })
      });
      if (res.ok) {
        setApiSuccess('Jalur pendaftaran berhasil disimpan.');
        mutate({ data: jalurList }, false);
        setHasUnsavedChanges(false);
        setTimeout(() => setApiSuccess(null), 3000);
      } else {
        const errMsg = await getErrorMessage(res);
        setApiError(errMsg);
      }
    } catch (err) {
      console.error(err);
      setApiError('Terjadi kesalahan koneksi saat menyimpan.');
    } finally {
      setIsSaving(false);
    }
  };

  if (!fetchRes && !error) return <div className="p-4 text-slate-500">Memuat data...</div>;

  return (
    <div className="space-y-5">
      <StatusBanner error={apiError} success={apiSuccess} onClear={() => { setApiError(null); setApiSuccess(null); }} />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2"><p className="text-sm text-slate-500">Kelola informasi setiap jalur pendaftaran yang tampil di halaman PPDB publik.</p>{hasUnsavedChanges && <span className="text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 whitespace-nowrap">● Belum disimpan</span>}</div>
        <button onClick={addJalur} className="inline-flex items-center gap-1.5 text-sm text-emerald-600 font-medium hover:text-emerald-700">
          <Plus className="w-4 h-4" /> Tambah Jalur
        </button>
      </div>

      {jalurList.length === 0 ? (
        <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-300">
          <p className="text-slate-500 text-sm">Belum ada data jalur pendaftaran.</p>
        </div>
      ) : (
        jalurList.map((jalur, index) => (
          <div key={jalur.id || index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4 relative">
            <button onClick={() => removeJalur(index)} className="absolute top-4 right-4 text-slate-400 hover:text-rose-500">
              <Trash2 className="w-4 h-4" />
            </button>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">Jalur {index + 1}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Nama Jalur</label>
                    <input value={jalur.title} onChange={(e) => updateJalur(index, 'title', e.target.value)} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Kalimat Pendek (Sub-judul)</label>
                    <input value={jalur.subtitle} onChange={(e) => updateJalur(index, 'subtitle', e.target.value)} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Label / Badge (contoh: "Diskon 50%")</label>
                  <input value={jalur.badge} onChange={(e) => updateJalur(index, 'badge', e.target.value)} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Deskripsi Singkat</label>
                  <textarea value={jalur.desc} onChange={(e) => updateJalur(index, 'desc', e.target.value)} rows={2} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-none" />
                </div>
                
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Foto Jalur (Upload atau masukkan URL)</label>
                  <div className="flex items-center gap-2">
                    <input value={jalur.imageUrl || ''} onChange={(e) => updateJalur(index, 'imageUrl', e.target.value)} placeholder="https://..." className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                    <div className="relative overflow-hidden shrink-0">
                      <button type="button" disabled={isUploading} className="flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors cursor-pointer disabled:opacity-50">
                        <Upload className="w-4 h-4" /> {isUploading ? 'Uploading...' : 'Upload File'}
                      </button>
                      <input 
                        type="file" 
                        accept="image/*"
                        className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed"
                        disabled={isUploading}
                        onChange={(e) => handleUpload(e, index, 'imageUrl')}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-2">
                  <label className="block text-xs font-semibold text-slate-600 mb-2">Poin Keunggulan Jalur Ini</label>
                  <div className="space-y-2">
                    {jalur.points?.map((p: string, i: number) => (
                      <div key={i} className="flex items-center gap-2">
                        <input value={p} onChange={(e) => updatePoint(index, i, e.target.value)} className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                        <button onClick={() => removePoint(index, i)} title="Hapus poin" className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors flex-shrink-0">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button onClick={() => addPoint(index)} className="text-xs text-emerald-600 font-medium hover:underline">
                      + Tambah Poin
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      
      <div className="flex justify-end pt-2 border-t border-slate-100">
        <button onClick={() => saveChanges()} disabled={isSaving || !hasUnsavedChanges} className={`flex items-center gap-2 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors ${hasUnsavedChanges ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-slate-300 cursor-not-allowed'}`}>
          <Save className="w-4 h-4" /> {isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}
        </button>
      </div>
    </div>
  );
}
