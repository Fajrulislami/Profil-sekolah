"use client";

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Save, Plus, Trash2, ChevronDown } from 'lucide-react';
import { fetcher, getErrorMessage, StatusBanner } from './PPDBShared';

export default function TabFAQ() {
  const { data: fetchRes, error, mutate } = useSWR('/api/v1/ppdb-setting?section=faq', fetcher);
  const [faqs, setFaqs] = useState<any[]>([]);
  const [open, setOpen] = useState<number | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [apiSuccess, setApiSuccess] = useState<string | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    if (fetchRes?.data && !isInit) {
      setFaqs(fetchRes.data);
      setIsInit(true);
    }
  }, [fetchRes, isInit]);

  const updateFaq = (idx: number, field: string, val: string) => {
    const newF = [...faqs];
    newF[idx][field] = val;
    setFaqs(newF);
    setHasUnsavedChanges(true);
  };

  const addFaq = () => {
    setFaqs([{ q: "Pertanyaan baru?", a: "Jawaban baru." }, ...faqs]);
    setHasUnsavedChanges(true);
  };
  
  const removeFaq = (idx: number) => {
    if(!confirm("Yakin hapus FAQ ini?")) return;
    setFaqs(faqs.filter((_, i) => i !== idx));
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
        body: JSON.stringify({ section: 'faq', content: faqs })
      });
      if (res.ok) {
        setApiSuccess('FAQ berhasil disimpan.');
        mutate({ data: faqs }, false);
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
        <p className="text-sm text-slate-500">Kelola pertanyaan yang sering ditanyakan calon pendaftar di halaman PPDB.</p>
        <div className="flex gap-2">
          {hasUnsavedChanges && <span className="text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">● Belum disimpan</span>}
          <button onClick={addFaq} className="inline-flex items-center gap-1.5 text-sm text-emerald-600 font-medium hover:text-emerald-700">
            <Plus className="w-4 h-4" /> Tambah Pertanyaan
          </button>
          <button onClick={() => saveChanges()} disabled={isSaving || !hasUnsavedChanges} className={`flex items-center gap-2 text-white text-sm font-medium py-1.5 px-4 rounded-lg transition-colors ${hasUnsavedChanges ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-slate-300 cursor-not-allowed'}`}>
            <Save className="w-4 h-4" /> {isSaving ? 'Menyimpan...' : 'Simpan Semua'}
          </button>
        </div>
      </div>
      
      {faqs.length === 0 ? (
        <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-300">
          <p className="text-slate-500 text-sm">Belum ada data FAQ.</p>
        </div>
      ) : (
        faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <button className={`w-full flex items-center justify-between px-6 py-4 text-left gap-4 transition-colors ${open === i ? 'bg-slate-50' : 'hover:bg-slate-50'}`} onClick={() => setOpen(open === i ? null : i)}>
              <span className="font-medium text-slate-800 text-sm">{faq.q}</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
            </button>
            
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-5 space-y-3 border-t border-slate-100 pt-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Pertanyaan</label>
                    <input value={faq.q} onChange={(e) => updateFaq(i, 'q', e.target.value)} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Jawaban</label>
                    <textarea value={faq.a} onChange={(e) => updateFaq(i, 'a', e.target.value)} rows={3} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-none" />
                  </div>
                  <div className="flex items-center justify-start pt-1 mt-2">
                    <button onClick={() => removeFaq(i)} className="inline-flex items-center gap-1.5 text-sm text-rose-500 hover:text-rose-700 font-medium">
                      <Trash2 className="w-4 h-4" /> Hapus Pertanyaan Ini
                    </button>
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
