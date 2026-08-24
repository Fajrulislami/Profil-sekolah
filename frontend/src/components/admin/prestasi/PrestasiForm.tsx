import React from 'react';
import { Upload, ImageIcon } from 'lucide-react';

export default function PrestasiForm() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Kolom Kiri: Isian Utama (Lebar 2/3) */}
      <div className="lg:col-span-2 space-y-6">

        {/* Box Identitas Prestasi */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">Identitas Prestasi</h2>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">
              Nama Prestasi / Judul <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
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
              <select className="block w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white">
                <option value="">-- Pilih Tingkat --</option>
                <option>Internasional</option>
                <option>Nasional</option>
                <option>Provinsi</option>
                <option>Kota/Kabupaten</option>
              </select>
              <p className="text-xs text-slate-500 mt-1.5">Pilih wilayah cakupan kompetisi ini.</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Kategori Bidang <span className="text-rose-500">*</span>
              </label>
              <select className="block w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white">
                <option value="">-- Pilih Bidang --</option>
                <option>Akademik</option>
                <option>Tahfidz & Keagamaan</option>
                <option>Robotika & Teknologi</option>
                <option>Olahraga & Seni</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Jenis Medali / Peringkat <span className="text-rose-500">*</span>
              </label>
              <select className="block w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white">
                <option value="">-- Pilih Peringkat --</option>
                <option>Emas</option>
                <option>Perak</option>
                <option>Perunggu</option>
                <option>Juara 1</option>
                <option>Juara 2</option>
                <option>Juara 3</option>
                <option>Harapan</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Tahun Perolehan <span className="text-rose-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Contoh: 2026"
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
          <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-100 transition-colors">
              <Upload className="w-6 h-6 text-emerald-600" />
            </div>
            <p className="text-sm font-medium text-slate-700">Klik untuk memilih foto</p>
            <p className="text-xs text-slate-500 mt-1">Foto piala, sertifikat, atau momen penyerahan hadiah.<br/>Format JPG/PNG, Maks. 2MB</p>
          </div>
        </div>

        {/* Box Status Unggulan */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <label className="block text-sm font-semibold text-slate-800 mb-2">
            Status Tampilan
          </label>

          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <input type="radio" name="status" defaultChecked className="mt-0.5 w-4 h-4 text-emerald-600 focus:ring-emerald-500" />
              <div>
                <p className="text-sm font-medium text-slate-800">Aktif (Tampil)</p>
                <p className="text-xs text-slate-500">Prestasi terlihat di halaman Prestasi.</p>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <input type="radio" name="status" className="mt-0.5 w-4 h-4 text-emerald-600 focus:ring-emerald-500" />
              <div>
                <p className="text-sm font-medium text-slate-800">Tidak Aktif (Sembunyikan)</p>
                <p className="text-xs text-slate-500">Prestasi disimpan tapi tidak ditampilkan.</p>
              </div>
            </label>
          </div>

          <div className="pt-3 border-t border-slate-100">
            <label className="flex items-center gap-3 cursor-pointer p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <input type="checkbox" className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500 border-slate-300" />
              <div>
                <p className="text-sm font-semibold text-slate-800">Tampilkan di Hall of Fame</p>
                <p className="text-xs text-slate-500">Prestasi muncul di bagian unggulan halaman depan.</p>
              </div>
            </label>
          </div>
        </div>

      </div>
    </div>
  );
}
