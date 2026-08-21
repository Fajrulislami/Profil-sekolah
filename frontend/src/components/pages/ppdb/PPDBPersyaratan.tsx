"use client";

import { useState } from "react";

export default function PPDBPersyaratan() {
  // Ubah ke -1 agar semua tertutup saat awal load. (Ubah ke 0 jika ingin TK terbuka default)
  const [openIdx, setOpenIdx] = useState<number>(-1);

  const jenjang = [
    {
      id: 0,
      label: "TK",
      title: "Taman Kanak-Kanak (TK)",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800&auto=format&fit=crop",
      age: "Usia minimal 4 tahun (TK A) dan 5 tahun (TK B) pada bulan Juli 2027.",
      info: "Tidak ada tes baca-tulis. Anak cukup diajak bermain santai bersama guru untuk melihat kesiapan bergaul dan belajarnya.",
      docs: [
        "Fotokopi Akta Kelahiran anak (2 lembar)",
        "Fotokopi Kartu Keluarga & KTP Orang Tua",
        "Pas Foto anak ukuran 3x4 (3 lembar)",
        "Buku catatan imunisasi / tumbuh kembang",
      ],
      pdfFile: "/downloads/syarat-ppdb-tk.pdf",
      wa: "Halo%20Panitia%20PPDB,%20saya%20ingin%20bertanya%20lebih%20lanjut%20tentang%20syarat%20masuk%20TK.",
    },
    {
      id: 1,
      label: "SD",
      title: "Sekolah Dasar (SD)",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
      age: "Usia minimal 6 tahun per 1 Juli 2027 (usia 5 tahun 6 bulan dengan rekomendasi psikolog).",
      info: "Proses seleksi berupa temu kenal santai, bukan tes tulis yang membebani. Kami ingin mengenal anak lebih dekat, bukan menguji.",
      docs: [
        "Fotokopi Akta Kelahiran anak (2 lembar)",
        "Fotokopi Kartu Keluarga & KTP Orang Tua",
        "Surat lulus TK/RA atau Rapor TK (jika ada)",
        "Pas Foto anak ukuran 3x4 (3 lembar)",
      ],
      pdfFile: "/downloads/syarat-ppdb-sd.pdf",
      wa: "Halo%20Panitia%20PPDB,%20saya%20ingin%20bertanya%20lebih%20lanjut%20tentang%20syarat%20masuk%20SD.",
    },
    {
      id: 2,
      label: "SMP",
      title: "Sekolah Menengah Pertama (SMP)",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
      age: "Lulusan SD/MI, usia maksimal 15 tahun di awal tahun pelajaran baru.",
      info: "Ada tes singkat Matematika dasar, Bahasa Indonesia, dan membaca Al-Qur'an yang bersifat pemetaan, bukan penggugur.",
      docs: [
        "Fotokopi Akta Kelahiran & Kartu Keluarga",
        "Fotokopi Rapor SD kelas 4, 5, dan 6",
        "Surat Lulus (SKL) atau Ijazah SD asli",
        "Nomor NISN yang sudah terdaftar aktif",
        "Pas Foto ukuran 3x4 (4 lembar)",
        "Piagam atau sertifikat prestasi (jika ada)",
      ],
      pdfFile: "/downloads/syarat-ppdb-smp.pdf",
      wa: "Halo%20Panitia%20PPDB,%20saya%20ingin%20bertanya%20lebih%20lanjut%20tentang%20syarat%20masuk%20SMP.",
    },
    {
      id: 3,
      label: "Pesantren",
      title: "Pesantren Rabbani (Boarding)",
      image: "https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=800&auto=format&fit=crop",
      age: "Lulusan SD/MI (masuk MTs) atau Lulusan SMP/MTs (masuk MA). Wajib siap tinggal di asrama.",
      info: "Calon santri akan dites membaca Al-Qur'an dan bincang santai bersama kepala pesantren. Tidak ada tes akademik yang mengintimidasi.",
      docs: [
        "Fotokopi Akta Kelahiran, KK, & KTP Orang Tua",
        "Surat Keterangan Sehat dari Dokter/Puskesmas",
        "Surat persetujuan orang tua (tinggal di asrama)",
        "Fotokopi Rapor 3 tahun terakhir",
        "Ijazah atau SKL dari sekolah asal",
        "Pas Foto ukuran 3x4 & 4x6 (masing-masing 4 lembar)",
      ],
      pdfFile: "/downloads/syarat-ppdb-pesantren.pdf",
      wa: "Halo%20Panitia%20PPDB,%20saya%20ingin%20bertanya%20lebih%20lanjut%20tentang%20syarat%20masuk%20Pesantren.",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-slate-950 font-sans border-t border-slate-900 overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-start lg:items-center lg:text-center mb-12">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900 border border-amber-400/30 shadow-sm w-max mb-6">
            <span className="flex h-2.5 w-2.5 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wider uppercase">
              Dokumen yang Perlu Disiapkan
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.15] mb-6">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 pb-2">
              Syarat Daftar per Jenjang
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-medium">
            Klik jenjang sekolah anak di bawah untuk melihat syarat lengkapnya. Bisa juga minta PDF resmi ke WhatsApp panitia.
          </p>
        </div>

        {/* Accordion Cards */}
        <div className="space-y-4">
          {jenjang.map((item) => {
            const isOpen = openIdx === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-3xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-amber-400/40 shadow-2xl"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Header Accordion */}
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : item.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 bg-slate-900 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className={`h-12 min-w-[3rem] px-3 rounded-2xl flex items-center justify-center text-sm font-black shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-amber-500 text-slate-950"
                        : "bg-slate-800 text-slate-300"
                    }`}>
                      {item.label}
                    </span>
                    <div className="text-left">
                      <h3 className={`text-base sm:text-lg font-black transition-colors ${isOpen ? "text-amber-400" : "text-white"}`}>
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">
                        {item.age.split(".")[0]}...
                      </p>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? "bg-amber-500 text-slate-950 rotate-180"
                      : "bg-slate-800 text-slate-400"
                  }`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Panel Konten (Menggunakan animasi grid agar tidak lompat) */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="bg-slate-900/60 border-t border-slate-800">
                      
                      {/* Foto Suasana */}
                      <div className="relative w-full h-44 sm:h-52 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                      </div>

                      <div className="p-5 sm:p-8 space-y-5">
                        
                        {/* Kotak Syarat Usia */}
                        <div className="p-4 rounded-2xl bg-slate-950/80 border border-amber-400/20 flex items-start gap-3">
                          <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">Syarat Usia:</span>
                            <p className="text-sm font-bold text-white leading-relaxed">{item.age}</p>
                          </div>
                        </div>

                        {/* Kotak Info Proses Seleksi */}
                        <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex items-start gap-3">
                          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">i</div>
                          <p className="text-sm text-emerald-300 leading-relaxed font-medium">{item.info}</p>
                        </div>

                        {/* Daftar Dokumen */}
                        <div>
                          <h4 className="text-sm font-black text-white mb-3">Dokumen yang perlu disiapkan:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {item.docs.map((doc, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/50 border border-slate-800 text-xs sm:text-sm text-slate-300 font-medium"
                              >
                                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                                  {i + 1}
                                </span>
                                <span>{doc}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tombol Minta PDF via WhatsApp */}
                        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <p className="text-xs text-slate-400 font-medium">
                            Unduh syarat lengkap dalam format PDF atau hubungi panitia langsung.
                          </p>
                          <div className="flex flex-wrap gap-2 shrink-0">
                            <a
                              href={item.pdfFile}
                              download={`Syarat-PPDB-${item.label}.pdf`}
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-extrabold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              Unduh PDF Jenjang {item.label}
                            </a>
                            <a
                              href={`https://wa.me/6281234567890?text=${item.wa}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs sm:text-sm font-bold border border-slate-700 transition-all duration-300 hover:-translate-y-0.5"
                            >
                              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2z" />
                              </svg>
                              Tanya Panitia
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}