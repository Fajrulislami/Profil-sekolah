"use client";

import React, { useState } from 'react';
import { Save, Plus, Trash2, ChevronDown, ChevronUp, Upload } from 'lucide-react';

// ─── Tab 1: Jalur Pendaftaran ────────────────────────────────────────────────
// Disesuaikan dengan PPDBJalur.tsx publik:
// jalur = Beasiswa Hafidz, Jalur Juara Lomba, Jalur Umum, Jalur Kakak-Beradik
function TabJalur() {
  const jalurList = [
    {
      id: 1,
      title: "Beasiswa Hafidz Qur'an",
      subtitle: "Bebas Biaya Pendidikan 100%",
      badge: "Gratis SPP & Asrama",
      desc: "Khusus untuk anak yang memiliki hafalan Al-Qur'an (minimal 15–30 Juz). Sekolah menanggung seluruh biaya pendaftaran, SPP bulanan, dan asrama sampai lulus.",
      points: ["Gratis uang masuk & SPP bulanan", "Gratis tempat tinggal asrama & makan", "Bimbingan khusus hafalan mutqin"],
    },
    {
      id: 2,
      title: "Jalur Juara Lomba & Prestasi",
      subtitle: "Langsung Diterima Tanpa Tes Tulis",
      badge: "Diskon Biaya s.d 50%",
      desc: "Untuk anak yang pernah juara lomba (Juara 1, 2, atau 3) di bidang Sains/OSN, Olahraga, Seni, atau Robotika minimal tingkat Kota/Kabupaten.",
      points: ["Tidak perlu ikut tes tulis akademik", "Potongan uang masuk sekolah hingga 50%", "Masuk kelas pembinaan bakat juara"],
    },
    {
      id: 3,
      title: "Jalur Pendaftaran Umum",
      subtitle: "Terbuka untuk Semua Calon Siswa",
      badge: "Jenjang TK, SD, SMP & Pesantren",
      desc: "Jalur masuk reguler untuk seluruh calon siswa. Penilaian tidak memakai tes yang menakutkan, melainkan temu kenal santai untuk melihat minat dan bakat anak.",
      points: ["Tes ramah anak & menyenangkan", "Mengetahui potensi & gaya belajar anak", "Pendampingan belajar sejak hari pertama"],
    },
    {
      id: 4,
      title: "Jalur Kakak-Beradik (Keluarga)",
      subtitle: "Keringanan Khusus Saudara Kandung",
      badge: "Hemat Biaya Masuk",
      desc: "Khusus untuk Bapak/Ibu yang sudah memiliki anak yang bersekolah di sini. Dapatkan potongan biaya khusus jika mendaftarkan adik atau saudaranya.",
      points: ["Diskon khusus uang pengembangan", "Jaminan prioritas kursi kuota", "Proses berkas lebih cepat & praktis"],
    },
  ];

  return (
    <div className="space-y-5">
      <p className="text-sm text-slate-500">Kelola informasi setiap jalur pendaftaran yang tampil di halaman PPDB publik.</p>
      {jalurList.map((jalur) => (
        <div key={jalur.id} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">Jalur {jalur.id}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Nama Jalur</label>
                  <input defaultValue={jalur.title} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Kalimat Pendek (Sub-judul)</label>
                  <input defaultValue={jalur.subtitle} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-600 mb-1">Label / Badge (contoh: "Diskon 50%")</label>
                <input defaultValue={jalur.badge} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                <p className="text-xs text-slate-400 mt-1">Teks kecil yang muncul di pojok atas kartu jalur.</p>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-600 mb-1">Deskripsi Singkat</label>
                <textarea defaultValue={jalur.desc} rows={2} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-none" />
              </div>

              <div className="mb-2">
                <label className="block text-xs font-semibold text-slate-600 mb-2">Poin Keunggulan Jalur Ini</label>
                <div className="space-y-2">
                  {jalur.points.map((p, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <input defaultValue={p} className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                      <button title="Hapus poin" className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors flex-shrink-0">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upload Foto */}
            <div className="w-48 flex-shrink-0">
              <label className="block text-xs font-semibold text-slate-600 mb-1">Foto Jalur</label>
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-4 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                <Upload className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 mx-auto mb-1 transition-colors" />
                <p className="text-xs text-slate-500">JPG/PNG, Maks. 2MB</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-2 border-t border-slate-100">
            <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
              <Save className="w-4 h-4" /> Simpan Perubahan
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Tab 2: Jadwal & Biaya ────────────────────────────────────────────────────
// Sesuai dengan PPDBJadwalBiaya.tsx
function TabJadwal() {
  const waves = [
    { name: "Gelombang 1 (Awal)", period: "01 Oktober - 31 Desember 2026", benefit: "Diskon Uang Gedung 20% & Gratis Biaya Formulir" },
    { name: "Gelombang 2 (Reguler)", period: "01 Januari - 31 Maret 2027", benefit: "Diskon Biaya Masuk 10% & Prioritas Pilihan Kelas" },
    { name: "Gelombang 3 (Penutupan)", period: "01 April - 30 Mei 2027", benefit: "Pendaftaran Ditutup Otomatis Jika Kuota Sudah Penuh" },
  ];
  const feeItems = [
    { name: "Formulir & Temu Kenal Anak", note: "Cukup dibayar 1 kali saat mendaftar" },
    { name: "Uang Masuk / Gedung", note: "Bisa dicicil hingga 3 kali pembayaran" },
    { name: "Paket Seragam & Buku Lengkap", note: "Dapat 5 pasang seragam lengkap & buku panduan" },
    { name: "SPP Bulanan", note: "Sudah mencakup semua kegiatan & ekstrakurikuler" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-slate-800">Jadwal Gelombang Pendaftaran</h3>
            <p className="text-xs text-slate-500 mt-0.5">Status buka/tutup gelombang dihitung otomatis berdasarkan tanggal yang diisi.</p>
          </div>
          <button className="inline-flex items-center gap-1.5 text-sm text-emerald-600 font-medium hover:text-emerald-700">
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
            {waves.map((w, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-800">{w.name}</td>
                <td className="px-6 py-4 text-slate-600">{w.period}</td>
                <td className="px-6 py-4 text-slate-600">{w.benefit}</td>
                <td className="px-6 py-4 text-center">
                  <button title="Hapus gelombang" className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-slate-800">Komponen Biaya Pendidikan</h3>
            <p className="text-xs text-slate-500 mt-0.5">Rincian biaya yang ditampilkan di halaman PPDB. Tidak perlu menampilkan nominal angka.</p>
          </div>
          <button className="inline-flex items-center gap-1.5 text-sm text-emerald-600 font-medium hover:text-emerald-700">
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
            {feeItems.map((f, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-800">{f.name}</td>
                <td className="px-6 py-4 text-slate-600">{f.note}</td>
                <td className="px-6 py-4 text-center">
                  <button title="Hapus komponen" className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Tab 3: Persyaratan per Jenjang ─────────────────────────────────────────
// Disesuaikan dengan PPDBPersyaratan.tsx publik:
// masing-masing jenjang punya: syarat usia, info seleksi, daftar dokumen, link PDF, template pesan WA
function TabPersyaratan() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  const jenjang = [
    {
      label: "TK",
      title: "Taman Kanak-Kanak (TK)",
      age: "Usia minimal 4 tahun (TK A) dan 5 tahun (TK B) pada bulan Juli 2027.",
      info: "Tidak ada tes baca-tulis. Anak cukup diajak bermain santai bersama guru untuk melihat kesiapan bergaul dan belajarnya.",
      docs: ["Fotokopi Akta Kelahiran anak (2 lembar)", "Fotokopi Kartu Keluarga & KTP Orang Tua", "Pas Foto anak ukuran 3x4 (3 lembar)", "Buku catatan imunisasi / tumbuh kembang"],
      pdfFile: "/downloads/syarat-ppdb-tk.pdf",
      wa: "Halo Panitia PPDB, saya ingin bertanya lebih lanjut tentang syarat masuk TK.",
    },
    {
      label: "SD",
      title: "Sekolah Dasar (SD)",
      age: "Usia minimal 6 tahun per 1 Juli 2027 (usia 5 tahun 6 bulan dengan rekomendasi psikolog).",
      info: "Proses seleksi berupa temu kenal santai, bukan tes tulis yang membebani. Kami ingin mengenal anak lebih dekat, bukan menguji.",
      docs: ["Fotokopi Akta Kelahiran anak (2 lembar)", "Fotokopi Kartu Keluarga & KTP Orang Tua", "Surat lulus TK/RA atau Rapor TK (jika ada)", "Pas Foto anak ukuran 3x4 (3 lembar)"],
      pdfFile: "/downloads/syarat-ppdb-sd.pdf",
      wa: "Halo Panitia PPDB, saya ingin bertanya lebih lanjut tentang syarat masuk SD.",
    },
    {
      label: "SMP",
      title: "Sekolah Menengah Pertama (SMP)",
      age: "Lulusan SD/MI, usia maksimal 15 tahun di awal tahun pelajaran baru.",
      info: "Ada tes singkat Matematika dasar, Bahasa Indonesia, dan membaca Al-Qur'an yang bersifat pemetaan, bukan penggugur.",
      docs: ["Fotokopi Akta Kelahiran & Kartu Keluarga", "Fotokopi Rapor SD kelas 4, 5, dan 6", "Surat Lulus (SKL) atau Ijazah SD asli", "Nomor NISN yang sudah terdaftar aktif", "Pas Foto ukuran 3x4 (4 lembar)", "Piagam atau sertifikat prestasi (jika ada)"],
      pdfFile: "/downloads/syarat-ppdb-smp.pdf",
      wa: "Halo Panitia PPDB, saya ingin bertanya lebih lanjut tentang syarat masuk SMP.",
    },
    {
      label: "Pesantren",
      title: "Pesantren Rabbani (Boarding)",
      age: "Lulusan SD/MI (masuk MTs) atau Lulusan SMP/MTs (masuk MA). Wajib siap tinggal di asrama.",
      info: "Calon santri akan dites membaca Al-Qur'an dan bincang santai bersama kepala pesantren. Tidak ada tes akademik yang mengintimidasi.",
      docs: ["Fotokopi Akta Kelahiran, KK, & KTP Orang Tua", "Surat Keterangan Sehat dari Dokter/Puskesmas", "Surat persetujuan orang tua (tinggal di asrama)", "Fotokopi Rapor 3 tahun terakhir", "Ijazah atau SKL dari sekolah asal", "Pas Foto ukuran 3x4 & 4x6 (masing-masing 4 lembar)"],
      pdfFile: "/downloads/syarat-ppdb-pesantren.pdf",
      wa: "Halo Panitia PPDB, saya ingin bertanya lebih lanjut tentang syarat masuk Pesantren.",
    },
  ];

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-500">Kelola syarat usia, info seleksi, daftar dokumen, dan tautan PDF untuk setiap jenjang secara terpisah.</p>
      {jenjang.map((j, i) => (
        <div key={j.label} className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Syarat Usia</label>
                    <input defaultValue={j.age} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Info Proses Seleksi</label>
                    <input defaultValue={j.info} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2">Daftar Dokumen yang Harus Disiapkan</label>
                  <div className="space-y-2">
                    {j.docs.map((doc, di) => (
                      <div key={di} className="flex items-center gap-2">
                        <span className="text-xs text-slate-400 w-5 text-right flex-shrink-0">{di + 1}.</span>
                        <input defaultValue={doc} className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                        <button title="Hapus dokumen" className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors flex-shrink-0">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <button className="mt-2 inline-flex items-center gap-1.5 text-sm text-emerald-600 font-medium hover:text-emerald-700 py-1">
                    <Plus className="w-4 h-4" /> Tambah Dokumen
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Tautan File PDF Syarat</label>
                    <input defaultValue={j.pdfFile} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                    <p className="text-xs text-slate-400 mt-1">Letakkan file PDF di folder <code>/public/downloads/</code> lalu isi nama filenya di sini.</p>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Template Pesan WhatsApp</label>
                    <input defaultValue={j.wa} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                    <p className="text-xs text-slate-400 mt-1">Pesan awal yang muncul saat orang tua klik tombol WhatsApp untuk jenjang ini.</p>
                  </div>
                </div>

                <div className="flex justify-end pt-2 border-t border-slate-100">
                  <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                    <Save className="w-4 h-4" /> Simpan Jenjang {j.label}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Tab 4: Alur Pendaftaran ─────────────────────────────────────────────────
// Disesuaikan dengan PPDBAlur.tsx publik: 5 langkah masing-masing punya num, title, desc
function TabAlur() {
  const steps = [
    { num: "01", title: "Daftar dari HP / Laptop", desc: "Isi data awal calon siswa dan nomor WhatsApp orang tua melalui formulir online yang praktis." },
    { num: "02", title: "Kirim Foto Berkas", desc: "Cukup foto dokumen (Kartu Keluarga, Akta, Rapor) lalu unggah atau kirim langsung ke panitia." },
    { num: "03", title: "Temu Kenal Santai", desc: "Anak diajak bermain dan berinteraksi santai bersama guru untuk melihat bakat serta gaya belajarnya." },
    { num: "04", title: "Bincang Bersama Guru", desc: "Diskusi ringan antara orang tua dan kepala sekolah/guru seputar pembinaan terbaik untuk anak." },
    { num: "05", title: "Resmi Diterima!", desc: "Pengumuman hasil kelulusan, pengukuran seragam sekolah, dan persiapan masuk kelas baru." },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-slate-500">Kelola urutan langkah pendaftaran yang tampil di halaman PPDB. Setiap langkah bisa diedit secara terpisah.</p>
        <button className="inline-flex items-center gap-1.5 text-sm text-emerald-600 font-medium hover:text-emerald-700">
          <Plus className="w-4 h-4" /> Tambah Langkah
        </button>
      </div>

      {steps.map((step, i) => (
        <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-black text-emerald-700">{step.num}</span>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Judul Langkah</label>
                <input defaultValue={step.title} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Penjelasan Langkah</label>
                <input defaultValue={step.desc} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
              </div>
            </div>
            <button title="Hapus langkah ini" className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors flex-shrink-0">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-end pt-2">
        <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-2 px-5 rounded-lg transition-colors shadow-sm">
          <Save className="w-4 h-4" /> Simpan Semua Langkah
        </button>
      </div>
    </div>
  );
}

// ─── Tab 5: FAQ ──────────────────────────────────────────────────────────────
// Sesuai dengan PPDBFAQ.tsx publik
function TabFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "Apakah ada tes seleksi akademik yang menggugurkan untuk calon siswa SD?", a: "Tidak ada tes akademik yang bersifat menggugurkan. Pada jenjang SD, kami menggunakan pendekatan Observasi Kesiapan Belajar untuk memetakan kematangan emosi, motorik, konsentrasi, dan gaya belajar anak agar guru dapat memberikan pendampingan terbaik sejak hari pertama." },
    { q: "Bagaimana mekanisme beasiswa penuh Tahfidz 30 Juz?", a: "Calon santri/siswa yang mendaftar jalur beasiswa tahfidz akan mengikuti sesi tasmi' (pengujian hafalan) bersama dewan asatidz. Beasiswa mencakup pembebasan uang pangkal, SPP bulanan, dan asrama selama masa studi dengan mempertahankan kualitas hafalan." },
    { q: "Apakah biaya uang pengembangan/gedung bisa dicicil?", a: "Ya, kami menyediakan skema pembayaran bertahap (cicilan) hingga 3 kali pembayaran sebelum tahun ajaran baru dimulai untuk memudahkan para orang tua." },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-slate-500">Kelola pertanyaan yang sering ditanyakan calon pendaftar di halaman PPDB.</p>
        <button className="inline-flex items-center gap-1.5 text-sm text-emerald-600 font-medium hover:text-emerald-700">
          <Plus className="w-4 h-4" /> Tambah Pertanyaan
        </button>
      </div>
      {faqs.map((faq, i) => (
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
                  <input defaultValue={faq.q} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Jawaban</label>
                  <textarea defaultValue={faq.a} rows={3} className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-none" />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <button className="inline-flex items-center gap-1.5 text-sm text-rose-500 hover:text-rose-700 font-medium">
                    <Trash2 className="w-4 h-4" /> Hapus Pertanyaan Ini
                  </button>
                  <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-1.5 px-4 rounded-lg transition-colors">
                    <Save className="w-3.5 h-3.5" /> Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Komponen Utama ──────────────────────────────────────────────────────────
const tabs = [
  { id: "jalur",       label: "Jalur Pendaftaran" },
  { id: "jadwal",      label: "Jadwal & Biaya" },
  { id: "persyaratan", label: "Persyaratan per Jenjang" },
  { id: "alur",        label: "Alur Pendaftaran" },
  { id: "faq",         label: "FAQ" },
];

export default function PPDBPanel() {
  const [activeTab, setActiveTab] = useState("jalur");

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="flex border-b border-slate-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3.5 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 -mb-px ${
                activeTab === tab.id
                  ? "border-emerald-600 text-emerald-700 bg-emerald-50/50"
                  : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-6">
          {activeTab === "jalur"        && <TabJalur />}
          {activeTab === "jadwal"       && <TabJadwal />}
          {activeTab === "persyaratan"  && <TabPersyaratan />}
          {activeTab === "alur"         && <TabAlur />}
          {activeTab === "faq"          && <TabFAQ />}
        </div>
      </div>
    </div>
  );
}
