"use client";

import { useEffect, useState, useRef } from "react";

export default function ProfilTK() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#0B1120] overflow-hidden">
      
      {/* BACKGROUND ACCENT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ========================================= */}
          {/* KOLOM KIRI: TEKS DESKRIPSI & JUDUL BARU    */}
          {/* ========================================= */}
          <div 
            className={`lg:col-span-5 flex flex-col justify-center text-center lg:text-left transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* KAPSUL IDENTIK (Perbaikan: Ditambahkan w-max & disesuaikan untuk Dark Mode) */}
            <div 
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-400/40 shadow-sm w-max mb-6 transition-all duration-500 hover:border-amber-500/50"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shrink-0 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wide uppercase">
                Profil & Informasi TK
              </span>
            </div>

            {/* Judul Utama dengan Typography Sesuai Snippet */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight mb-6">
              Membentuk Karakter & potensi <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">
                Anak usia dini
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-light">
              TK Islam YPI Cordova mendedikasikan diri untuk menyediakan lingkungan yang merangsang rasa ingin tahu anak melalui pendekatan Islami terintegrasi dan metode bermain yang aman.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-[#0B1120] rounded-full font-extrabold text-sm transition-all transform hover:-translate-y-1 shadow-xl shadow-yellow-400/20">
                Unduh Brosur Profil
              </button>
            </div>
          </div>

          {/* ========================================= */}
          {/* KOLOM KANAN: KONSEP KARTU GAMBAR 1 (PIN)  */}
          {/* ========================================= */}
          <div 
            className={`lg:col-span-7 relative transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* SVG Garis Putus-Putus Alur (Layar Besar) */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block z-0" 
              viewBox="0 0 500 500" 
              fill="none" 
            >
              <path 
                d="M 120 100 C 250 80, 380 180, 380 250 C 380 320, 120 380, 250 450" 
                stroke="#FACC15" 
                strokeOpacity="0.4" 
                strokeWidth="2.5" 
                strokeDasharray="6 6"
              />
            </svg>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 relative z-10 p-2">
              
              {/* KARTU 01: RENTANG USIA */}
              <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 transform sm:-rotate-2 hover:rotate-0 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Pin / Lubang Gantungan */}
                  <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-300 mx-auto -mt-1 mb-4 shadow-inner"></div>
                  
                  <span className="text-xs font-black text-amber-500 tracking-widest block mb-1 uppercase">
                    01 • Usia Didik
                  </span>
                  <h3 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                    4 – 6 Tahun
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    Fase Golden Age mendasar untuk melatih perkembangan sensorik, motorik, dan adab Islami secara hangat.
                  </p>
                </div>
              </div>

              {/* KARTU 02: LAMA PENDIDIKAN */}
              <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 transform sm:rotate-3 sm:translate-y-6 hover:rotate-0 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Pin / Lubang Gantungan */}
                  <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-300 mx-auto -mt-1 mb-4 shadow-inner"></div>
                  
                  <span className="text-xs font-black text-amber-500 tracking-widest block mb-1 uppercase">
                    02 • Durasi Belajar
                  </span>
                  <h3 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                    2 Tahun
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    Masa studi terstruktur bertahap dari kelompok TK A hingga persiapan matang memasuki jenjang SD.
                  </p>
                </div>
              </div>

              {/* KARTU 03: JUMLAH KELAS */}
              <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 transform sm:-rotate-2 hover:rotate-0 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Pin / Lubang Gantungan */}
                  <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-300 mx-auto -mt-1 mb-4 shadow-inner"></div>
                  
                  <span className="text-xs font-black text-amber-500 tracking-widest block mb-1 uppercase">
                    03 • Kelompok
                  </span>
                  <h3 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                    Kelas A & B
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    Pembagian rombel belajar yang disesuaikan secara presisi dengan tingkat kematangan usia anak.
                  </p>
                </div>
              </div>

              {/* KARTU 04: KAPASITAS SISWA */}
              <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 transform sm:rotate-2 sm:translate-y-6 hover:rotate-0 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Pin / Lubang Gantungan */}
                  <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-300 mx-auto -mt-1 mb-4 shadow-inner"></div>
                  
                  <span className="text-xs font-black text-amber-500 tracking-widest block mb-1 uppercase">
                    04 • Rasio Kelas
                  </span>
                  <h3 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                    20 Siswa / Kelas
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    Jumlah murid dibatasi agar tiap anak mendapatkan perhatian dan bimbingan guru secara optimal.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}