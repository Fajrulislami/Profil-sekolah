"use client";

import { useEffect, useRef, useState } from "react";

export default function PrestasiUnggulan() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [featuredAchievements, setFeaturedAchievements] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const fetchPrestasi = async () => {
      try {
        const res = await fetch('/api/v1/prestasi?type=featured&public=true', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          setFeaturedAchievements(data);
        }
      } catch (error) {
        console.error("Gagal mengambil data prestasi:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPrestasi();
  }, []);

  // Data dari API sekarang masuk ke state featuredAchievements

  return (
    <section
      id="unggulan"
      ref={sectionRef}
      className="w-full py-24 lg:py-32 bg-slate-50 relative overflow-hidden font-sans border-b border-slate-200/70"
    >
      {/* Soft Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-emerald-100/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 flex flex-col items-center">
          
          <div
            className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-emerald-300 shadow-sm w-max mb-6 transition-all duration-700 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-emerald-700 tracking-wider uppercase">
              Hall of Fame & Prestasi Unggulan
            </span>
          </div>

          <h2
            className={`text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.2] mb-6 transform transition-all duration-700 delay-150 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Mahakarya & Jejak Prestasi <br />
            <span className="inline-block bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent font-black italic pb-1">
              Tingkat Nasional & Dunia
            </span>
          </h2>

          <p
            className={`text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl transform transition-all duration-700 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Pengakuan bergengsi yang membuktikan bahwa karakter islami dan keunggulan akademik dapat bersinergi melahirkan santri dan siswa berdaya saing global.
          </p>
        </div>

        {/* Featured Achievements Grid (Bento Style 2x2) */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <span className="text-emerald-600 animate-pulse font-medium">Memuat data...</span>
          </div>
        ) : featuredAchievements.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredAchievements.map((item, idx) => (
              <div
                key={item.id}
                className={`group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${200 + idx * 150}ms` }}
              >
                {/* Card Image with Badges */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 bg-slate-800">
                      <svg className="w-12 h-12 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm font-medium">Gambar Tidak Ditemukan</span>
                    </div>
                  )}
                  
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-white/95 text-slate-800 shadow-md backdrop-blur-md">
                      <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{item.medal}</span>
                    </span>
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
                      Tahun {item.year}
                    </span>
                  </div>

                  {/* Bottom Overlay Title & Subtitle */}
                  <div className="absolute bottom-4 inset-x-4 z-10">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                      {item.level}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white line-clamp-2 mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Category & Highlight Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-100">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-md bg-slate-100 text-slate-700">
                        <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <span>{item.category}</span>
                      </span>
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                        {item.competitionName}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Recipient Profile Info */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-500">Peraih Prestasi:</div>
                        <div className="text-sm font-bold text-slate-900">{item.recipient}</div>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-slate-500 hidden sm:inline-block text-right">
                      {/* Grade not available in DB, omit or replace if needed */}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-3xl border border-dashed border-emerald-300/60 shadow-sm">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Belum Ada Prestasi Unggulan</h3>
            <p className="text-slate-500 max-w-md mx-auto">Saat ini belum ada prestasi yang ditandai sebagai unggulan untuk ditampilkan di Hall of Fame.</p>
          </div>
        )}

      </div>
    </section>
  );
}
