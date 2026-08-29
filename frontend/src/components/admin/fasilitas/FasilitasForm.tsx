import React, { FormEvent, useState } from 'react';
import { Upload, ImageIcon } from 'lucide-react';

export interface FasilitasData {
  id?: number;
  nama: string;
  deskripsi: string;
  fungsiUtama: string;
  kapasitas: string;
  lokasi: string;
  pengguna: string;
  status: string;
  category: string;
  imageUrl?: string;
}

interface FasilitasFormProps {
  initialData?: FasilitasData;
  onSubmit: (data: FasilitasData) => void;
  apiError?: string | null;
  isSubmitting?: boolean;
}

export default function FasilitasForm({ initialData, onSubmit, apiError, isSubmitting }: FasilitasFormProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const formData = new FormData(e.currentTarget);

    // If no image file selected, ask for confirmation
    if (!selectedFile) {
      const proceed = confirm('Anda yakin tidak ingin menyertakan gambar pada fasilitas ini?');
      if (!proceed) return;
    }
    
    const data: FasilitasData = {
      id: initialData?.id || Date.now(),
      nama: formData.get('nama') as string,
      deskripsi: formData.get('deskripsi') as string,
      fungsiUtama: formData.get('fungsiUtama') as string,
      kapasitas: formData.get('kapasitas') as string,
      lokasi: formData.get('lokasi') as string,
      pengguna: formData.get('pengguna') as string,
      status: formData.get('status') as string,
      category: formData.get('category') as string,
    };
    
    // Jika ada file, upload dulu ke Vercel Blob dan tambahkan imageUrl (optional)
    if (selectedFile) {
      const form = new FormData();
      form.append('image', selectedFile);
      try {
        const res = await fetch('/api/v1/upload', { method: 'POST', body: form });
        if (res.ok) {
          const json = await res.json();
          // @ts-ignore extend data with imageUrl
          (data as any).imageUrl = json.url;
        } else {
          alert('Gagal mengupload gambar');
          return;
        }
      } catch (err) {
        console.error(err);
        alert('Terjadi kesalahan saat mengupload gambar');
        return;
      }
    } else if (initialData?.imageUrl) {
      // Jika tidak ada file baru tapi sudah ada gambar lama, kirim URL lama
      (data as any).imageUrl = initialData.imageUrl;
    }

    onSubmit(data);
  };

  return (
    <form id="fasilitas-form" onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Kolom Kiri: Isian Utama (Lebar 2/3) */}
      <div className="lg:col-span-2 space-y-6">
        
        {apiError && (
          <div className="p-4 bg-rose-50 border-l-4 border-rose-500 rounded-r-lg text-rose-700 text-sm font-medium">
            {apiError}
          </div>
        )}

        {/* Box Data Fasilitas */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">Informasi Utama Fasilitas</h2>
          
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">
              Nama Fasilitas <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              name="nama"
              required
              defaultValue={initialData?.nama}
              placeholder="Contoh: Ruang Kelas Interaktif"
              className="block w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-medium transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">
              Kategori Fasilitas <span className="text-rose-500">*</span>
            </label>
            <select
              name="category"
              required
              defaultValue={initialData?.category || ""}
              className="block w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white transition-colors"
            >
              <option value="">-- Pilih Kategori --</option>
              <option value="akademik">Akademik</option>
              <option value="olahraga">Olahraga & Kesehatan</option>
              <option value="keagamaan">Keagamaan</option>
              <option value="kreativitas">Kreativitas & Teknologi</option>
              <option value="pendukung">Fasilitas Pendukung</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">
              Deskripsi Fasilitas <span className="text-rose-500">*</span>
            </label>
            <textarea
              name="deskripsi"
              required
              defaultValue={initialData?.deskripsi}
              rows={3}
              placeholder="Contoh: Ruang kelas modern yang dirancang untuk mendukung pembelajaran dua arah secara digital demi memicu keaktifan siswa."
              className="block w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors resize-y"
            ></textarea>
            <p className="text-xs text-slate-500 mt-1.5">
              Jelaskan kegunaan umum dari fasilitas ini (1-2 kalimat).
            </p>
          </div>
        </div>

        {/* Box Spesifikasi Detail */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">Spesifikasi Detail</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Fungsi Utama <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="fungsiUtama"
                required
                defaultValue={initialData?.fungsiUtama}
                placeholder="Contoh: Proses belajar mengajar harian..."
                className="block w-full px-4 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Kapasitas <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="kapasitas"
                required
                defaultValue={initialData?.kapasitas}
                placeholder="Contoh: 25 - 30 Siswa"
                className="block w-full px-4 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Lokasi Gedung <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="lokasi"
                required
                defaultValue={initialData?.lokasi}
                placeholder="Contoh: Gedung Utama (Lantai 1-3)"
                className="block w-full px-4 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Digunakan Oleh <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="pengguna"
                required
                defaultValue={initialData?.pengguna}
                placeholder="Contoh: Semua Jenjang (TK / SD / SMP)"
                className="block w-full px-4 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Kolom Kanan: Pengaturan Foto & Status (Lebar 1/3) */}
      <div className="space-y-6">
        
        {/* Box Foto Utama (Satu Foto Saja) */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-emerald-600" />
            Foto Fasilitas
          </h3>
          
          <div 
            className={`border-2 border-dashed border-slate-200 rounded-lg p-6 text-center transition-colors group relative overflow-hidden ${isSubmitting ? 'cursor-not-allowed opacity-70' : 'cursor-pointer hover:bg-slate-50'}`} 
            onClick={() => {
              if (!isSubmitting) document.getElementById('fasilitas-image-input')?.click();
            }}
          >
            {selectedFile ? (
              <div className="flex flex-col items-center justify-center">
                <img 
                  src={URL.createObjectURL(selectedFile)} 
                  alt="Preview" 
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <p className="text-sm font-medium text-slate-700 truncate w-full px-2">{selectedFile.name}</p>
                <p className="text-xs text-emerald-600 mt-1 font-semibold">Klik untuk mengganti foto</p>
              </div>
            ) : initialData?.imageUrl ? (
              <div className="flex flex-col items-center justify-center">
                <img 
                  src={initialData.imageUrl as string} 
                  alt="Current" 
                  className="w-full h-32 object-cover rounded-lg mb-2 opacity-80"
                />
                <p className="text-xs text-slate-500 mt-1 font-semibold">Foto saat ini. Klik untuk mengganti.</p>
              </div>
            ) : (
              <>
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-100 transition-colors">
                  <Upload className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-sm font-medium text-slate-700">Klik untuk memilih foto</p>
                <p className="text-xs text-slate-500 mt-1">Hanya 1 foto diperbolehkan.<br/>Format JPG/PNG, Maks. 2MB</p>
              </>
            )}
          </div>
          <input type="file" id="fasilitas-image-input" accept="image/*" style={{ display: 'none' }} onChange={e => {
            const file = e.target.files?.[0] || null;
            if (file) {
              setSelectedFile(file);
            }
          }} />
        </div>

        {/* Box Status */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <label className="block text-sm font-semibold text-slate-800 mb-2">
            Status Tampilan
          </label>
          
          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <input type="radio" name="status" value="Aktif" defaultChecked={initialData?.status !== 'Tidak Aktif'} className="mt-0.5 w-4 h-4 text-emerald-600 focus:ring-emerald-500" />
              <div>
                <p className="text-sm font-medium text-slate-800">Aktif (Tampil)</p>
                <p className="text-xs text-slate-500">Fasilitas ini terlihat oleh publik.</p>
              </div>
            </label>
            
            <label className="flex items-start gap-3 cursor-pointer p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <input type="radio" name="status" value="Tidak Aktif" defaultChecked={initialData?.status === 'Tidak Aktif'} className="mt-0.5 w-4 h-4 text-emerald-600 focus:ring-emerald-500" />
              <div>
                <p className="text-sm font-medium text-slate-800">Tidak Aktif (Sembunyikan)</p>
                <p className="text-xs text-slate-500">Fasilitas ini disimpan sementara.</p>
              </div>
            </label>
          </div>
        </div>
        
      </div>
    </form>
  );
}
