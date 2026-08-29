"use client";

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Save, Plus, Trash2 } from 'lucide-react';
import { fetcher, getErrorMessage, StatusBanner } from './PPDBShared';

export default function TabJadwal() {
  const { data: fetchRes, error, mutate } = useSWR('/api/v1/ppdb-setting?section=jadwal', fetcher);
  
  const [waves, setWaves] = useState<any[]>([]);
  const [feeItems, setFeeItems] = useState<any[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [apiSuccess, setApiSuccess] = useState<string | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    if (fetchRes?.data && !isInit) {
      setWaves(fetchRes.data.waves || []);
      setFeeItems(fetchRes.data.feeItems || []);
      setIsInit(true);
    }
  }, [fetchRes, isInit]);

  const addWave = () => {
    const newWaves = [...waves, { id: Date.now(), name: "Gelombang Baru", period: "", benefit: "" }];
    setWaves(newWaves);
    setHasUnsavedChanges(true);
  };
  const updateWave = (idx: number, field: string, val: string) => {
    const newWaves = [...waves];
    newWaves[idx][field] = val;
    setWaves(newWaves);
    setHasUnsavedChanges(true);
  };
  const removeWave = (idx: number) => {
    if (!confirm('Yakin hapus gelombang ini?')) return;
    const newWaves = waves.filter((_, i) => i !== idx);
    setWaves(newWaves);
    setHasUnsavedChanges(true);
  };

  const addFee = () => {
    const newFees = [...feeItems, { id: Date.now(), name: "Biaya Baru", note: "" }];
    setFeeItems(newFees);
    setHasUnsavedChanges(true);
  };
  const updateFee = (idx: number, field: string, val: string) => {
    const newFees = [...feeItems];
    newFees[idx][field] = val;
    setFeeItems(newFees);
    setHasUnsavedChanges(true);
  };
  const removeFee = (idx: number) => {
    if (!confirm('Yakin hapus komponen biaya ini?')) return;
    const newFees = feeItems.filter((_, i) => i !== idx);
    setFeeItems(newFees);
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
        body: JSON.stringify({ section: 'jadwal', content: { waves, feeItems } })
      });
      if (res.ok) {
        setApiSuccess('Jadwal & Biaya berhasil disimpan.');
        mutate({ data: { waves, feeItems } }, false);
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
    <div className="space-y-6">
      <StatusBanner error={apiError} success={apiSuccess} onClear={() => { setApiError(null); setApiSuccess(null); }} />
      <div className="flex items-center justify-between mb-2">
        {hasUnsavedChanges ? <span className="text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">● Belum disimpan</span> : <div />}
        <button onClick={() => saveChanges()} disabled={isSaving || !hasUnsavedChanges} className={`flex items-center gap-2 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors ${hasUnsavedChanges ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-slate-300 cursor-not-allowed'}`}>
          <Save className="w-4 h-4" /> {isSaving ? 'Menyimpan...' : 'Simpan Jadwal & Biaya'}
        </button>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-slate-800">Jadwal Gelombang Pendaftaran</h3>
            <p className="text-xs text-slate-500 mt-0.5">Status buka/tutup gelombang dihitung otomatis berdasarkan tanggal yang diisi.</p>
          </div>
          <button onClick={addWave} className="inline-flex items-center gap-1.5 text-sm text-emerald-600 font-medium hover:text-emerald-700">
            <Plus className="w-4 h-4" /> Tambah Gelombang
          </button>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 font-semibold">
            <tr>
              <th className="px-6 py-3 text-left">Nama Gelombang</th>
              <th className="px-6 py-3 text-left">Periode Tanggal</th>
              <th className="px-6 py-3 text-left">Keuntungan / Diskon</th>
              <th className="px-6 py-3 text-center w-20">Hapus</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {waves.length === 0 ? (
              <tr><td colSpan={4} className="px-6 py-8 text-center text-slate-500">Belum ada data gelombang.</td></tr>
            ) : (
              waves.map((w, i) => (
                <tr key={w.id || i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4"><input value={w.name} onChange={(e) => updateWave(i, 'name', e.target.value)} className="w-full px-2 py-1 border rounded text-sm" /></td>
                  <td className="px-6 py-4"><input value={w.period} onChange={(e) => updateWave(i, 'period', e.target.value)} className="w-full px-2 py-1 border rounded text-sm" /></td>
                  <td className="px-6 py-4"><input value={w.benefit} onChange={(e) => updateWave(i, 'benefit', e.target.value)} className="w-full px-2 py-1 border rounded text-sm" /></td>
                  <td className="px-6 py-4 text-center">
                    <button onClick={() => removeWave(i)} title="Hapus gelombang" className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-slate-800">Komponen Biaya Pendidikan</h3>
            <p className="text-xs text-slate-500 mt-0.5">Rincian biaya yang ditampilkan di halaman PPDB. Tidak perlu menampilkan nominal angka.</p>
          </div>
          <button onClick={addFee} className="inline-flex items-center gap-1.5 text-sm text-emerald-600 font-medium hover:text-emerald-700">
            <Plus className="w-4 h-4" /> Tambah Komponen
          </button>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 font-semibold">
            <tr>
              <th className="px-6 py-3 text-left">Nama Komponen Biaya</th>
              <th className="px-6 py-3 text-left">Catatan / Keterangan</th>
              <th className="px-6 py-3 text-center w-20">Hapus</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {feeItems.length === 0 ? (
              <tr><td colSpan={3} className="px-6 py-8 text-center text-slate-500">Belum ada data komponen biaya.</td></tr>
            ) : (
              feeItems.map((f, i) => (
                <tr key={f.id || i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4"><input value={f.name} onChange={(e) => updateFee(i, 'name', e.target.value)} className="w-full px-2 py-1 border rounded text-sm" /></td>
                  <td className="px-6 py-4"><input value={f.note} onChange={(e) => updateFee(i, 'note', e.target.value)} className="w-full px-2 py-1 border rounded text-sm" /></td>
                  <td className="px-6 py-4 text-center">
                    <button onClick={() => removeFee(i)} title="Hapus komponen" className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
