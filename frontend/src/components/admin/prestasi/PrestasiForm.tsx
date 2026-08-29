import React, { FormEvent, useState, useRef } from 'react';
import { Upload, ImageIcon } from 'lucide-react';

export interface PrestasiData {
  id?: number;
  title: string;
  competitionName: string;
  recipient: string;
  level: string;
  category: string;
  medal: string;
  year: number;
  isFeatured: boolean;
  status: string;
  description?: string;
  imageUrl?: string;
}

interface PrestasiFormProps {
  initialData?: PrestasiData;
  onSubmit: (data: PrestasiData) => void;
  apiError?: string | null;
}

export default function PrestasiForm({ initialData, onSubmit, apiError }: PrestasiFormProps) {
  const [previewUrl, setPreviewUrl] = useState(initialData?.imageUrl ?? '');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('Ukuran gambar tidak boleh melebihi 10MB');
        return;
      }
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isUploading) return;
    
    const formData = new FormData(e.currentTarget);
    
    let finalImageUrl = initialData?.imageUrl || '';

    // Validasi UX: Peringatan jika tidak ada gambar
    if (!selectedFile && !finalImageUrl) {
      const isConfirmed = window.confirm("Apakah Anda yakin ingin menyimpan prestasi ini tanpa menambahkan gambar dokumentasi?");
      if (!isConfirmed) {
        return;
      }
    }

    if (selectedFile) {
      try {
        setIsUploading(true);
        const uploadData = new FormData();
        uploadData.append('image', selectedFile);

        const response = await fetch('/api/v1/upload', {
          method: 'POST',
          body: uploadData,
        });

        if (!response.ok) {
          const err = await response.json();
          throw new Error(err.error || 'Gagal mengupload gambar');
        }

        const result = await response.json();
        finalImageUrl = result.url;
      } catch (error: any) {
        alert(error.message);
        setIsUploading(false);
        return;
      } finally {
        setIsUploading(false);
      }
    }
    
    const data: PrestasiData = {
      id: initialData?.id,
      title: formData.get('title') as string,
      competitionName: formData.get('competitionName') as string,
      recipient: formData.get('recipient') as string,
      level: formData.get('level') as string,
      category: formData.get('category') as string,
      medal: formData.get('medal') as string,
      year: Number(formData.get('year')),
      isFeatured: formData.get('isFeatured') === 'on',
      status: formData.get('status') as string,
      description: formData.get('description') as string,
      imageUrl: finalImageUrl,
    };
    
    onSubmit(data);
  };

  return (
    <form id="prestasi-form" onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Kolom Kiri: Isian Utama (Lebar 2/3) */}
      <div className="lg:col-span-2 space-y-6">

        {apiError && (
          <div className="p-4 bg-rose-50 border-l-4 border-rose-500 rounded-r-lg text-rose-700 text-sm font-medium">
            {apiError}
          </div>
        )}

        {/* Box Identitas Prestasi */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">Identitas Prestasi</h2>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">
              Nama Prestasi / Judul <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              defaultValue={initialData?.title}
              required
              placeholder="Contoh: Juara 1 Olimpiade Sains Nasional Bidang Fisika"
              className="block w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-medium transition-colors"
            />
            <p className="text-xs text-slate-500 mt-1.5">Tulis nama prestasi secara lengkap dan jelas.</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">
              Nama Ajang / Kompetisi <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              name="competitionName"
              defaultValue={initialData?.competitionName}
              required
              placeholder="Contoh: Olimpiade Sains Nasional (OSN) 2026"
              className="block w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">
              Nama Siswa / Tim <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              name="recipient"
              defaultValue={initialData?.recipient}
              required
              placeholder="Contoh: Muhammad Farhan & Tim"
              className="block w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
            />
            <p className="text-xs text-slate-500 mt-1.5">Tuliskan nama siswa yang berprestasi. Jika tim, pisahkan dengan tanda &amp;.</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">
              Deskripsi Singkat
            </label>
            <textarea
              name="description"
              defaultValue={initialData?.description}
              rows={3}
              placeholder="Contoh: Diraih oleh tim sains sekolah atas inovasi penelitian energi terbarukan di kancah nasional."
              className="block w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors resize-none"
            ></textarea>
            <p className="text-xs text-slate-500 mt-1.5">Ceritakan secara singkat bagaimana prestasi ini diraih (1-2 kalimat saja).</p>
          </div>
        </div>

        {/* Box Rincian Kompetisi */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">Rincian Kompetisi</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Tingkat / Level <span className="text-rose-500">*</span>
              </label>
              <select name="level" required defaultValue={initialData?.level || ""} className="block w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white">
                <option value="">-- Pilih Tingkat --</option>
                <option value="Internasional">Internasional</option>
                <option value="Nasional">Nasional</option>
                <option value="Provinsi">Provinsi</option>
                <option value="Kota/Kabupaten">Kota/Kabupaten</option>
              </select>
              <p className="text-xs text-slate-500 mt-1.5">Pilih wilayah cakupan kompetisi ini.</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Kategori Bidang <span className="text-rose-500">*</span>
              </label>
              <select name="category" required defaultValue={initialData?.category || ""} className="block w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white">
                <option value="">-- Pilih Bidang --</option>
                <option value="Akademik">Sains & Riset</option>
                <option value="Tahfidz & Keagamaan">Tahfidz & Agama</option>
                <option value="Robotika & Teknologi">Seni & Robotika</option>
                <option value="Olahraga & Seni">Olahraga & Silat</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Jenis Medali / Peringkat <span className="text-rose-500">*</span>
              </label>
              <select name="medal" required defaultValue={initialData?.medal || ""} className="block w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white">
                <option value="">-- Pilih Peringkat --</option>
                <option value="Emas">Emas</option>
                <option value="Perak">Perak</option>
                <option value="Perunggu">Perunggu</option>
                <option value="Juara 1">Juara 1</option>
                <option value="Juara 2">Juara 2</option>
                <option value="Juara 3">Juara 3</option>
                <option value="Harapan">Harapan</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Tahun Perolehan <span className="text-rose-500">*</span>
              </label>
              <input
                type="number"
                name="year"
                required
                defaultValue={initialData?.year || new Date().getFullYear()}
                min="2000"
                max="2099"
                className="block w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
              />
              <p className="text-xs text-slate-500 mt-1.5">Isi dengan 4 digit tahun, contoh: 2026.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Kolom Kanan: Foto & Status (Lebar 1/3) */}
      <div className="space-y-6">

        {/* Box Foto */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-emerald-600" />
            Foto Dokumentasi / Sertifikat
          </h3>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            name="imageFile"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />

          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer group"
          >
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-100 transition-colors">
              <Upload className="w-6 h-6 text-emerald-600" />
            </div>
            <p className="text-sm font-medium text-slate-700">Klik untuk memilih foto dari komputer</p>
            <p className="text-xs text-slate-500 mt-1">Foto piala, sertifikat, atau momen penyerahan hadiah.<br/>Format JPG, PNG, WebP (Maks 10MB)</p>
          </div>

          {isUploading && (
            <div className="mt-4 text-center text-sm text-emerald-600 font-semibold animate-pulse">
              Mengunggah gambar... mohon tunggu.
            </div>
          )}

          {previewUrl && (
            <div className="mt-4 border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
              <img
                src={previewUrl}
                alt="Preview foto prestasi"
                className="w-full h-48 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/f8fafc/94a3b8?text=Image+Not+Found';
                }}
              />
            </div>
          )}
        </div>

        {/* Box Status Unggulan */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <label className="block text-sm font-semibold text-slate-800 mb-2">
            Status Tampilan
          </label>

          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <input type="radio" name="status" value="PUBLISHED" defaultChecked={initialData?.status !== 'DRAFT'} className="mt-0.5 w-4 h-4 text-emerald-600 focus:ring-emerald-500" />
              <div>
                <p className="text-sm font-medium text-slate-800">Diterbitkan (Publish)</p>
                <p className="text-xs text-slate-500">Prestasi terlihat di halaman publik dan galeri.</p>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <input type="radio" name="status" value="DRAFT" defaultChecked={initialData?.status === 'DRAFT'} className="mt-0.5 w-4 h-4 text-emerald-600 focus:ring-emerald-500" />
              <div>
                <p className="text-sm font-medium text-slate-800">Draft (Sembunyikan)</p>
                <p className="text-xs text-slate-500">Prestasi disimpan sebagai draft dan tidak ditampilkan.</p>
              </div>
            </label>
          </div>

          <div className="pt-3 border-t border-slate-100">
            <label className="flex items-center gap-3 cursor-pointer p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <input type="checkbox" name="isFeatured" defaultChecked={initialData?.isFeatured} className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500 border-slate-300" />
              <div>
                <p className="text-sm font-semibold text-slate-800">Tampilkan di Hall of Fame</p>
                <p className="text-xs text-slate-500">Prestasi muncul di bagian unggulan halaman depan.</p>
              </div>
            </label>
          </div>
        </div>

      </div>
    </form>
  );
}
