"use client";

import { useEffect, useState } from "react";

export default function FasilitasHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    // Jarak atas diset ke 0 (pt-0) agar banner menempel sempurna di batas atas layar tanpa bar abu-abu
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center pt-0 overflow-visible">
      
      {/* ========================================================= */}
      {/* 1. BACKGROUND IMAGE: Menempel Sempurna ke Atas & Samping */}
      {/* ========================================================= */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1920&auto=format&fit=crop')" 
        }}
      ></div>

      {/* OVERLAY GRADASI GELAP */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/80 to-[#0B1120]/30 z-10"></div>
      
      {/* GRADASI BAWAH: Transisi lembut menuju seksi di bawahnya */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none"></div>

      {/* ========================================================= */}
      {/* 2. KONTEN UTAMA (Judul & Deskripsi)                       */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl">
          
          <span 
            className={`inline-flex items-center px-4 py-2 rounded-full bg-brand-accent/20 text-brand-accent font-black text-[10px] md:text-xs uppercase tracking-widest border border-brand-accent/30 backdrop-blur-md mb-6 transform transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            ✨ Infrastruktur Pendidikan
          </span>
          
          <h1 
            className={`text-4xl md:text-6.5xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6 transform transition-all duration-1000 delay-200 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Ruang Tumbuh <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200">
              Generasi Juara
            </span>
          </h1>
          
          <p 
            className={`text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mb-10 transform transition-all duration-1000 delay-400 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Kami menyadari bahwa lingkungan belajar yang optimal adalah katalisator bagi kreativitas dan prestasi. Jelajahi berbagai fasilitas modern yang kami siapkan khusus untuk mendukung eksplorasi putra-putri Anda.
          </p>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. FLOATING STATS CARD (Kaca Gelap & Angka Konkret)        */}
      {/* ========================================================= */}
      <div className="absolute -bottom-16 md:-bottom-12 left-0 right-0 px-4 sm:px-6 lg:px-8 z-30">
        <div 
          className={`max-w-6xl mx-auto bg-[#0B1120]/80 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-[#0B1120]/40 rounded-[2rem] p-8 md:p-10 transform transition-all duration-1000 delay-500 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10 text-center">
            
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">
                30<span className="text-brand-accent">+</span>
              </span>
              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Ruang Kelas</span>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">
                5
              </span>
              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Laboratorium</span>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">
                3
              </span>
              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Lp. Olahraga</span>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">
                24<span className="text-brand-accent">/7</span>
              </span>
              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Keamanan</span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}