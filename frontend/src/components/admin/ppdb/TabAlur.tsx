"use client";

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Save, Plus, Trash2 } from 'lucide-react';
import { fetcher, getErrorMessage, StatusBanner } from './PPDBShared';

export default function TabAlur() {
  const { data: fetchRes, error, mutate } = useSWR('/api/v1/ppdb-setting?section=alur', fetcher);
  const [steps, setSteps] = useState<any[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [apiSuccess, setApiSuccess] = useState<string | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    if (fetchRes?.data && !isInit) {
      setSteps(fetchRes.data);
      setIsInit(true);
    }
  }, [fetchRes, isInit]);

  const updateStep = (idx: number, field: string, val: string) => {
    const newSteps = [...steps];
    newSteps[idx][field] = val;
    setSteps(newSteps);
    setHasUnsavedChanges(true);
  };

  const addStep = () => {
    setSteps([...steps, { num: String(steps.length + 1).padStart(2, '0'), title: "Langkah Baru", desc: "" }]);
    setHasUnsavedChanges(true);
  };

  const removeStep = (idx: number) => {
    if(!confirm('Hapus langkah ini?')) return;
    setSteps(steps.filter((_, i) => i !== idx));
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
        body: JSON.stringify({ section: 'alur', content: steps })
      });
      if (res.ok) {
        setApiSuccess('Alur Pendaftaran berhasil disimpan.');
        mutate({ data: steps }, false);
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
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2"><p className="text-sm text-slate-500">Kelola urutan langkah pendaftaran yang tampil di halaman PPDB.</p>{hasUnsavedChanges && <span className="text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 whitespace-nowrap">● Belum disimpan</span>}</div>
        <button onClick={addStep} className="inline-flex items-center gap-1.5 text-sm text-emerald-600 font-medium hover:text-emerald-700">
          <Plus className="w-4 h-4" /> Tambah Langkah
        </button>
      </div>

      {steps.length === 0 ? (
        <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-300">
          <p className="text-slate-500 text-sm">Belum ada data alur pendaftaran.</p>
        </div>
      ) : (
        steps.map((step, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-16 h-10 flex-shrink-0">
                <label className="block text-xs font-semibold text-slate-600 mb-1">No</label>
                <input value={step.num} onChange={(e) => updateStep(i, 'num', e.target.value)} className="w-full text-center px-2 py-1 border border-slate-200 rounded-lg text-sm font-black text-emerald-700 bg-emerald-50 focus:outline-none" />
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Judul Langkah</label>
                  <input value={step.title} onChange={(e) => updateStep(i, 'title', e.target.value)} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Penjelasan Langkah</label>
                  <input value={step.desc} onChange={(e) => updateStep(i, 'desc', e.target.value)} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                </div>
              </div>
              <div className="pt-5 flex-shrink-0">
                <button onClick={() => removeStep(i)} title="Hapus langkah ini" className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      <div className="flex justify-end pt-2">
        <button onClick={() => saveChanges()} disabled={isSaving || !hasUnsavedChanges} className={`flex items-center gap-2 text-white text-sm font-medium py-2 px-5 rounded-lg transition-colors shadow-sm ${hasUnsavedChanges ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-slate-300 cursor-not-allowed'}`}>
          <Save className="w-4 h-4" /> {isSaving ? 'Menyimpan...' : 'Simpan Semua Langkah'}
        </button>
      </div>
    </div>
  );
}
