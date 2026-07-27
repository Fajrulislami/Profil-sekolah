"use client";

import { useEffect, useRef, useState } from "react";

export default function LegalitasSection() {
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

  const legalData = [
    {
      title: "Akreditasi",
      value: "Peringkat A (Unggul)",
      desc: "Badan Akreditasi Nasional",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "NPSN",
      value: "69991234",
      desc: "Nomor Pokok Sekolah Nasional",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      )
    },
    {
      title: "Status Sekolah",
      value: "Swasta Terdaftar",
      desc: "Kementerian Pendidikan & Kebudayaan",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Izin Operasional",
      value: "SK. No. 420/123/Disdik/2020",
      desc: "Dinas Pendidikan Provinsi",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Yayasan Pengelola",
      value: "Yayasan Pendidikan Madani",
      desc: "SK Menkumham RI No. AHU-12345",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Kurikulum",
      value: "Kurikulum Merdeka & Islam Terpadu",
      desc: "Integrasi Sains dan Diniyah",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="w-full bg-slate-50 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-emerald-300 shadow-sm shadow-emerald-100/50 text-emerald-700 text-xs font-semibold tracking-wider uppercase mb-5">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-emerald-600 tracking-wide uppercase">
              Legalitas & Standar Mutu
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0B1120] tracking-tight">
            Akreditasi & <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Identitas Resmi</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
            Komitmen kami dalam menyelenggarakan pendidikan yang profesional, diakui negara, dan memenuhi standar mutu nasional.
          </p>
        </div>

        {/* Grid Cards Berdimensi Jelas & Animasi Sorot Terfokus */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {legalData.map((item, index) => (
            <div 
              key={index}
              style={{ 
                transitionDelay: isVisible ? `${index * 80}ms` : "0ms" 
              }}
              className={`bg-white p-8 rounded-3xl border border-slate-200/60 shadow-md shadow-slate-100/80 flex flex-col justify-between transform transition-all duration-300 ease-out group
                hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div>
                {/* Kotak Logo: Hanya bagian ini yang berubah jadi warna Kuning Aksentuasi saat hover */}
                <div className="w-12 h-12 rounded-2xl bg-slate-50 text-brand-primary border border-slate-100 flex items-center justify-center mb-6 transition-all duration-300 
                  group-hover:bg-brand-accent group-hover:text-white group-hover:scale-105 group-hover:rotate-3 group-hover:border-transparent">
                  {item.icon}
                </div>
                
                {/* Teks Tetap Stabil & Terbaca Jelas */}
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="text-xl font-black text-[#0B1120] mb-2 leading-tight">
                  {item.value}
                </p>
              </div>

              <p className="text-sm text-slate-500 font-medium leading-relaxed mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}