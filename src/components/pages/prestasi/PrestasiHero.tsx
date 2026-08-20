"use client";

import { useEffect, useState } from "react";

export default function PrestasiHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const statsHighlights = [
    {
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      value: "150+",
      label: "Penghargaan Resmi",
      badge: "Tahun 2023 - 2025",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      value: "14",
      label: "Kejuaraan Internasional",
      badge: "ASEAN & Global",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      value: "48",
      label: "Medali Emas Nasional",
      badge: "OSN, FLS2N, O2SN",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      value: "100%",
      label: "Pembinaan Terpadu",
      badge: "Sains & Tahfidz",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-slate-50 to-slate-100/80 pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-slate-200/70">
      
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[400px] h-[300px] bg-amber-100/30 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle Grid Lines Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Text Area */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Badge Kapsul Identik */}
          <div
            className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-emerald-300 shadow-sm w-max mb-6 transition-all duration-700 ease-out transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-emerald-700 tracking-wider uppercase">
              Galeri Rekam Jejak Juara
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6 transform transition-all duration-700 delay-150 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Panggung Dedikasi & <br className="hidden sm:block" />
            <span className="inline-block bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent italic pr-2">
              Prestasi Generasi Rabbani
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-base sm:text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl transform transition-all duration-700 delay-300 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Mewadahi potensi unik setiap santri dan siswa untuk bersaing dan mengukir nama di kancah daerah, nasional, hingga internasional melalui perpaduan sains, tahfidz, olahraga, dan seni.
          </p>

          {/* Action Buttons */}
          <div
            className={`flex flex-wrap items-center justify-center gap-4 mb-16 transform transition-all duration-700 delay-500 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#daftar-prestasi"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-700/25 hover:shadow-emerald-700/40 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
            >
              <span>Eksplorasi Daftar Prestasi</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>

            <a
              href="#unggulan"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm sm:text-base border border-slate-200 hover:border-slate-300 shadow-sm hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <span>Lihat Prestasi Unggulan</span>
              <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Highlight Cards Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 transform transition-all duration-1000 delay-700 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {statsHighlights.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-emerald-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-slate-600 mt-1">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
