"use client";

import { useEffect, useState, useRef } from "react";

export default function ProfilSMP() {
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

  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#0B1120] overflow-hidden text-white">
      
      {/* Background Ambient Glow (Tanpa blur berlebihan) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* ================================================= */}
        {/* BAGIAN ATAS: JUDUL & DESKRIPSI                    */}
        {/* ================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          
          {/* Badge Label (Tajam tanpa blur) */}
          <div 
            className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-400/30 shadow-sm w-max mx-auto mb-6 transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shrink-0 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wide uppercase">
              Profil SMP Islam YPI Cordova
            </span>
          </div>

          {/* Judul Utama */}
          <h1 
            className={`text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight mb-6 transition-all duration-500 delay-100 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Membentuk Generasi Pemimpin <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              Berkarakter & Berprestasi
            </span>
          </h1>

          {/* Desk / Isi */}
          <p 
            className={`text-slate-300 text-base sm:text-lg leading-relaxed font-light transition-all duration-500 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            SMP Islam YPI Cordova memadukan keunggulan akademik, pembentukan adab kepemimpinan, dan pendalaman Al-Qur'an untuk menyiapkan siswa menjadi pribadi yang unggul.
          </p>
        </div>

        {/* ================================================= */}
        {/* BAGIAN BAWAH: ALUR KARTU                          */}
        {/* ================================================= */}
        <div className="relative">
          
          {/* GRID LAYOUT KARTU */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            
            {/* KARTU 01 */}
            <div 
              className={`relative bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 transform lg:-rotate-1 hover:rotate-0 hover:scale-[1.02] transition-all duration-500 delay-300 hover:delay-0 hover:duration-200 ease-out group flex flex-col justify-between [backface-visibility:hidden] ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div>
                <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-300 mx-auto -mt-1 mb-4 shadow-inner"></div>
                <span className="text-xs font-black text-amber-500 tracking-widest block mb-1 uppercase">
                  01 • Usia Didik
                </span>
                <h3 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                  12 – 15 Tahun
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Fase remaja awal yang krusial untuk pembentukan identitas diri, kemandirian mental, serta pemantapan nilai-nilai keislaman.
                </p>
              </div>

              {/* Indicator Arrow (Desktop: Kanan) */}
              <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-amber-400 text-slate-900 items-center justify-center font-bold text-sm shadow-md border-2 border-[#0B1120]">
                →
              </div>
            </div>

            {/* KARTU 02 */}
            <div 
              className={`relative bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 transform lg:rotate-2 hover:rotate-0 hover:scale-[1.02] transition-all duration-500 delay-[450ms] hover:delay-0 hover:duration-200 ease-out group flex flex-col justify-between [backface-visibility:hidden] ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div>
                <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-300 mx-auto -mt-1 mb-4 shadow-inner"></div>
                <span className="text-xs font-black text-amber-500 tracking-widest block mb-1 uppercase">
                  02 • Durasi Belajar
                </span>
                <h3 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                  3 Tahun Masa Studi
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Program pendidikan intensif jenjang Kelas 7, 8, dan 9 dengan kurikulum yang memadukan Sains, Teknologi, dan Al-Qur'an.
                </p>
              </div>

              {/* Indicator Arrow (Desktop: Kanan) */}
              <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-amber-400 text-slate-900 items-center justify-center font-bold text-sm shadow-md border-2 border-[#0B1120]">
                →
              </div>
            </div>

            {/* KARTU 03 */}
            <div 
              className={`relative bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 transform lg:-rotate-1 hover:rotate-0 hover:scale-[1.02] transition-all duration-500 delay-[600ms] hover:delay-0 hover:duration-200 ease-out group flex flex-col justify-between [backface-visibility:hidden] ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div>
                <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-300 mx-auto -mt-1 mb-4 shadow-inner"></div>
                <span className="text-xs font-black text-amber-500 tracking-widest block mb-1 uppercase">
                  03 • Rasio Kelas
                </span>
                <h3 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                  28–30 Siswa / Kelas
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Kapasitas kelas terukur untuk menjaga iklim belajar yang interaktif, kondusif, dan pendampingan akademik presisi.
                </p>
              </div>
            </div>

            {/* BARIS BAWAH: KARTU 04 & 05 */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto w-full mt-2 lg:mt-4">
              
              {/* KARTU 04 */}
              <div 
                className={`relative bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 transform lg:rotate-1 hover:rotate-0 hover:scale-[1.02] transition-all duration-500 delay-[750ms] hover:delay-0 hover:duration-200 ease-out group flex flex-col justify-between [backface-visibility:hidden] ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
                }`}
              >
                <div>
                  <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-300 mx-auto -mt-1 mb-4 shadow-inner"></div>
                  <span className="text-xs font-black text-amber-500 tracking-widest block mb-1 uppercase">
                    04 • Kurikulum
                  </span>
                  <h3 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                    Merdeka + Tahfidz
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    Integrasi Kurikulum Nasional Merdeka dengan program unggulan Tahfidzul Qur'an & pembinaan karakter *Leadership*.
                  </p>
                </div>

                {/* Indicator Arrow (Desktop: Kanan) */}
                <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-amber-400 text-slate-900 items-center justify-center font-bold text-sm shadow-md border-2 border-[#0B1120]">
                  →
                </div>
              </div>

              {/* KARTU 05 */}
              <div 
                className={`relative bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 transform lg:-rotate-2 hover:rotate-0 hover:scale-[1.02] transition-all duration-500 delay-[900ms] hover:delay-0 hover:duration-200 ease-out group flex flex-col justify-between [backface-visibility:hidden] ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
                }`}
              >
                <div>
                  <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-300 mx-auto -mt-1 mb-4 shadow-inner"></div>
                  <span className="text-xs font-black text-amber-500 tracking-widest block mb-1 uppercase">
                    05 • Target Lulusan
                  </span>
                  <h3 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                    Siap Jenjang SMA/MA
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    Mencetak lulusan berdaya saing tinggi, berakhlak mulia, serta siap menembus sekolah menengah atas favorit pilihan.
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