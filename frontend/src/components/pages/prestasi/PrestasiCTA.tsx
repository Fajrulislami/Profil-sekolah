"use client";

import Link from "next/link";

export default function PrestasiCTA() {
  const scholarshipFeatures = [
    {
      icon: (
        <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      label: "Beasiswa Penuh Tahfidz 30 Juz",
    },
    {
      icon: (
        <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      label: "Jalur Bebas Tes Juara OSN & O2SN",
    },
    {
      icon: (
        <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      label: "Mentoring Intensif Dosen & Ahli",
    },
    {
      icon: (
        <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Dukungan Penuh Lomba Internasional",
    },
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 bg-white overflow-hidden font-sans">
      
      {/* Animasi Background Lembut */}
      <div className="absolute -top-[40%] -right-[10%] w-[80%] h-[80%] rounded-[100%] bg-gradient-to-br from-emerald-100/60 to-transparent blur-3xl animate-[spin_60s_linear_infinite]" />
      <div className="absolute -bottom-[40%] -left-[10%] w-[70%] h-[70%] rounded-[100%] bg-gradient-to-tr from-amber-100/50 to-transparent blur-3xl animate-[spin_40s_linear_infinite_reverse]" />
      
      {/* Pattern Titik Halus */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=')] opacity-70 [mask-image:linear-gradient(to_bottom,white,transparent_80%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card Gelap Utama */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-[40px] bg-slate-900 border border-emerald-500/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] text-center relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />

          {/* ====== ANIMASI 3D GEOMETRIS ====== */}
          <style>{`
            @keyframes float3d-1 {
              0%, 100% { transform: perspective(800px) rotateX(25deg) rotateY(0deg) translateY(0px); }
              50% { transform: perspective(800px) rotateX(-15deg) rotateY(180deg) translateY(-30px); }
            }
            @keyframes float3d-2 {
              0%, 100% { transform: perspective(600px) rotateY(0deg) rotateZ(0deg) translateY(0px) scale(1); }
              33% { transform: perspective(600px) rotateY(120deg) rotateZ(45deg) translateY(-20px) scale(1.1); }
              66% { transform: perspective(600px) rotateY(240deg) rotateZ(-30deg) translateY(10px) scale(0.95); }
            }
            @keyframes float3d-3 {
              0%, 100% { transform: perspective(700px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateY(0); }
              25% { transform: perspective(700px) rotateX(30deg) rotateY(90deg) rotateZ(15deg) translateY(-25px); }
              50% { transform: perspective(700px) rotateX(-20deg) rotateY(180deg) rotateZ(-10deg) translateY(5px); }
              75% { transform: perspective(700px) rotateX(10deg) rotateY(270deg) rotateZ(20deg) translateY(-15px); }
            }
            @keyframes float3d-4 {
              0%, 100% { transform: perspective(900px) rotateY(0deg) translateY(0) scale(1); }
              50% { transform: perspective(900px) rotateY(180deg) translateY(-35px) scale(1.08); }
            }
            @keyframes ring-orbit {
              0% { transform: perspective(500px) rotateX(60deg) rotateZ(0deg); }
              100% { transform: perspective(500px) rotateX(60deg) rotateZ(360deg); }
            }
          `}</style>

          {/* Kubus 3D Kecil - Kiri Atas */}
          <div
            className="absolute top-12 left-10 w-14 h-14 border-2 border-emerald-500/20 rounded-xl pointer-events-none"
            style={{ animation: 'float3d-1 12s ease-in-out infinite', transformStyle: 'preserve-3d' }}
          />

          {/* Segi Enam 3D - Kanan Atas */}
          <div
            className="absolute top-16 right-14 w-10 h-10 border-2 border-amber-400/25 rounded-lg pointer-events-none"
            style={{ animation: 'float3d-2 15s ease-in-out infinite', transformStyle: 'preserve-3d' }}
          />

          {/* Kubus 3D Besar - Kiri Bawah */}
          <div
            className="absolute bottom-20 left-16 w-20 h-20 border-2 border-teal-400/15 rounded-2xl pointer-events-none"
            style={{ animation: 'float3d-3 18s ease-in-out infinite', transformStyle: 'preserve-3d' }}
          />

          {/* Kubus 3D Medium - Kanan Bawah */}
          <div
            className="absolute bottom-12 right-12 w-12 h-12 border-2 border-emerald-400/20 rounded-xl pointer-events-none"
            style={{ animation: 'float3d-4 14s ease-in-out infinite', transformStyle: 'preserve-3d' }}
          />

          {/* Ring Orbital Berputar - Tengah Atas */}
          <div
            className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-24 border-2 border-amber-400/10 rounded-full pointer-events-none"
            style={{ animation: 'ring-orbit 20s linear infinite' }}
          />

          {/* Titik-titik kecil melayang */}
          <div
            className="absolute top-1/3 left-[15%] w-2 h-2 bg-emerald-400/30 rounded-full pointer-events-none"
            style={{ animation: 'float3d-1 8s ease-in-out infinite' }}
          />
          <div
            className="absolute top-1/2 right-[18%] w-1.5 h-1.5 bg-amber-400/30 rounded-full pointer-events-none"
            style={{ animation: 'float3d-2 10s ease-in-out infinite' }}
          />
          <div
            className="absolute bottom-1/3 left-[22%] w-2.5 h-2.5 bg-teal-400/20 rounded-full pointer-events-none"
            style={{ animation: 'float3d-3 9s ease-in-out infinite' }}
          />

          <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">

            
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-950/80 border border-amber-400/40 shadow-sm w-max mb-6 transition-all duration-500 hover:border-amber-500/80">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shrink-0 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wide uppercase">
                Penerimaan Siswa & Santri Baru
              </span>
            </div>

            {/* PERBAIKAN DI SINI: Headline */}
            {/* Mengubah leading-tight menjadi leading-[1.3] (sedikit lebih longgar) */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.3] mb-6">
              Siap Mengukir Prestasimu & <br />
              {/* Menambahkan inline-block, pb-2, dan pr-2 agar huruf 'j', 'y', dan huruf miring tidak terpotong di ujung */}
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 italic pb-2 pr-2">
                Menjadi Juara Berikutnya?
              </span>
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
              Bergabunglah bersama keluarga besar Sekolah Madani & Pesantren Rabbani. Kami menyediakan ekosistem pembinaan bakat terbaik, asrama yang kondusif, dan program beasiswa berprestasi.
            </p>

            {/* Benefit Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 w-full max-w-xl text-left">
              {scholarshipFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-amber-400/30 transition-all duration-300 text-xs font-semibold text-slate-200 hover:bg-slate-900"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-amber-400/30 flex items-center justify-center shrink-0">
                    {feat.icon}
                  </div>
                  <span>{feat.label}</span>
                </div>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full">
              <Link
                href="/#kontak"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>Daftar PPDB Sekarang</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <a
                href="https://wa.me/6281234567890?text=Halo%20Admin%20Sekolah%20Madani,%20saya%20ingin%20konsultasi%20jalur%20prestasi%20dan%20beasiswa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-sm sm:text-base border border-slate-700 hover:border-slate-600 shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2z" />
                </svg>
                <span>Konsultasi Jalur Prestasi</span>
              </a>
            </div>

            {/* Info Note */}
            <div className="mt-8 text-xs text-slate-400 flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Layanan informasi & verifikasi berkas buka setiap hari kerja (08.00 - 16.00 WIB)</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}