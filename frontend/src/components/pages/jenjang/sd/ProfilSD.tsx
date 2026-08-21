"use client";

import { useEffect } from "react";

export default function ProfilSD() {
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".fade-in-stats");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      label: "Tahun Berdiri",
      value: "2010",
      colSpan: "col-span-1",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: "Rentang Usia Didik",
      value: "6 - 12 Tahun",
      colSpan: "col-span-1",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      label: "Lama Pendidikan",
      value: "6 Tahun",
      colSpan: "col-span-1",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      label: "Kapasitas Siswa",
      value: "25 Siswa / Kelas",
      colSpan: "col-span-1",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      label: "Pendekatan Pembelajaran",
      value: "Kurikulum Merdeka Terintegrasi Islami",
      colSpan: "col-span-1 sm:col-span-2", // Mengambil 2 kolom agar lebih panjang
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-24 bg-[#0B1120] relative overflow-hidden font-sans border-t border-slate-800/50">
      
      {/* Ambient Light */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* BAGIAN KIRI: TEKS DESKRIPSI */}
          <div className="lg:col-span-5 fade-in-stats text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-yellow-400 shadow-sm mb-6 mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-amber-500 tracking-wide uppercase">
                Profil Singkat
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.2] tracking-tight mb-6">
              Membangun Fondasi <br />
              Karakter Sejak <br className="hidden lg:block"/>
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent font-black italic pb-2 pr-4 mt-1">
                Usia Dini
              </span>
            </h2>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
              SD Islam YPI Cordova mendedikasikan diri untuk menyediakan lingkungan yang merangsang rasa ingin tahu anak. Melalui pendekatan Islami yang terintegrasi dengan metode pembelajaran aktif, kami memastikan setiap anak tumbuh maksimal.
            </p>
          </div>

          {/* BAGIAN KANAN: BENTO GRID KARTU INFORMASI */}
          <div className="lg:col-span-7">
            
           
            {/* Kartu Utama (Nama Resmi) */}
                    <div className="fade-in-stats w-full bg-[#121A2A] rounded-2xl p-6 sm:p-8 border border-slate-800/80 mb-4 transition-all duration-500 hover:border-amber-500/40 hover:bg-[#151E2F] hover:shadow-[0_0_30px_rgba(245,158,11,0.06)] group relative overflow-hidden">
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                        <p className="text-slate-500 text-sm font-medium tracking-wider uppercase mb-1">
                            Nama Resmi
                        </p>
                        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                            SD Islam YPI Cordova
                        </h3>
                        </div>
                        
                        {/* Ikon Bangunan Sekolah */}
                        <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20 transition-all duration-500 group-hover:bg-amber-500/20 group-hover:border-amber-500/40">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        </div>
                    </div>

                    </div>

            {/* Grid 2 Kolom untuk Info Lainnya */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((item, index) => (
                <div 
                  key={index}
                  className={`fade-in-stats group bg-[#121A2A] rounded-xl p-6 border border-slate-800/80 transition-colors duration-500 hover:bg-[#151E2F] hover:border-amber-500/30 ${item.colSpan}`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 transition-colors duration-500 group-hover:bg-amber-500/10 group-hover:text-amber-500">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs sm:text-sm font-medium uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      <p className="text-white text-lg sm:text-xl font-bold">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* CSS Animasi Internal */}
      <style dangerouslySetInnerHTML={{__html: `
        .fade-in-stats {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade-in-stats.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}} />
    </section>
  );
}