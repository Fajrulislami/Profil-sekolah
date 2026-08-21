"use client";

import { useState } from "react";

export default function PPDBCTA() {
  const [formData, setFormData] = useState({
    studentName: "",
    jenjang: "SD",
    parentName: "",
    whatsapp: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.studentName && formData.whatsapp) {
      setSubmitted(true);
    }
  };

  return (
    <section id="formulir" className="relative w-full py-24 lg:py-32 bg-slate-50 font-sans border-t border-slate-200/80 overflow-hidden">
      
      {/* Animasi Background Lembut */}
      <div className="absolute -top-[40%] -right-[10%] w-[80%] h-[80%] rounded-[100%] bg-gradient-to-br from-emerald-100/60 to-transparent blur-3xl animate-[spin_60s_linear_infinite]" />
      <div className="absolute -bottom-[40%] -left-[10%] w-[70%] h-[70%] rounded-[100%] bg-gradient-to-tr from-amber-100/50 to-transparent blur-3xl animate-[spin_40s_linear_infinite_reverse]" />
      
      {/* Pola Titik Halus (Dot Grid) */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=')] opacity-60 [mask-image:linear-gradient(to_bottom,white,transparent_90%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Wadah Kartu Gelap Utama */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-[40px] bg-slate-900 border border-emerald-500/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] text-center relative overflow-hidden">
          
          {/* Ambient Glow di dalam kartu */}
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

          {/* Ring Orbital Berputar */}
          <div
            className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-24 border-2 border-amber-400/10 rounded-full pointer-events-none"
            style={{ animation: 'ring-orbit 20s linear infinite' }}
          />

          <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
            
            {/* Badge Kapsul Kuning/Emas Sesuai Guideline 3B */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-950/80 border border-amber-400/40 shadow-sm w-max mb-6 transition-all duration-500 hover:border-amber-400">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shrink-0 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wider uppercase">
                Pendaftaran & Konsultasi Langsung
              </span>
            </div>

            {/* Judul Utama Gradien Emas */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6">
              Siap Mendaftarkan Putra-Putri Anda? <br className="hidden sm:inline" />
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 pb-2">
                Amankan Kursi Sekarang
              </span>
            </h2>

            {/* Deskripsi */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl font-medium">
              Isi data awal di bawah ini untuk memulai registrasi online atau hubungi panitia PPDB kami untuk pendampingan berkas secara langsung.
            </p>

            {/* Formulir Registrasi Awal */}
            <div className="w-full max-w-lg mb-8">
              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                    ✓
                  </div>
                  <h4 className="text-lg font-black text-white mb-2">Formulir Berhasil Dikirim!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Terima kasih Bapak/Ibu. Tim Panitia PPDB akan segera menghubungi nomor WhatsApp Anda untuk konfirmasi jadwal observasi.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 rounded-3xl bg-slate-950/70 border border-slate-800 flex flex-col gap-4 text-left">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1.5">Nama Lengkap Calon Siswa</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Muhammad Rayhan"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1.5">Jenjang Pilihan</label>
                      <select
                        value={formData.jenjang}
                        onChange={(e) => setFormData({ ...formData, jenjang: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 transition-all"
                      >
                        <option value="TK">TK Islam Madani</option>
                        <option value="SD">SD Islam Madani</option>
                        <option value="SMP">SMP Islam Madani</option>
                        <option value="Pesantren">Pesantren Rabbani</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1.5">Nomor WhatsApp Aktif</label>
                      <input
                        type="tel"
                        required
                        placeholder="Contoh: 08123456789"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,191,36,0.3)] hover:-translate-y-0.5"
                  >
                    Kirim Pendaftaran Awal
                  </button>
                </form>
              )}
            </div>

            {/* Hotline WhatsApp Support */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-slate-800/80 w-full text-xs text-slate-400 font-medium">
              <span>Butuh bantuan atau ingin berkunjung ke sekolah?</span>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Panitia%20PPDB%20Sekolah%20Madani,%20saya%20ingin%20konsultasi%20pendaftaran%20siswa%20baru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-bold transition-colors"
              >
                Chat WhatsApp Panitia PPDB (Fast Response)
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
