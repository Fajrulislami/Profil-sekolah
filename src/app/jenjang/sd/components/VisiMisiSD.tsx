"use client";

import { useEffect, useRef, useState } from "react";

export default function VisiMisiSD() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const misiList = [
    {
      num: "01",
      text: "Menanamkan nilai keislaman dan adab mulia dalam rutinitas harian.",
    },
    {
      num: "02",
      text: "Menyelenggarakan pembelajaran aktif, inovatif, dan berbasis teknologi cerdas.",
    },
    {
      num: "03",
      text: "Mengembangkan potensi, minat, dan bakat siswa secara optimal.",
    },
    {
      num: "04",
      text: "Menciptakan lingkungan sekolah yang aman, inklusif, dan ramah anak.",
    }
  ];

  return (
    <section ref={sectionRef} className="w-full py-24 bg-slate-50 relative overflow-hidden font-sans border-b border-slate-200/60">
      
      {/* Ambient Dekoratif Latar Belakang */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-100/40 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* HEADER SECTION                                            */}
        {/* ========================================================= */}
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          
          {/* KAPSUL IDENTIK */}
          <div className={`w-max inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-300 shadow-sm shadow-emerald-100/50 mb-6 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-emerald-600 tracking-wide uppercase">
              Arah & Tujuan
            </span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 leading-[1.25] tracking-tight transform transition-all duration-700 delay-150 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Mewujudkan Generasi <br className="hidden sm:block" />
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent font-black italic pb-2 pr-4 mt-1">
              Pemimpin Masa Depan
            </span>
          </h2>
        </div>

        {/* ========================================================= */}
        {/* LAYOUT 3 KOLOM KREATIF (Kiri: Visi | Tengah: Gambar | Kanan: Misi) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* KOLOM 1: VISI SEKOLAH (KIRI - 4 KOLOM) */}
          <div className={`lg:col-span-4 h-full flex flex-col transform transition-all duration-700 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <div className="relative h-full bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl shadow-slate-200/50 flex flex-col justify-between group transition-all duration-500 hover:border-emerald-300 hover:shadow-emerald-100/50">
              
              <div>
                {/* Badge Ikon Visi */}
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600 mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>

                <h3 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">
                  Visi Sekolah
                </h3>

                <p className="text-lg sm:text-xl font-bold text-slate-800 leading-relaxed italic">
                  "Menjadi lembaga pendidikan dasar unggulan yang melahirkan generasi cerdas, berkarakter mulia, dan berwawasan global berlandaskan nilai-nilai agama."
                </p>
              </div>

              {/* Garis Aksen Bawah */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span>Landasan Karakter</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              </div>

            </div>
          </div>

          {/* KOLOM 2: GAMBAR UTAMA (TENGAH - 4 KOLOM - DIBUAT PROMINEN) */}
          <div className={`lg:col-span-4 h-full transform transition-all duration-700 delay-450 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <div className="relative min-h-[400px] lg:min-h-[460px] h-full rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" 
                alt="Siswa Belajar Bersama" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

              {/* Badge Teks Melayang di Atas Gambar */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg">
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
                  Lingkungan Inklusif
                </p>
                <p className="text-sm font-extrabold text-slate-800">
                  Membentuk Pembelajar Sepanjang Hayat
                </p>
              </div>
            </div>
          </div>

          {/* KOLOM 3: MISI SEKOLAH (KANAN - 4 KOLOM) */}
          <div className={`lg:col-span-4 h-full flex flex-col transform transition-all duration-700 delay-600 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <div className="relative h-full bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl shadow-slate-200/50 flex flex-col justify-between group transition-all duration-500 hover:border-emerald-300 hover:shadow-emerald-100/50">
              
              <div>
                {/* Badge Ikon Misi */}
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-teal-600 mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <h3 className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-4">
                  Misi Sekolah
                </h3>

                {/* Daftar Poin Misi */}
                <ul className="space-y-4">
                  {misiList.map((misi, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 group/item">
                      <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center mt-0.5">
                        {misi.num}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed group-hover/item:text-slate-900 transition-colors">
                        {misi.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Garis Aksen Bawah */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span>4 Pilar Komitmen</span>
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}