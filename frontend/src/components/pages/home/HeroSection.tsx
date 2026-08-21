"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const stats = [
    { id: 1, title: "Akreditasi A", desc: "Unggul & Terstandarisasi", progress: "100%" },
    { id: 2, title: "Terpadu", desc: "TK, SD, & SMP", progress: "100%" },
    { id: 3, title: "Pesantren", desc: "Pendidikan Agama & Asrama", progress: "100%" },
    { id: 4, title: "1.200+", desc: "Siswa & Santri Aktif", progress: "95%" },
  ];

  return (
    // PERHATIKAN DI SINI: Saya menambahkan rounded-b-[40px] lg:rounded-b-[80px]
    // Ini akan membuat bagian bawah Hero Section melengkung dengan mulus.
    // Ditambah shadow-2xl agar lengkungannya terlihat menonjol jika background bawahnya putih.
    <section className="relative w-full min-h-[90vh] flex items-center bg-[#0B1120] overflow-hidden pt-20 pb-24 rounded-b-[40px] lg:rounded-b-[80px] shadow-2xl z-10">
      
      {/* 1. BACKGROUND SPASIAL */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none border-dashed" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
         {/* 2. KOLOM KIRI: Visual Tengah & Panel Statistik "Melayang" */}
          <div className="relative w-full max-w-[800px] h-[500px] mx-auto hidden lg:flex items-center justify-center">
            
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes dash-flow {
                from { stroke-dashoffset: 20; }
                to { stroke-dashoffset: 0; }
              }
              .animate-path-flow {
                animation: dash-flow 0.8s linear infinite;
              }
              @keyframes draw-outward {
                0% { clip-path: circle(0% at 50% 50%); opacity: 0; }
                10% { opacity: 0.6; }
                100% { clip-path: circle(100% at 50% 50%); opacity: 0.6; }
              }
              .animate-draw-lines {
                animation: draw-outward 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                animation-delay: 500ms;
                opacity: 0;
              }
            `}} />

            {/* SVG GARIS MELIUK */}
            <svg viewBox="0 0 800 500" className="absolute inset-0 w-full h-full z-10 pointer-events-none animate-draw-lines">
              <path d="M 400 250 C 200 250, 200 60, 112 60" fill="none" stroke="white" strokeWidth="2" strokeDasharray="6 6" className="animate-path-flow" />
              <circle cx="112" cy="60" r="4" fill="#f59e0b" className="animate-pulse" />

              <path d="M 400 250 C 600 250, 600 120, 688 120" fill="none" stroke="white" strokeWidth="2" strokeDasharray="6 6" className="animate-path-flow" />
              <circle cx="688" cy="120" r="4" fill="#10b981" className="animate-pulse" />

              <path d="M 400 250 C 200 250, 200 380, 128 380" fill="none" stroke="white" strokeWidth="2" strokeDasharray="6 6" className="animate-path-flow" />
              <circle cx="128" cy="380" r="4" fill="#10b981" className="animate-pulse" />

              <path d="M 400 250 C 600 250, 600 460, 672 460" fill="none" stroke="white" strokeWidth="2" strokeDasharray="6 6" className="animate-path-flow" />
              <circle cx="672" cy="460" r="4" fill="#f59e0b" className="animate-pulse" />
            </svg>

           {/* Objek Tengah: Ikon Bumi 3D */}
          <div className="absolute z-20 w-32 h-32 bg-gradient-to-br from-[#0A3D2A]/90 to-brand-primary backdrop-blur-md border border-white/30 rounded-full shadow-2xl shadow-brand-primary/50 flex items-center justify-center animate-fade-in-up group cursor-pointer overflow-hidden">
          <svg 
            className="w-24 h-24 text-white group-hover:animate-[spin_4s_linear_infinite] transition-transform duration-500 ease-in-out drop-shadow-lg" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" fill="url(#earth3DGradient)" stroke="white" strokeWidth="0.5" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="white" strokeWidth="0.5" />
            <path d="M2 12h20" stroke="white" strokeWidth="0.5" />
            <path d="M4.5 7h15" stroke="white" strokeWidth="0.5" />
            <path d="M4.5 17h15" stroke="white" strokeWidth="0.5" />
            <defs>
              <radialGradient id="earth3DGradient" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
                <stop offset="70%" stopColor="#10b981" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#042f2e" stopOpacity="0.9" />
              </radialGradient>
            </defs>
          </svg>
          </div>

            {/* Panel Kiri Atas */}
            <div className="absolute top-8 left-0 z-30 w-56 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl shadow-black/20 animate-fade-in-up animation-delay-200 hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-white font-bold text-sm">{stats[0].title}</h4>
              <p className="text-brand-light/80 text-xs mt-1">{stats[0].desc}</p>
              <div className="w-full bg-black/20 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-brand-secondary h-full rounded-full" style={{ width: stats[0].progress }} />
              </div>
            </div>

            {/* Panel Kanan Atas */}
            <div className="absolute top-24 right-0 z-30 w-56 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl shadow-black/20 animate-fade-in-up animation-delay-300 hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-white font-bold text-sm">{stats[1].title}</h4>
              <p className="text-brand-light/80 text-xs mt-1">{stats[1].desc}</p>
              <div className="w-full bg-black/20 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-brand-accent h-full rounded-full" style={{ width: stats[1].progress }} />
              </div>
            </div>

            {/* Panel Kiri Bawah */}
            <div className="absolute bottom-24 left-4 z-30 w-56 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl shadow-black/20 animate-fade-in-up animation-delay-500 hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-white font-bold text-sm">{stats[2].title}</h4>
              <p className="text-brand-light/80 text-xs mt-1">{stats[2].desc}</p>
              <div className="w-full bg-black/20 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-brand-secondary h-full rounded-full" style={{ width: stats[2].progress }} />
              </div>
            </div>

            {/* Panel Kanan Bawah */}
            <div className="absolute bottom-4 right-4 z-30 w-56 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl shadow-black/20 animate-fade-in-up animation-delay-700 hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-white font-bold text-sm">{stats[3].title}</h4>
              <p className="text-brand-light/80 text-xs mt-1">{stats[3].desc}</p>
              <div className="w-full bg-black/20 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-brand-accent h-full rounded-full" style={{ width: stats[3].progress }} />
              </div>
            </div>
          </div>

          {/* 3. KOLOM KANAN: Teks Utama & Call to Action */}
          <div className="flex flex-col justify-center text-left">
            <h1 className="mt-8 md:mt-12 animate-fade-in-up animation-delay-100 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Membentuk Generasi <br />
              <span className="text-brand-accent">Cerdas</span>, Berkarakter, <br />
              & Berakhlakul Karimah
            </h1>

            <p className="animate-fade-in-up animation-delay-200 mt-6 text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
              Website Resmi Institusi Pendidikan Terpadu, Menyelenggarakan pendidikan formal dari jenjang TK, SD, & SMP yang terintegrasi dengan pembinaan karakter Islami di Pondok Pesantren.
            </p>

            <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/ppdb" className="w-full sm:w-auto">
                <Button 
                  variant="accent" 
                  size="lg" 
                  className="w-full sm:w-auto shadow-lg shadow-brand-accent/20"
                >
                  Informasi Pendaftaran Baru
                </Button>
              </Link>
              
              <Link href="/tentang" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto !border-white/20 !text-white hover:!bg-white/10"
                >
                  Kenali Lebih Dekat
                </Button>
              </Link>
            </div>

            {/* Fallback Mobile Stats */}
            <div className="mt-12 grid grid-cols-2 gap-3 lg:hidden animate-fade-in-up animation-delay-500">
               {stats.map((stat) => (
                 <div key={stat.id} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm">{stat.title}</h4>
                    <p className="text-gray-400 text-xs mt-1">{stat.desc}</p>
                 </div>
               ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}