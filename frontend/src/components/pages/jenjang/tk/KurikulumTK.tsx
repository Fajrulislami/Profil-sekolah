"use client";

import { useEffect, useState, useRef } from "react";

export default function KurikulumTK() {
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

  const curriculumData = [
    {
      num: "01",
      title: "Nilai Agama & Moral",
      desc: "Pembentukan akhlak dasar melalui pembiasaan ibadah, penghafalan doa-doa harian, serta pengenalan nilai kebaikan.",
      examples: ["Hafalan doa", "Mengenal Al-Qur'an", "Praktik ibadah sederhana"],
    },
    {
      num: "02",
      title: "Pengembangan Bahasa",
      desc: "Mengasah kemampuan berkomunikasi, keberanian bercerita, serta stimulasi membaca & menulis awal secara menyenangkan.",
      examples: ["Berkomunikasi", "Bercerita", "Membaca awal"],
    },
    {
      num: "03",
      title: "Pengembangan Kognitif",
      desc: "Melatih daya pikir kritis dan logika anak melalui pengenalan angka, pola bentuk, serta eksperimen sains sederhana.",
      examples: ["Mengenal angka", "Mengenal bentuk", "Eksperimen sederhana"],
    },
    {
      num: "04",
      title: "Pengembangan Motorik & Seni",
      desc: "Mengoptimalkan ketangkasan fisik, koordinasi gerak tubuh, kreativitas seni, dan ekspresi imajinasi anak.",
      examples: ["Permainan fisik", "Seni & Kerajinan", "Kreativitas"],
    },
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 bg-slate-50 text-slate-900 overflow-hidden selection:bg-emerald-600 selection:text-white">
      
      {/* Atmosphere Glow & Dot Grid Pattern */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* ================================================= */}
        {/* HEADER SECTION: KAPSUL PUTIH & JUDUL TEBAL         */}
        {/* ================================================= */}
        <div className="mb-16">
          
          {/* BADGE KAPSUL PUTIH */}
          <div
            className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-emerald-400 shadow-sm mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">
                KURIKULUM
              </span>
            </div>
          </div>

          {/* JUDUL UTAMA TYPOGRAPHY ULTRA BOLD */}
          <h2
            className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15] transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            }`}
          >
            Standar Kualitas <br />
            <span className="text-emerald-600">Pendidikan Usia Dini</span>
          </h2>

        </div>

        {/* ================================================= */}
        {/* STATEMENT HIGHLIGHT BOX KURIKULUM                */}
        {/* ================================================= */}
        <div
          className={`transition-all duration-1000 delay-200 ease-out mb-20 lg:mb-28 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm">
            <div className="lg:col-span-3">
              <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest block">
                [ ORIENTASI BELAJAR ]
              </span>
            </div>

            <div className="lg:col-span-9">
              <blockquote className="text-xl sm:text-3xl font-extrabold text-slate-800 leading-snug tracking-tight">
                "Kurikulum dirancang holistik untuk menstimulasi{" "}
                <span className="text-emerald-600 underline decoration-emerald-400 decoration-4 underline-offset-4">
                  potensi unik anak
                </span>{" "}
                melalui pendekatan bermain sambil belajar yang interaktif dan bermakna."
              </blockquote>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* BAGIAN BIDANG PENGEMBANGAN (STICKY SIDEBAR)       */}
        {/* ================================================= */}
        <div>
          {/* Tambahkan items-start agar height grid kanan tidak memaksa height grid kiri */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* KOLOM KIRI: STICKY MENGIKUTI SCROLL KE BAWAH */}
            <div
              className={`lg:col-span-4 lg:sticky lg:top-28 self-start transition-all duration-1000 delay-300 ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
                EMPAT PILAR UTAMA
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                Bidang <br />
                <span className="text-emerald-600">Pengembangan</span>
              </h3>
              <p className="text-sm text-slate-600 font-normal leading-relaxed max-w-sm">
                Fokus pembelajaran terpadu untuk membentuk karakter, kecerdasan, dan ketangkasan fisik anak secara seimbang.
              </p>
            </div>

            {/* KOLOM KANAN: LIST CARD BIDANG PENGEMBANGAN */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {curriculumData.map((item, index) => (
                <div
                  key={index}
                  style={{ transitionDelay: `${index * 120 + 400}ms` }}
                  className={`p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.05)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-xl hover:border-emerald-500/40 group ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6">
                    
                    {/* NOMOR CHUNKY EXTRA BOLD */}
                    <div className="shrink-0">
                      <span className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
                        {item.num}
                      </span>
                    </div>

                    {/* DETAIL DESKRIPSI & ITEM CONTOH */}
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 font-normal leading-relaxed mb-4">
                        {item.desc}
                      </p>

                      {/* BADGE KEGIATAN KECIL */}
                      <div className="flex flex-wrap gap-2">
                        {item.examples.map((ex, exIndex) => (
                          <span
                            key={exIndex}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors duration-300"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors duration-300" />
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}