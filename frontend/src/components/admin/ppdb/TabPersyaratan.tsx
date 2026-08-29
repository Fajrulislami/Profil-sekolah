"use client";

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Save, Plus, Trash2, ChevronDown, Upload } from 'lucide-react';
import { fetcher, getErrorMessage, StatusBanner } from './PPDBShared';

export default function TabPersyaratan() {
  const { data: fetchRes, error, mutate } = useSWR('/api/v1/ppdb-setting?section=persyaratan', fetcher);
  const [jenjang, setJenjang] = useState<any[]>([]);
  const [openIdx, setOpenIdx] = useState<number>(0);
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
    formData.append('image', file); // We keep 'image' as the key to not break the backend

    setIsUploading(true);
    try {
      const res = await fetch('/api/v1/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        setApiError(errorData.error || 'Gagal mengupload file.');
        return;
      }

      const data = await res.json();
      updateJenjang(index, field, data.url);
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
      setJenjang(fetchRes.data);
      setIsInit(true);
    }
  }, [fetchRes, isInit]);

  const updateJenjang = (idx: number, field: string, val: string) => {
    const newJ = [...jenjang];
    newJ[idx][field] = val;
    setJenjang(newJ);
    setHasUnsavedChanges(true);
  };

  const updateDoc = (jIdx: number, dIdx: number, val: string) => {
    const newJ = [...jenjang];
    newJ[jIdx].docs[dIdx] = val;
    setJenjang(newJ);
    setHasUnsavedChanges(true);
  };

  const removeDoc = (jIdx: number, dIdx: number) => {
    const newJ = [...jenjang];
    newJ[jIdx].docs.splice(dIdx, 1);
    setJenjang(newJ);
    setHasUnsavedChanges(true);
  };

  const addDoc = (jIdx: number) => {
    const newJ = [...jenjang];
    newJ[jIdx].docs.push("Dokumen baru");
    setJenjang(newJ);
    setHasUnsavedChanges(true);
  };
  
  const addJenjang = () => {
    setJenjang([...jenjang, { label: "BARU", title: "Jenjang Baru", age: "", info: "", docs: [], pdfFile: "", wa: "" }]);
    setHasUnsavedChanges(true);
  };
  
  const removeJenjang = (idx: number) => {
    if(!confirm("Yakin hapus jenjang ini?")) return;
    setJenjang(jenjang.filter((_, i) => i !== idx));
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
        body: JSON.stringify({ section: 'persyaratan', content: jenjang })
      });
      if (res.ok) {
        setApiSuccess('Persyaratan berhasil disimpan.');
        mutate({ data: jenjang }, false);
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
    <div className="space-y-4">
      <StatusBanner error={apiError} success={apiSuccess} onClear={() => { setApiError(null); setApiSuccess(null); }} />
      <div className="flex justify-between items-center">
        <p className="text-sm text-slate-500">Kelola syarat usia, info seleksi, daftar dokumen, dan tautan PDF untuk setiap jenjang secara terpisah.</p>
        <div className="flex gap-2">
          {hasUnsavedChanges && <span className="text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">● Belum disimpan</span>}
          <button onClick={addJenjang} className="inline-flex items-center gap-1.5 text-sm text-emerald-600 font-medium hover:text-emerald-700">
            <Plus className="w-4 h-4" /> Tambah Jenjang
          </button>
          <button onClick={() => saveChanges()} disabled={isSaving || !hasUnsavedChanges} className={`flex items-center gap-2 text-white text-sm font-medium py-1.5 px-4 rounded-lg transition-colors ${hasUnsavedChanges ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-slate-300 cursor-not-allowed'}`}>
            <Save className="w-4 h-4" /> {isSaving ? 'Menyimpan...' : 'Simpan Semua'}
          </button>
        </div>
      </div>
      
      {jenjang.length === 0 ? (
        <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-300">
          <p className="text-slate-500 text-sm">Belum ada data persyaratan.</p>
        </div>
      ) : (
        jenjang.map((j, i) => (
          <div key={j.label + i} className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden relative">
            <button
              className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors ${openIdx === i ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            >
              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full border transition-colors ${
                  openIdx === i ? 'bg-emerald-100 text-emerald-700 border-emerald-200' : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}>{j.label}</span>
                <span className="font-semibold text-slate-800">{j.title}</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-300 ${openIdx === i ? 'rotate-180' : ''}`} />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIdx === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 border-t border-slate-100 space-y-5 pt-5">
                  <div className="flex justify-end mb-2">
                    <button onClick={() => removeJenjang(i)} className="text-xs text-rose-500 flex items-center gap-1 hover:underline"><Trash2 className="w-3 h-3"/> Hapus Jenjang Ini</button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Label Jenjang (Misal: SD)</label>
                      <input value={j.label} onChange={(e) => updateJenjang(i, 'label', e.target.value)} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Judul Lengkap (Misal: Sekolah Dasar)</label>
                      <input value={j.title} onChange={(e) => updateJenjang(i, 'title', e.target.value)} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Syarat Usia</label>
                      <input value={j.age} onChange={(e) => updateJenjang(i, 'age', e.target.value)} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Info Proses Seleksi</label>
                      <input value={j.info} onChange={(e) => updateJenjang(i, 'info', e.target.value)} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Foto Jenjang (Upload atau masukkan URL)</label>
                    <div className="flex items-center gap-2">
                      <input value={j.image || ''} onChange={(e) => updateJenjang(i, 'image', e.target.value)} placeholder="https://..." className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                      <div className="relative overflow-hidden shrink-0">
                        <button type="button" disabled={isUploading} className="flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors cursor-pointer disabled:opacity-50">
                          <Upload className="w-4 h-4" /> {isUploading ? 'Uploading...' : 'Upload File'}
                        </button>
                        <input 
                          type="file" 
                          accept="image/*"
                          className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed"
                          disabled={isUploading}
                          onChange={(e) => handleUpload(e, i, 'image')}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-2">Daftar Dokumen yang Harus Disiapkan</label>
                    <div className="space-y-2">
                      {j.docs?.map((doc: string, di: number) => (
                        <div key={di} className="flex items-center gap-2">
                          <span className="text-xs text-slate-400 w-5 text-right flex-shrink-0">{di + 1}.</span>
                          <input value={doc} onChange={(e) => updateDoc(i, di, e.target.value)} className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                          <button onClick={() => removeDoc(i, di)} title="Hapus dokumen" className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors flex-shrink-0">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <button onClick={() => addDoc(i)} className="mt-2 inline-flex items-center gap-1.5 text-sm text-emerald-600 font-medium hover:text-emerald-700 py-1">
                      <Plus className="w-4 h-4" /> Tambah Dokumen
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Tautan File PDF Syarat (Upload atau masukkan URL)</label>
                      <div className="flex items-center gap-2">
                        <input value={j.pdfFile || ''} onChange={(e) => updateJenjang(i, 'pdfFile', e.target.value)} placeholder="https://..." className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                        <div className="relative overflow-hidden shrink-0">
                          <button type="button" disabled={isUploading} className="flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors cursor-pointer disabled:opacity-50">
                            <Upload className="w-4 h-4" /> {isUploading ? 'Uploading...' : 'Upload File'}
                          </button>
                          <input 
                            type="file" 
                            accept="application/pdf"
                            className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed"
                            disabled={isUploading}
                            onChange={(e) => handleUpload(e, i, 'pdfFile')}
                          />
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">Gunakan tombol upload di atas untuk memilih file PDF dari komputer Anda.</p>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Template Pesan WhatsApp</label>
                      <input value={j.wa} onChange={(e) => updateJenjang(i, 'wa', e.target.value)} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                      <p className="text-xs text-slate-400 mt-1">Pesan awal yang muncul saat orang tua klik tombol WhatsApp untuk jenjang ini.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
