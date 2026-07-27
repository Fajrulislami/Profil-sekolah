"use client";

import { useEffect, useRef, useState } from "react";

const sejarahData = [
  {
    id: 1,
    year: "1990",
    title: "Gagasan & Awal Mula",
    desc: "Berawal dari kepedulian tokoh masyarakat setempat terhadap minimnya fasilitas pendidikan berbasis agama yang modern. Di tahun ini, peletakan batu pertama dilakukan dengan dana swadaya dan semangat gotong royong.",
  },
  {
    id: 2,
    year: "2005",
    title: "Perkembangan Pesat",
    desc: "Sekolah mulai membuka jenjang pendidikan menengah atas dan membangun asrama santri. Kurikulum mulai memadukan standar nasional dengan pendidikan pesantren, menarik minat siswa dari luar daerah.",
  },
  {
    id: 3,
    year: "2015",
    title: "Era Digitalisasi",
    desc: "Transformasi besar-besaran dilakukan. Mulai dari laboratorium komputer mutakhir hingga perpustakaan digital. Kami memastikan para siswa tidak hanya kuat iman, tapi juga melek teknologi.",
  },
  {
    id: 4,
    year: "Sekarang",
    title: "Menuju Masa Depan",
    desc: "Kini, kami bangga telah meluluskan ribuan alumni yang tersebar di berbagai universitas terbaik. Komitmen kami tetap sama: mencetak generasi Rabbani yang cerdas dan berakhlak mulia.",
  },
];

export default function SejarahSection() {
  const [activeEra, setActiveEra] = useState<number>(1);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (textRefs.current.length === 0) return;

          const triggerPoint = 200; 
          let currentActiveId = 1;

          for (let i = 0; i < textRefs.current.length; i++) {
            const el = textRefs.current[i];
            if (!el) continue;

            const rect = el.getBoundingClientRect();
            if (rect.top <= triggerPoint) {
              currentActiveId = Number(el.getAttribute("data-id"));
            }
          }

          setActiveEra(currentActiveId);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        
        {/* Judul Section Utama */}
        <div className="text-center mb-24">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-emerald-300 shadow-sm shadow-emerald-100/50 text-emerald-700 text-xs font-semibold tracking-wider uppercase mb-5">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-emerald-600 tracking-wide uppercase">
              Sejarah
            </span>
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0B1120] tracking-tight">
            Jejak Langkah
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
          
          {/* ========================================= */}
          {/* KOLOM KIRI: GAMBAR STICKY */}
          {/* ========================================= */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-36 h-[50vh] lg:h-[65vh] rounded-3xl overflow-hidden relative shadow-2xl transition-all duration-700 group z-10">
            
            <div className="absolute inset-0 bg-[#9EB3A8] transition-colors duration-700"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
              <svg className="w-20 h-20 mb-6 opacity-70 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
              <p className="text-sm font-semibold tracking-widest uppercase opacity-80">
                [ Area Foto Sejarah ]
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B1120]/90 to-transparent p-8">
              <div className="flex items-baseline gap-4 text-white">
                <span className="text-5xl lg:text-7xl font-black text-gradient-accent drop-shadow-lg transition-all duration-500 inline-block">
                  {sejarahData.find((d) => d.id === activeEra)?.year}
                </span>
              </div>
            </div>

          </div>

          {/* ========================================= */}
          {/* KOLOM KANAN: TEKS PARAGRAF (TANPA GARIS) */}
          {/* ========================================= */}
          <div className="w-full lg:w-7/12 pb-[20vh] lg:pb-[40vh]">
            {sejarahData.map((data, index) => {
              const isActive = activeEra === data.id;
              
              return (
                <div 
                  key={data.id}
                  data-id={data.id}
                  ref={(el) => {
                    textRefs.current[index] = el;
                  }}
                  className={`py-16 lg:py-24 first:pt-0 transition-all duration-700 ease-out ${
                    isActive ? "opacity-100 scale-100" : "opacity-25 scale-95"
                  }`}
                >
                  {/* PERBAIKAN: Garis horizontal dihapus, diganti Badge Pill Tahun yang minimalis */}
                  <div className="mb-6">
                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-extrabold tracking-wider transition-all duration-500 ${
                      isActive 
                        ? 'bg-brand-accent/15 text-brand-accent shadow-sm' 
                        : 'bg-slate-200/60 text-slate-400'
                    }`}>
                      {data.year}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#0B1120] mb-6 leading-tight">
                    {data.title}
                  </h3>
                  
                  <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                    {data.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}