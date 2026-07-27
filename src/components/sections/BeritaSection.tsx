"use client";

import { useEffect, useRef, useState } from "react";

export default function BeritaSection() {
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

  const beritaData = [
    {
      id: 1,
      kategori: "Akademik",
      tanggal: "12 Juli 2026",
      title: "Penerapan Kurikulum Berbasis Proyek (PBL) Sukses Tingkatkan Kritis Siswa",
      desc: "Evaluasi semester menunjukkan peningkatan signifikan pada kemampuan problem-solving siswa berkat metode pembelajaran baru.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      kategori: "Event Sekolah",
      tanggal: "08 Juli 2026",
      title: "Pekan Olahraga dan Seni (PORSENI) 2026 Berjalan Meriah",
      desc: "Ribuan siswa dan orang tua antusias mengikuti rangkaian acara PORSENI yang ditutup dengan pentas seni spektakuler.",
      image: "https://images.unsplash.com/photo-1511516171890-50d4f164de85?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      kategori: "Pengumuman",
      tanggal: "05 Juli 2026",
      title: "Informasi Pendaftaran Ulang & Pengambilan Seragam Tahun Ajaran Baru",
      desc: "Bagi seluruh siswa baru, jadwal pendaftaran ulang dan pengukuran seragam akan dilaksanakan mulai pekan depan.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-[#0B1120] py-24 lg:py-32 relative overflow-hidden font-sans border-t border-slate-800/50">
      
      {/* Efek Pendar Latar Belakang (Golden Ambient) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* HEADER: Split Layout (Kiri Judul, Kanan Tombol)            */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            
            {/* KAPSUL IDENTIK (Perbaikan: Ditambahkan w-max & disesuaikan untuk Dark Mode) */}
            <div 
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-400/40 shadow-sm w-max mb-6 transition-all duration-500 hover:border-amber-500/50"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shrink-0 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wide uppercase">
                Jendela Informasi
              </span>
            </div>

            {/* Judul dengan Font Gradient Accent */}
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] transform transition-all duration-700 delay-150 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Berita & Artikel <br />
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent font-black italic pb-2 pr-4 mt-1">
                Terbaru.
              </span>
            </h2>
          </div>
          
          {/* Tombol CTA Atas */}
          <div className={`transform transition-all duration-700 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            <a 
              href="/berita" 
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] transition-all duration-300 group hover:-translate-y-0.5"
            >
              Lihat Semua Berita
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* ========================================================= */}
        {/* GRID BERITA: KARTU BG PUTIH DENGAN EFEK HOVER             */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {beritaData.map((berita, index) => (
            <article 
              key={berita.id}
              className={`group flex flex-col bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xl transition-all duration-500 ease-out hover:shadow-[0_0_30px_rgba(245,158,11,0.22)] hover:border-amber-400/80 cursor-pointer transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${400 + (index * 150)}ms` }}
            >
              
              {/* Thumbnail Gambar */}
              <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                <img 
                  src={berita.image} 
                  alt={berita.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Badge Kategori Kontras di Atas Gambar */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-[#0B1120]/90 border border-amber-500/30 backdrop-blur-md rounded-lg shadow-md">
                    {berita.kategori}
                  </span>
                </div>
              </div>

              {/* Konten Teks Pada Latar Belakang Putih */}
              <div className="p-6 md:p-8 flex flex-col flex-grow bg-white">
                <time className="text-xs font-bold text-amber-600 mb-3 block">
                  {berita.tanggal}
                </time>
                
                <h3 className="text-xl font-bold text-slate-800 leading-snug mb-3 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                  {berita.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal line-clamp-3 flex-grow">
                  {berita.desc}
                </p>
                
                {/* Link Baca Selengkapnya */}
                <div className="mt-auto flex items-center text-sm font-bold text-amber-600 group-hover:text-amber-700 transition-colors duration-300">
                  Baca Selengkapnya
                  <svg 
                    className="w-4 h-4 ml-1.5 transform transition-transform duration-500 ease-out group-hover:translate-x-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              
              {/* Garis Bawah Aksen Gradasi (Draw-line di bagian bawah kartu) */}
              <div className="h-1.5 w-0 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-500 ease-out group-hover:w-full"></div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}