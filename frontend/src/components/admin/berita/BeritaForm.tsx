import React, { FormEvent, useState, useRef } from 'react';
import { ImageIcon, Upload } from 'lucide-react';

export interface BeritaData {
  id?: number;
  judul: string;
  ringkasan: string;
  isi: string;
  kategori: string;
  penulis: string;
  waktuBaca?: string;
  isUtama: boolean;
  status: string;
  imageUrl?: string;
  tanggal?: string; // Untuk keperluan tabel
  viewer?: number;  // Untuk keperluan tabel
}

interface BeritaFormProps {
  initialData?: BeritaData;
  onSubmit: (data: BeritaData) => void;
  apiError?: string | null;
}

export default function BeritaForm({ initialData, onSubmit, apiError }: BeritaFormProps) {
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

  const insertText = (before: string, after: string = '') => {
    const textarea = document.getElementById('isi-berita') as HTMLTextAreaElement;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    
    const newText = text.substring(0, start) + before + text.substring(start, end) + after + text.substring(end);
    textarea.value = newText;
    
    // Reset focus and selection
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, end + before.length);
    }, 0);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isUploading) return;
    
    const formData = new FormData(e.currentTarget);
    
    let finalImageUrl = initialData?.imageUrl || '';

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

    const data: BeritaData = {
      id: initialData?.id, 
      judul: formData.get('judul') as string,
      ringkasan: formData.get('ringkasan') as string,
      isi: formData.get('isi') as string,
      kategori: formData.get('kategori') as string,
      penulis: formData.get('penulis') as string,
      waktuBaca: formData.get('waktuBaca') as string,
      isUtama: formData.get('isUtama') === 'on',
      status: formData.get('status') as string,
      imageUrl: finalImageUrl,
    };
    
    onSubmit(data);
  };

  return (
    <form id="berita-form" onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Kolom Kiri: Isian Utama (Lebar 2/3) */}
      <div className="lg:col-span-2 space-y-6">
        
        {apiError && (
          <div className="p-4 bg-rose-50 border-l-4 border-rose-500 rounded-r-lg text-rose-700 text-sm font-medium">
            {apiError}
          </div>
        )}

        {/* Box Judul & Isi */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">
              Judul Berita <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              name="judul"
              defaultValue={initialData?.judul}
              required
              placeholder="Contoh: Juara 1 Lomba Cerdas Cermat Tingkat Nasional"
              className="block w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-lg font-medium transition-colors"
            />
            <p className="text-xs text-slate-500 mt-1.5">
              Buat judul yang menarik dan jelas. Maksimal 100 karakter.
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">
              Ringkasan Singkat (Excerpt) <span className="text-rose-500">*</span>
            </label>
            <textarea
              name="ringkasan"
              defaultValue={initialData?.ringkasan}
              required
              rows={2}
              placeholder="Contoh: Tim cerdas cermat sekolah berhasil menyingkirkan 50 sekolah lainnya dalam ajang nasional..."
              className="block w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors resize-none"
            ></textarea>
            <p className="text-xs text-slate-500 mt-1.5">
              Teks ini akan muncul sebagai preview di halaman depan. Cukup 2-3 kalimat saja.
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">
              Isi Teks Lengkap <span className="text-rose-500">*</span>
            </label>
            {/* Semi-Functional Rich Text Editor */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 p-2 flex gap-1">
                <button type="button" onClick={() => insertText('<b>', '</b>')} className="p-1.5 hover:bg-slate-200 rounded text-slate-700 font-bold" title="Tebal (Bold)">B</button>
                <button type="button" onClick={() => insertText('<i>', '</i>')} className="p-1.5 hover:bg-slate-200 rounded text-slate-700 italic" title="Miring (Italic)">I</button>
                <button type="button" onClick={() => insertText('<u>', '</u>')} className="p-1.5 hover:bg-slate-200 rounded text-slate-700 underline" title="Garis Bawah (Underline)">U</button>
                <div className="w-px h-6 bg-slate-300 mx-1 my-auto"></div>
                <button type="button" onClick={() => insertText('<ul>\n  <li>', '</li>\n</ul>')} className="p-1.5 hover:bg-slate-200 rounded text-slate-700 text-sm font-medium" title="Daftar Titik (Bullet List)">• Daftar</button>
              </div>
              <textarea
                id="isi-berita"
                name="isi"
                defaultValue={initialData?.isi}
                required
                rows={15}
                placeholder="Ketik isi berita selengkapnya di sini..."
                className="block w-full px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none resize-y"
              ></textarea>
            </div>
            <p className="text-xs text-slate-500 mt-1.5">
              Gunakan paragraf yang pendek agar mudah dibaca oleh pengunjung website.
            </p>
          </div>
        </div>
      </div>

      {/* Kolom Kanan: Pengaturan & Foto (Lebar 1/3) */}
      <div className="space-y-6">
        {/* Box Foto Sampul */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-emerald-600" />
            Foto Sampul (Cover)
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
            <p className="text-xs text-slate-500 mt-1">Format JPG, PNG, WebP (Maks 10MB)</p>
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
                alt="Preview cover"
                className="w-full h-48 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/f8fafc/94a3b8?text=Image+Not+Found';
                }}
              />
            </div>
          )}
        </div>

        {/* Box Meta Data */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">
              Kategori Berita
            </label>
            <select name="kategori" defaultValue={initialData?.kategori || "kegiatan"} className="block w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white">
              <option value="Kegiatan">Kegiatan</option>
              <option value="Prestasi">Prestasi</option>
              <option value="Informasi Umum">Informasi Umum</option>
              <option value="Pengumuman Penting">Pengumuman Penting</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">
              Ditulis Oleh (Penulis)
            </label>
            <input
              type="text"
              name="penulis"
              defaultValue={initialData?.penulis}
              placeholder="Contoh: Tim Humas"
              className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">
              Estimasi Waktu Baca
            </label>
            <input
              type="text"
              name="waktuBaca"
              defaultValue={initialData?.waktuBaca}
              placeholder="Contoh: 4 Menit"
              className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
            />
          </div>

          <div className="pt-4 border-t border-slate-100">
            <label className="flex items-center gap-3 cursor-pointer p-3 border border-emerald-100 bg-emerald-50/50 rounded-lg hover:bg-emerald-50 transition-colors">
              <input type="checkbox" name="isUtama" defaultChecked={initialData?.isUtama} className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500 border-emerald-300" />
              <div>
                <p className="text-sm font-semibold text-emerald-800">Jadikan Berita Utama</p>
                <p className="text-xs text-emerald-600/80">Tampilkan paling atas di Halaman Depan.</p>
              </div>
            </label>
          </div>
        </div>

        {/* Box Status */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <label className="block text-sm font-semibold text-slate-800 mb-2">
            Status Tampilan
          </label>
          
          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <input type="radio" name="status" value="published" defaultChecked={initialData?.status !== 'draft'} className="mt-0.5 w-4 h-4 text-emerald-600 focus:ring-emerald-500" />
              <div>
                <p className="text-sm font-medium text-slate-800">Terbitkan Sekarang</p>
                <p className="text-xs text-slate-500">Berita akan langsung muncul di website.</p>
              </div>
            </label>
            
            <label className="flex items-start gap-3 cursor-pointer p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <input type="radio" name="status" value="draft" defaultChecked={initialData?.status === 'draft'} className="mt-0.5 w-4 h-4 text-emerald-600 focus:ring-emerald-500" />
              <div>
                <p className="text-sm font-medium text-slate-800">Simpan sebagai Draft</p>
                <p className="text-xs text-slate-500">Berita disembunyikan dan belum tampil.</p>
              </div>
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}
