"use client";

import React, { useState, useEffect, useRef } from "react";

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
}

export default function ProfilPesantren() {
  const LEFT_PROFILES = [
    {
      id: "01",
      tag: "01 • USIA DIDIK",
      value: "4 – 6",
      unit: "Tahun",
      desc: "Fase Golden Age mendasar untuk melatih perkembangan sensorik, motorik, dan adab Islami secara hangat.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      id: "02",
      tag: "02 • DURASI BELAJAR",
      value: "2",
      unit: "Tahun Masa Studi",
      desc: "Masa studi terstruktur bertahap dari kelompok TK A hingga persiapan matang memasuki jenjang SD.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const RIGHT_PROFILES = [
    {
      id: "03",
      tag: "03 • KELOMPOK",
      value: "A & B",
      unit: "Tingkat Kelas",
      desc: "Pembagian rombel belajar yang disesuaikan secara presisi dengan tingkat kematangan usia anak.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      id: "04",
      tag: "04 • RASIO KELAS",
      value: "20",
      unit: "Siswa / Kelas",
      desc: "Jumlah murid dibatasi agar tiap anak mendapatkan perhatian dan bimbingan guru secara optimal.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#0B1120] text-slate-100 py-24 lg:py-32 overflow-hidden flex items-center">
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:28px_28px] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* SISI KIRI (POIN 01 & 02) */}
          <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
            {LEFT_PROFILES.map((item, idx) => (
              <ScrollReveal key={item.id} delay={idx * 150}>
                <div className="group relative p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/90 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-500/40 hover:bg-slate-900/90">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                      {item.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                      {item.value}
                    </span>
                    <span className="text-sm font-semibold text-amber-400/90">
                      {item.unit}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* SISI TENGAH (HEADER UTAMA) */}
          <div className="lg:col-span-4 flex flex-col items-center text-center order-1 lg:order-2 my-4 lg:my-0">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                Profil Pesantren
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Mengenal Lebih Dekat{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 block mt-1">
                  Pesantren Kami
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-slate-400 text-base leading-relaxed max-w-xs sm:max-w-sm">
                Lembaga pendidikan Islam terpadu yang berdedikasi melahirkan generasi beradab, berilmu, dan siap menjawab tantangan zaman.
              </p>
            </ScrollReveal>
          </div>

          {/* SISI KANAN (POIN 03 & 04) */}
          <div className="lg:col-span-4 flex flex-col gap-6 order-3">
            {RIGHT_PROFILES.map((item, idx) => (
              <ScrollReveal key={item.id} delay={idx * 150 + 200}>
                <div className="group relative p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/90 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-500/40 hover:bg-slate-900/90">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                      {item.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                      {item.value}
                    </span>
                    <span className="text-sm font-semibold text-amber-400/90">
                      {item.unit}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}