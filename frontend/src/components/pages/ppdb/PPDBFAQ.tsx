"use client";

import { useState } from "react";

export default function PPDBFAQ() {
  // Ubah initial state menjadi null agar semua tertutup saat awal di-load
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "Apakah ada tes seleksi akademik yang menggugurkan untuk calon siswa SD?",
      a: "Tidak ada tes akademik yang bersifat menggugurkan. Pada jenjang SD, kami menggunakan pendekatan Observasi Kesiapan Belajar untuk memetakan kematangan emosi, motorik, konsentrasi, dan gaya belajar anak agar guru dapat memberikan pendampingan terbaik sejak hari pertama.",
    },
    {
      q: "Bagaimana mekanisme beasiswa penuh Tahfidz 30 Juz?",
      a: "Calon santri/siswa yang mendaftar jalur beasiswa tahfidz akan mengikuti sesi tasmi' (pengujian hafalan) bersama dewan asatidz. Beasiswa mencakup pembebasan uang pangkal, SPP bulanan, dan asrama selama masa studi dengan mempertahankan kualitas hafalan.",
    },
    {
      q: "Apakah biaya uang pengembangan/gedung bisa dicicil?",
      a: "Ya, kami menyediakan skema pembayaran bertahap (cicilan) hingga 3 kali pembayaran sebelum tahun ajaran baru dimulai untuk memudahkan para orang tua.",
    },
    {
      q: "Kapan jadwal observasi dan wawancara dilaksanakan setelah mendaftar online?",
      a: "Setelah formulir online dan berkas awal terverifikasi, panitia PPDB akan mengirimkan undangan jadwal observasi & wawancara (pilihan sesi offline di sekolah atau online) dalam kurun waktu maksimal 3 hari kerja melalui WhatsApp.",
    },
    {
      q: "Apakah diperbolehkan melakukan School Tour atau konsultasi langsung sebelum mendaftar?",
      a: "Sangat diperbolehkan! Kami menyambut kedatangan calon wali murid setiap hari kerja (Senin–Jumat pukul 08.00–16.00 WIB dan Sabtu pukul 08.00–13.00 WIB) untuk melihat langsung fasilitas sekolah dan berdiskusi dengan tim kurikulum.",
    },
    {
      q: "Bagaimana fasilitas dan pembinaan bagi santri baru di asrama pesantren?",
      a: "Asrama dilengkapi dengan kamar ber-AC, lemari pribadi, ranjang berkualitas, layanan laundry, catering gizi seimbang 3x sehari, klinik kesehatan, serta didampingi oleh musyrif/musyrifah 24 jam untuk pembiasaan ibadah dan adab harian.",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-slate-950 font-sans border-t border-slate-900 overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section (Tema Gelap) */}
        <div className="flex flex-col items-start lg:items-center lg:text-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900 border border-amber-400/30 shadow-sm w-max mb-6">
            <span className="flex h-2.5 w-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wider uppercase">
              Pusat Bantuan & FAQ
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 pb-2">
              Tanya Jawab Seputar PPDB
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-medium">
            Temukan jawaban cepat atas pertanyaan yang paling sering diajukan oleh calon wali murid.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-slate-900/90 border-amber-400/40 shadow-lg"
                    : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Tombol Header Accordion */}
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-black text-base sm:text-lg text-white cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? "bg-amber-500 text-slate-950 border-transparent rotate-180" 
                        : "bg-slate-800 border-amber-400/30 text-amber-400"
                    }`}
                  >
                    {/* Menggunakan SVG Chevron agar lebih konsisten & rapi */}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Konten Accordion dengan Animasi Mulus */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-medium border-t border-slate-800/60">
                      {faq.a}
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