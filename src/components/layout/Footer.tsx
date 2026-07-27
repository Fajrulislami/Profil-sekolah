"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // State dan Ref untuk Animasi Scroll
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Animasi terpicu saat 10% footer terlihat
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer 
      ref={footerRef} 
      className="bg-[#0B1120] text-slate-300 relative overflow-hidden pt-20 pb-8"
    >
      {/* Efek Cahaya Halus di Latar Belakang */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Konten Utama Footer - Terbungkus dalam div animasi */}
      <div 
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* ========================================= */}
          {/* KOLOM KIRI: PROFIL & SOSMED (4 Kolom) */}
          {/* ========================================= */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Logo Singkat */}
              <Link href="/" className="inline-block group">
                <h2 className="text-3xl font-black text-white tracking-tight">
                  Sekolah<span className="text-gradient-accent group-hover:text-white transition-colors">Madani</span>
                </h2>
              </Link>
              
              <p className="text-slate-400 text-sm leading-relaxed pr-4">
                Mencetak generasi cerdas, berakhlak mulia, dan siap menghadapi tantangan global dengan landasan keimanan yang kokoh. Bersama kami, merajut masa depan gemilang.
              </p>

              {/* Info Kontak Ringkas */}
              <div className="space-y-2 pt-2">
                <p className="text-sm font-medium text-slate-400">
                  <span className="text-brand-accent mr-2">☏</span> +62 812-3456-7890
                </p>
                <p className="text-sm font-medium text-slate-400">
                  <span className="text-brand-accent mr-2">✉</span> info@sekolahmadani.sch.id
                </p>
              </div>
            </div>

            {/* Ikon Sosmed - Dipindah ke Kiri Bawah Sesuai Referensi Gambar */}
            <div className="mt-8 flex gap-4">
                {/* Facebook */}
                <a 
                    href="#" 
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 shadow-sm"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                </a>

                {/* Instagram */}
                <a 
                    href="#" 
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all duration-300 shadow-sm"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                </a>

                {/* YouTube */}
                <a 
                    href="#" 
                    aria-label="YouTube"
                    className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300 shadow-sm"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                </a>
                </div>
          </div>

          {/* ========================================= */}
          {/* KOLOM TENGAH: TAUTAN CEPAT (3 Kolom) */}
          {/* ========================================= */}
          <div className="md:col-span-5 lg:col-span-3 lg:pl-8 space-y-6">
            <h3 className="text-base font-bold text-white tracking-wide uppercase">Tautan Cepat</h3>
            <ul className="space-y-4">
              {[
                { name: 'Tentang Kami', path: '/tentang' },
                { name: 'Program Akademik', path: '/akademik' },
                { name: 'Fasilitas Sekolah', path: '/fasilitas' },
                { name: 'Prestasi Siswa', path: '/prestasi' },
                { name: 'Informasi PPDB', path: '/ppdb' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path}
                    className="text-slate-400 text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================= */}
          {/* KOLOM KANAN: GOOGLE MAPS (5 Kolom) */}
          {/* ========================================= */}
          <div className="md:col-span-7 lg:col-span-5 space-y-6">
            <h3 className="text-base font-bold text-white tracking-wide uppercase">Lokasi Kami</h3>
            
            {/* Wadah Peta */}
            <div className="w-full h-48 sm:h-52 rounded-xl overflow-hidden border border-slate-700/50 shadow-lg relative group">
              <div className="absolute inset-0 bg-transparent z-10 group-hover:pointer-events-none transition-all"></div>
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24083610087!2d106.7456722!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x100c5e82dd4b820!2sJakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              ></iframe>
            </div>
            
            <p className="text-xs text-slate-500 leading-relaxed">
              *Arahkan kursor atau sentuh peta untuk mendapatkan rute langsung via Google Maps.
            </p>
          </div>

        </div>

        {/* ========================================= */}
        {/* BAGIAN BAWAH (COPYRIGHT BAR) */}
        {/* ========================================= */}
        <div className="mt-16 pt-6 border-t border-slate-700/80 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Format sebaris dengan pemisah ( | ) sesuai referensi gambar */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-2 text-xs text-slate-500 font-medium">
            <span>© {currentYear} Sekolah Madani. Hak Cipta Dilindungi.</span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span>Didesain dengan sepenuh hati</span>
          </div>
          
        </div>

      </div>
    </footer>
  );
}