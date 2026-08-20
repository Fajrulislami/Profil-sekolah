"use client";

import { useEffect, useRef, useState } from "react";

export default function PrestasiRingkasan() {
  const [isVisible, setIsVisible] = useState(false);
  const [activePillar, setActivePillar] = useState(0);
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

  const pillars = [
    {
      id: "sains",
      icon: (
        <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Sains, Riset & Robotika",
      shortDesc: "Pembinaan kompetisi sains terpadu, riset energi terbarukan, dan rekayasa teknologi robotik.",
      stats: "52 Penghargaan",
      achievements: [
        "Medali Emas Olimpiade Sains Nasional (OSN) Bidang Fisika & Matematika",
        "Juara 1 International Islamic Robot Olympiad (Kategori Line Follower)",
        "Best Research Innovation pada LKTI Pelajar Tingkat Nasional",
      ],
      mentor: "Dr. Ir. Hendra Gunawan, M.T. & Tim Sains Madani",
      focusTags: ["OSN", "Robotika", "KIR", "Coding"],
    },
    {
      id: "keagamaan",
      icon: (
        <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Tahfidz & Keislaman",
      shortDesc: "Penguatan sanad tahfidz Al-Qur'an, musabaqah tilawatil qur'an, serta syarhil & fahmil qur'an.",
      stats: "44 Penghargaan",
      achievements: [
        "Juara 1 Musabaqah Hifdzil Qur'an (MHQ) 30 Juz Tingkat Internasional ASEAN",
        "Juara Umum Festival Kaligrafi Kontemporer Tingkat Nasional",
        "Juara 1 Pidato Bahasa Arab & Inggris Festival Pesantren Jawa Barat",
      ],
      mentor: "Ust. M. Ridwan Al-Hafidz & Majelis Asatidz",
      focusTags: ["MHQ 30 Juz", "Kaligrafi", "Debat Arab", "Syarhil"],
    },
    {
      id: "olahraga",
      icon: (
        <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Olahraga & Seni Beladiri",
      shortDesc: "Pengasahan ketahanan fisik, fokus, dan jiwa sportivitas melalui panahan, silat, basket, dan futsal.",
      stats: "38 Penghargaan",
      achievements: [
        "Medali Emas Kejuaraan Nasional Panahan Tradisional Horseback & Barebow",
        "Juara 1 Turnamen Futsal & Basket Antar-Pelajar Piala Gubernur",
        "Pesilat Terbaik Kejurda Pencak Silat Tapak Suci Kategori Tanding Putra",
      ],
      mentor: "Coach Rian S.Pd. (Pelatih Nasional Perpani)",
      focusTags: ["Panahan", "Pencak Silat", "Basket", "Futsal"],
    },
    {
      id: "literasi",
      icon: (
        <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "Literasi, Seni & Bahasa",
      shortDesc: "Wadah ekspresi kritis, penulisan esai, pidato diplomasi, dan seni desain visual kontemporer.",
      stats: "26 Penghargaan",
      achievements: [
        "Juara 1 Lomba Debat Bahasa Inggris (NSDC) Tingkat Provinsi",
        "Penulis Cerpen Terbaik Festival Literasi Generasi Emas Kemendikbud",
        "Juara 1 Poster Infografis Edukasi Lingkungan Hidup",
      ],
      mentor: "Siti Nurhaliza, M.Pd. & Komunitas Pena Rabbani",
      focusTags: ["English Debate", "Esai", "Desain Visual", "Kepenulisan"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#0B1120] text-white overflow-hidden"
    >
      {/* Background Lighting & Dot Texture */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-teal-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-texture-dots opacity-40 pointer-events-none" />

      {/* Boundary Soft Fades */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-slate-100 to-transparent opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 flex flex-col items-center">
          
          {/* Kapsul Identik Sesuai Aturan User */}
          <div 
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-400/40 shadow-sm w-max mb-6 transition-all duration-500 hover:border-amber-500/50"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shrink-0 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wide uppercase">
              Pilar Pembinaan & Ekosistem Juara
            </span>
          </div>

          {/* Judul dengan Typography Sesuai Aturan User */}
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Strategi Terpadu <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">
              Mengasah Potensi Tanpa Batas
            </span>
          </h2>

          <p
            className={`text-slate-300 text-sm sm:text-base leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Setiap capaian lahir dari kurikulum enrichment yang sistematis, bimbingan intensif dari mentor berstandar nasional, dan lingkungan asrama yang sarat nilai spiritual.
          </p>
        </div>

        {/* Interactive Pillar Selector */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {pillars.map((pillar, idx) => {
            const isActive = activePillar === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`p-4 md:p-5 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-br from-slate-800/95 to-slate-900/95 border-amber-400/80 shadow-[0_0_25px_rgba(251,191,36,0.15)]"
                    : "bg-slate-900/60 hover:bg-slate-800/80 border-slate-800 hover:border-slate-700 text-slate-300"
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 right-0 w-16 h-16 bg-amber-400/20 rounded-full blur-xl pointer-events-none" />
                )}
                <div className="mb-2 p-2 rounded-xl bg-slate-950/60 border border-slate-800/80 w-max group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <div className="font-bold text-sm md:text-base text-white group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </div>
                <div className="text-xs font-semibold text-amber-400 mt-1">
                  {pillar.stats}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detailed Spotlight */}
        <div
          className={`p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-900/90 border border-slate-800/80 shadow-2xl relative overflow-hidden transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Col: Info & Tags */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                  <span>Fokus Unggulan</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  {pillars[activePillar].title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {pillars[activePillar].shortDesc}
                </p>
              </div>

              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Bidang Pembinaan:
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {pillars[activePillar].focusTags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-800 border border-slate-700/60 text-slate-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-semibold">Dewan Pembina / Mentor</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-200">{pillars[activePillar].mentor}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: High Impact Achievements Showcase */}
            <div className="lg:col-span-7 bg-slate-950/70 p-6 sm:p-8 rounded-2xl border border-slate-800/80">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800">
                <span className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wide flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <span>Raihan Prestasi Terpilih</span>
                </span>
                <span className="text-xs font-bold text-slate-400 bg-slate-800/70 px-2.5 py-1 rounded-md">
                  {pillars[activePillar].stats}
                </span>
              </div>

              <div className="space-y-3.5">
                {pillars[activePillar].achievements.map((ach, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/70 hover:border-amber-400/40 hover:bg-slate-800/60 transition-all duration-300 flex items-start gap-3.5 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-950 border border-amber-400/40 flex items-center justify-center text-amber-400 font-black text-sm group-hover:scale-110 transition-transform">
                      {aIdx + 1}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white leading-relaxed">
                      {ach}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
