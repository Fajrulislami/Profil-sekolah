"use client";

import { useRef, useState, useEffect } from "react";

interface JenjangItem {
  id: string;
  nama: string;
  tagline: string;
  stats: string;
  statsLabel: string;
  program: string[];
  placeholderImage: string;
  warnaAksen: string; // Warna badge & border penanda
}

const daftarJenjang: JenjangItem[] = [
  {
    id: "tk",
    nama: "TK Terpadu",
    tagline: "Membentuk Karakter Sejak Dini dengan Bermain & Belajar Kreatif",
    stats: "Akreditasi A",
    statsLabel: "Unggul & Islami",
    program: ["Pembiasaan Adab & Doa", "Fun Motorik Skill", "Basic English & Arabic"],
    placeholderImage: "TK - Bermain Ceria",
    warnaAksen: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    id: "sd",
    nama: "SD Terpadu",
    tagline: "Meletakkan Pondasi Ilmu Pengetahuan dan Karakter Rabbani",
    stats: "Target 2 Juz",
    statsLabel: "Tahfidz Al-Qur'an",
    program: ["Bilingual Class Program", "Ekskul Sains & Robotik", "Mentoring Akhlak"],
    placeholderImage: "SD - Belajar Aktif",
    warnaAksen: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    id: "smp",
    nama: "SMP Terpadu",
    tagline: "Menumbuhkan Jiwa Kepemimpinan dan Berpikir Kritis-Inovatif",
    stats: "Digital School",
    statsLabel: "Berbasis Teknologi",
    program: ["Coding & Media Digital", "Karya Ilmiah Remaja", "English Camp & Khitobah"],
    warnaAksen: "text-amber-600 bg-amber-50 border-amber-100",
    placeholderImage: "SMP - Kolaborasi",
  },
  {
    id: "pesantren",
    nama: "Pesantren Rabbani",
    tagline: "Mendidik Kader Ulama Pemimpin Masa Depan yang Tangguh",
    stats: "30 Juz",
    statsLabel: "Program Takhasus",
    program: ["Kajian Kitab Kuning", "Bahasa Arab Intensif", "Leadership & Da'wah"],
    warnaAksen: "text-teal-600 bg-teal-50 border-teal-100",
    placeholderImage: "Pesantren - Mengaji",
  },
];

export default function JenjangSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Fungsi untuk mendeteksi posisi scroll agar tombol panah bisa mati/nyala otomatis
  const checkScrollPosition = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkScrollPosition);
      // Cek posisi awal
      checkScrollPosition();
    }
    return () => slider?.removeEventListener("scroll", checkScrollPosition);
  }, []);

  // Fungsi navigasi tombol panah
  const navigasi = (arah: "kiri" | "kanan") => {
    if (sliderRef.current) {
      const { clientWidth } = sliderRef.current;
      // Geser sejauh 85% dari lebar container agar perpindahan kartu terasa pas
      const jarakGeser = arah === "kiri" ? -clientWidth * 0.85 : clientWidth * 0.85;
      sliderRef.current.scrollBy({ left: jarakGeser, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-gray-50 overflow-hidden border-t border-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================= */}
        {/* HEADER SECTION                            */}
        {/* ========================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
             {/* Badge/Pill Label (Aksen warna berganti ke hijau) */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-300 shadow-sm shadow-emerald-100 w-max mx-auto lg:mx-0 mb-6 transition-all duration-1000 ease-out ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-emerald-600 tracking-wide uppercase">
                Layanan Pendidikan
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Jenjang Pendidikan Terpadu
            </h2>
            <p className="mt-3 text-gray-500 text-base">
              Kami menyediakan ekosistem pendidikan berkesinambungan dari usia dini hingga siap kerja, memadukan ilmu umum dan nilai keislaman universal.
            </p>
          </div>

          {/* Tombol Navigasi Kiri / Kanan (Desktop & Tablet) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => navigasi("kiri")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "border-gray-200 text-gray-700 bg-white hover:bg-gray-50 shadow-sm active:scale-95"
                  : "border-gray-100 text-gray-300 bg-gray-50 cursor-not-allowed"
              }`}
              aria-label="Geser Kiri"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => navigasi("kanan")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "border-gray-200 text-gray-700 bg-white hover:bg-gray-50 shadow-sm active:scale-95"
                  : "border-gray-100 text-gray-300 bg-gray-50 cursor-not-allowed"
              }`}
              aria-label="Geser Kanan"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* ========================================= */}
        {/* CAROUSEL SLIDER WRAPPER                   */}
        {/* ========================================= */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-none touch-pan-x select-none -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          style={{ scrollbarWidth: "none" }}
        >
          {daftarJenjang.map((jenjang) => (
            <div
              key={jenjang.id}
              className="w-[290px] sm:w-[360px] flex-shrink-0 snap-start snap-always"
            >
              {/* KARTU UTAMA (Pilihan B: Atas Foto, Bawah Konten Putih Bersih) */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group">
                
                {/* 1. Bagian Foto (Atas) */}
                <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                  {/* Overlay Gradasi Estetis Ringan */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 opacity-60" />
                  
                  {/* Wadah Teks Placeholder Pengganti Foto Asli */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gray-50 text-center">
                    <svg className="w-12 h-12 text-gray-300 mb-2 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs text-gray-400 font-medium tracking-wide uppercase">Foto Kegiatan {jenjang.placeholderImage}</span>
                  </div>

                  {/* Silakan pasang tag <img> asli Anda di sini jika file foto sudah ada:
                  <img 
                    src={`/images/jenjang/${jenjang.id}.jpg`} 
                    alt={jenjang.nama} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  /> 
                  */}

                  {/* Badge Info Menarik di Pojok Atas Foto */}
                  <div className="absolute top-4 right-4 z-20 flex flex-col items-end">
                    <div className={`px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wide uppercase border shadow-sm ${jenjang.warnaAksen}`}>
                      {jenjang.stats}
                    </div>
                  </div>
                </div>

                {/* 2. Bagian Informasi (Bawah - Latar Belakang Putih) */}
                <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    {/* Nama Jenjang */}
                    <h3 className="text-gray-900 font-extrabold text-xl tracking-tight group-hover:text-brand-primary transition-colors duration-300">
                      {jenjang.nama}
                    </h3>
                    
                    {/* Tagline deskripsi */}
                    <p className="text-gray-500 text-xs mt-2 leading-relaxed min-h-[36px]">
                      {jenjang.tagline}
                    </p>

                    <hr className="my-4 border-gray-100" />

                    {/* Pembatas / List Program Unggulan */}
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Program Unggulan:
                    </p>
                    <ul className="space-y-1.5">
                      {jenjang.program.map((prog, index) => (
                        <li key={index} className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                          {/* Centang Kecil Hijau */}
                          <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                          {prog}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tombol Aksi di bagian paling bawah kartu */}
                  <div className="pt-6">
                    <button className="w-full py-2.5 px-4 bg-gray-50 hover:bg-brand-primary hover:text-white border border-gray-100 text-gray-700 rounded-xl font-bold text-xs transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-[0.98]">
                      Info Selengkapnya
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
          
          {/* Spacing penyeimbang di ujung paling kanan agar kartu terakhir tidak mentok */}
          <div className="w-2 flex-shrink-0" />
        </div>

        {/* Petunjuk Swipe di Tampilan Mobile */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-2 text-gray-400 text-xs">
          <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          <span>Geser ke samping untuk melihat jenjang lainnya</span>
        </div>

      </div>
    </section>
  );
}