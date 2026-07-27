"use client";

import { useEffect } from "react";

export default function ProgramUnggulan() {
  
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

    const elements = document.querySelectorAll(".fade-in-program");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      title: "Tahfidz & Adab Islami",
      desc: "Pembiasaan hafalan Al-Qur'an metode ceria dan penanaman adab harian sesuai sunnah sejak usia dini.",
      image: "https://images.unsplash.com/photo-1609599006353-e629aaab31ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "STEM & Coding Kids",
      desc: "Mengenalkan logika pemrograman dasar, sains, dan robotika sederhana untuk mengasah nalar kritis.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Bilingual Habit",
      desc: "Lingkungan berbahasa Inggris dan Arab dasar dalam komunikasi harian sekolah untuk wawasan global.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Leadership & Outbound",
      desc: "Melatih kepemimpinan, kerja sama tim, dan kemandirian melalui proyek kelas serta kegiatan alam terbuka.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-24 bg-[#0B1120] relative overflow-hidden font-sans border-t border-slate-800/50">
      
      {/* Ambient Light Latar Belakang */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] -translate-x-1/4 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="fade-in-program flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            
            {/* KAPSUL IDENTIK */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-500/30 shadow-sm mb-6 transition-all duration-500 hover:border-amber-500/50">
              <span className="flex h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-amber-500 tracking-wide uppercase">
                Program Unggulan
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.25] tracking-tight">
              Kurikulum Eksklusif Untuk <br className="hidden md:block" />
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent font-black italic pb-2 pr-4 mt-2">
                Potensi Terbaik Ananda
              </span>
            </h2>
          </div>
          
          <p className="text-slate-400 text-base md:text-lg max-w-md leading-relaxed pb-2 font-light">
            Dirancang secara khusus memadukan ilmu pengetahuan modern dan pembentukan akhlak untuk pengalaman belajar yang komprehensif.
          </p>
        </div>

        {/* EXPANDABLE CARDS */}
        <div className="fade-in-program flex flex-col lg:flex-row gap-4 h-[750px] lg:h-[520px] w-full">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl flex-1 lg:hover:flex-[2.8] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer border border-slate-800/80 hover:border-amber-500/40 bg-[#121A2A]"
            >
              {/* Gambar Latar */}
              <img 
                src={program.image} 
                alt={program.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-30 group-hover:opacity-75 mix-blend-luminosity group-hover:mix-blend-normal"
                loading="lazy"
              />
              
              {/* Overlay Gradasi Hitam Pekat di Bagian Bawah */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/70 to-transparent"></div>
              
              {/* Kilauan Cahaya saat Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              {/* KONTEN TEKS (Mengunci ke Dasar Bawah Kartu) */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end z-10">
                
                {/* Ikon SVG Konsisten */}
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 transition-all duration-500 group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:border-amber-500/50 shrink-0">
                  {program.icon}
                </div>
                
                {/* Judul Program */}
                <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400 leading-snug mb-2">
                  {program.title}
                </h3>
                
                {/* Deskripsi Tambahan saat Melebar (Desktop) */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed opacity-0 max-h-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-out hidden lg:block overflow-hidden">
                  {program.desc}
                </p>

                {/* Deskripsi Mobile */}
                <p className="text-slate-400 text-sm leading-relaxed lg:hidden line-clamp-2">
                  {program.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* CSS Animasi */}
      <style dangerouslySetInnerHTML={{__html: `
        .fade-in-program {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade-in-program.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}} />
    </section>
  );
}