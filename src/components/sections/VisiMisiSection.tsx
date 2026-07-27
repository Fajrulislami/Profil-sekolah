"use client";

import { useEffect, useRef, useState } from "react";

export default function VisiMisiSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const misiList = [
    {
      id: 1,
      title: "Pendidikan Berkualitas",
      desc: "Menyelenggarakan pembelajaran terpadu yang memadukan sains modern dan ilmu agama secara seimbang.",
    },
    {
      id: 2,
      title: "Pembentukan Karakter",
      desc: "Membina akhlak mulia dan kedisiplinan melalui lingkungan pesantren yang kondusif.",
    },
    {
      id: 3,
      title: "Pengembangan Potensi",
      desc: "Memfasilitasi minat dan bakat siswa melalui berbagai kegiatan ekstrakurikuler unggulan.",
    },
    {
      id: 4,
      title: "Pengabagidan Masyarakat",
      desc: "Mencetak lulusan yang peduli, berjiwa sosial, dan bermanfaat bagi lingkungan sekitar.",
    },
  ];

  // 1. Memicu Animasi Masuk untuk Judul & Kartu Visi Utama
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      },
      { threshold: 0.15 } // Terpicu ketika 15% elemen masuk layar
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. Melacak Pergerakan Scroll Progress Garis Tengah (Dioptimasi dengan requestAnimationFrame)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = timelineRef.current!.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Memulai perhitungan saat section berada 70% dari atas layar viewport
          const startTrigger = windowHeight * 0.7; 
          const currentPos = startTrigger - rect.top;
          const totalHeight = rect.height;

          let progress = (currentPos / totalHeight) * 100;
          progress = Math.max(0, Math.min(100, progress)); // Batasi 0% - 100%
          
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Jalankan sekali di awal render
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Batas persentase scroll untuk memicu kemunculan masing-masing kartu misi
  const thresholds = [10, 35, 60, 85];

  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#0B1120] overflow-hidden">
      
      {/* Efek Gradasi Fade In / Out Lembut di Batas Atas & Bawah Section */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0B1120] via-[#0B1120]/80 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/80 to-transparent z-20 pointer-events-none"></div>

      {/* Tekstur Pola Grid Latar Belakang */}
      <div className="absolute inset-0 bg-texture-grid opacity-50 z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================= */}
        {/* BAGIAN UTAMA: JUDUL & VISI */}
        {/* ========================================= */}
        <div className="text-center mb-28" ref={headerRef}>
          
          {/* Animasi Teks Judul */}
          <div className={`transition-all duration-1000 ease-out transform ${
            isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Visi <span className="text-brand-accent">&</span> Misi
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-white/60 mb-20">
              Arah langkah dan komitmen kami dalam mencetak generasi penerus yang cerdas dan berkarakter.
            </p>
          </div>

          {/* Animasi Kartu Visi Utama (Efek Zoom-in Lembut dengan Delay) */}
          <div className={`relative inline-block max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-brand-primary border border-brand-primary/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-1000 delay-300 ease-out transform ${
            isHeaderVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-12"
          }`}>
            <svg aria-hidden="true" className="absolute -top-6 -left-6 w-12 h-12 text-brand-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <h3 className="text-2xl font-bold text-brand-accent mb-6 uppercase tracking-widest text-xs md:text-sm">
              Visi Utama
            </h3>
            <p className="text-xl md:text-3xl text-white leading-relaxed font-medium italic">
              "Menjadi institusi pendidikan Islam terkemuka yang mencetak generasi <span className="text-brand-accent font-bold not-italic">Rabbani</span>, <span className="text-brand-accent font-bold not-italic">cerdas berprestasi</span>, dan <span className="text-brand-accent font-bold not-italic">berakhlakul karimah</span>."
            </p>
          </div>
          
        </div>

        {/* ========================================= */}
        {/* BAGIAN BAWAH: KARTU MISI & TIMELINE */}
        {/* ========================================= */}
        <div className="relative" ref={timelineRef}>
          
          {/* Jalur Rel Garis Dasar (Mati/Redup) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1.5 bg-brand-primary/30 -translate-x-1/2 rounded-full"></div>
          
          {/* Garis Aktif (Berwarna Oranye dan Bergerak Mengikuti Scroll) */}
          <div 
            className="absolute left-4 md:left-1/2 top-0 w-1.5 bg-brand-accent -translate-x-1/2 rounded-full transition-all duration-300 shadow-[0_0_15px_#f59e0b]"
            style={{ height: `${scrollProgress}%` }}
          ></div>

          <div className="space-y-16 md:space-y-0 py-10">
            {misiList.map((misi, index) => {
              const isLeft = index % 2 === 0;
              const isVisible = scrollProgress >= thresholds[index];

              return (
                <div key={misi.id} className={`relative flex items-center w-full md:py-12 ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-start`}>
                  
                  {/* Titik Sensor Bulat Tengah (Menyala saat tersentuh progress) */}
                  <div 
                    className={`absolute left-4 md:left-1/2 w-7 h-7 rounded-full border-4 border-[#0B1120] -translate-x-1/2 z-10 transition-all duration-500 ${
                      isVisible 
                        ? "bg-brand-accent shadow-[0_0_20px_#f59e0b] scale-100" 
                        : "bg-brand-primary/50 scale-75"
                    }`}
                  ></div>

                  {/* Wadah Kartu Misi */}
                  <div 
                    className={`w-full ml-12 md:ml-0 md:w-[45%] transition-all duration-700 ease-out transform ${
                      isVisible 
                        ? "opacity-100 translate-x-0 translate-y-0" 
                        : `opacity-0 translate-y-12 ${isLeft ? 'md:-translate-x-12' : 'md:translate-x-12'}`
                    } ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}
                  >
                    
                    {/* Isi Konten Kartu Misi */}
                    <div className={`p-6 rounded-2xl border transition-all duration-500 group ${
                      isVisible 
                        ? "bg-brand-primary border-brand-accent/50 shadow-[0_15px_35px_rgba(0,0,0,0.3)]" 
                        : "bg-brand-primary/40 border-brand-primary/40"
                    }`}>
                      
                      <h4 className={`text-xl font-bold transition-colors ${isVisible ? "text-white" : "text-white/50"}`}>
                        <span className="text-brand-accent font-black mr-2">0{misi.id}.</span>
                        {misi.title}
                      </h4>
                      
                      <p className={`mt-3 text-sm md:text-base leading-relaxed transition-colors ${isVisible ? "text-white/90" : "text-white/30"}`}>
                        {misi.desc}
                      </p>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}