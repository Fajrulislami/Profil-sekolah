"use client";

import { useState } from "react";
import Link from "next/link";

export default function BeritaCTA() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    setApiError(null);
    try {
      const response = await fetch('/api/v1/pesan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          senderName: "Pengunjung Web",
          email: email,
          subject: "Langganan Buletin",
          message: `Pengguna mendaftarkan email ${email} untuk berlangganan buletin pengumuman sekolah.`,
          type: "NEWSLETTER"
        }),
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail("");
      } else {
        const errorData = await response.json();
        setApiError(errorData.error || "Gagal berlangganan. Silakan coba lagi nanti.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setApiError("Terjadi kesalahan jaringan.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const newsletterBenefits = [
    {
      icon: (
        <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      label: "Pengumuman Resmi PPDB & Beasiswa",
    },
    {
      icon: (
        <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      label: "Jadwal Agenda & Kalender Akademik",
    },
    {
      icon: (
        <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      label: "Rangkuman Berita Prestasi Mingguan",
    },
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 bg-slate-50 font-sans border-t border-slate-200/80 overflow-hidden">
      
      {/* Animasi Background Lembut */}
      <div className="absolute -top-[40%] -right-[10%] w-[80%] h-[80%] rounded-[100%] bg-gradient-to-br from-emerald-100/60 to-transparent blur-3xl animate-[spin_60s_linear_infinite]" />
      <div className="absolute -bottom-[40%] -left-[10%] w-[70%] h-[70%] rounded-[100%] bg-gradient-to-tr from-amber-100/50 to-transparent blur-3xl animate-[spin_40s_linear_infinite_reverse]" />
      
      {/* Pola Titik Halus (Dot Grid) Sesuai Halaman Sebelumnya */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=')] opacity-60 [mask-image:linear-gradient(to_bottom,white,transparent_90%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Wadah Kartu Gelap Utama */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-[40px] bg-slate-900 border border-emerald-500/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] text-center relative overflow-hidden">
          
          {/* Glow ambient di dalam kartu */}
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

          {/* Titik-titik kecil melayang - Aksen dekoratif */}
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
            
            {/* Badge Kapsul Kuning/Emas Sesuai Guideline 3B */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-950/80 border border-amber-400/40 shadow-sm w-max mb-6 transition-all duration-500 hover:border-amber-400">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shrink-0 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wider uppercase">
                Buletin & Layanan Informasi
              </span>
            </div>

            {/* Judul Utama Gradien Emas */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6">
              Dapatkan Berita & Pengumuman Sekolah <br className="hidden sm:inline" />
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 pb-2">
                Terupdate Langsung ke Inbox Anda
              </span>
            </h2>

            {/* Deskripsi */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl font-medium">
              Jangan lewatkan informasi penting mengenai jadwal kegiatan siswa, prestasi terbaru, agenda seminar, dan pengumuman resmi penerimaan siswa baru.
            </p>

            {/* Benefit Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 w-full max-w-2xl text-left">
              {newsletterBenefits.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-xs font-bold text-slate-200"
                >
                  <div className="w-7 h-7 rounded-xl bg-slate-900 border border-amber-400/30 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="leading-snug">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Form Langganan Newsletter */}
            <div className="w-full max-w-md mb-8">
              {subscribed ? (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold">
                  Terima kasih! Anda berhasil berlangganan buletin informasi sekolah.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Masukkan alamat email Anda..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3.5 rounded-xl font-black text-sm transition-all duration-300 hover:-translate-y-0.5 shrink-0 ${
                      isSubmitting
                        ? "bg-amber-500/70 text-slate-950/70 cursor-not-allowed"
                        : "bg-amber-500 hover:bg-amber-400 text-slate-950 hover:shadow-[0_0_25px_rgba(251,191,36,0.3)]"
                    }`}
                  >
                    {isSubmitting ? "Memproses..." : "Berlangganan"}
                  </button>
                </form>
              )}
              
              {/* Alert Pengiriman Gagal */}
              {apiError && (
                <div className="mt-3 p-3 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm font-bold rounded-xl text-left flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                  {apiError}
                </div>
              )}
            </div>

            {/* Opsi Tambahan / Konsultasi Humas */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-slate-800/80 w-full text-xs text-slate-400 font-medium">
              <span>Butuh konfirmasi berita atau layanan humas?</span>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Humas%20Sekolah,%20saya%20ingin%20menanyakan%20informasi%20berita"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-bold transition-colors"
              >
                Hubungi Tim Humas Sekolah
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
