"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setApiError(null);

    try {
      const response = await fetch('/api/v1/pesan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          senderName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          type: "CONTACT"
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        setApiError(`Gagal mengirim pesan: ${errorData.error || 'Terjadi kesalahan'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setApiError('Terjadi kesalahan koneksi saat mengirim pesan.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-gray-50 text-slate-800 py-24 lg:py-32 relative overflow-hidden">
      
      {/* Background Glow Ring - Desain Estetik Abstrak */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-emerald-300 shadow-sm shadow-emerald-100/50 text-emerald-700 text-xs font-semibold tracking-wider uppercase mb-5">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-emerald-600 tracking-wide uppercase">
              Hubungi Hubungan Masyarakat
            </span>
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0B1120] tracking-tight leading-tight">
            Ada pertanyaan? <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Mari bicarakan bersama kami</span>
          </h2>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-stretch">
          
          {/* ========================================= */}
          {/* SISI KIRI: KARTU INFORMASI TERPADU (5 Kolom) */}
          {/* ========================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50/80 backdrop-blur-sm border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-sm">
            
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-black text-[#0B1120] tracking-tight">Informasi Kontak</h3>
                <p className="text-slate-500 text-sm mt-1">Silakan hubungi kami via jalur resmi di bawah ini.</p>
              </div>

              {/* Item: Alamat */}
              <div className="flex gap-5 items-start group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center text-brand-primary shrink-0 shadow-sm transition-transform group-hover:scale-105 duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1120] text-base">Lokasi Kampus</h4>
                  <p className="text-slate-600 mt-1 text-sm leading-relaxed">
                    Jl. Pendidikan Modern No. 45, Kecamatan Cerdas, Kota Madani, Indonesia
                  </p>
                </div>
              </div>

              {/* Item: Telepon */}
              <div className="flex gap-5 items-start group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center text-brand-primary shrink-0 shadow-sm transition-transform group-hover:scale-105 duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1120] text-base">Telepon & WhatsApp</h4>
                  <p className="text-slate-600 mt-1 text-sm">(021) 555-1234</p>
                  <p className="text-brand-primary font-bold text-sm mt-0.5">+62 812-3456-7890</p>
                </div>
              </div>

              {/* Item: Email */}
              <div className="flex gap-5 items-start group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center text-brand-primary shrink-0 shadow-sm transition-transform group-hover:scale-105 duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1120] text-base">Surat Elektronik (Email)</h4>
                  <p className="text-slate-600 mt-1 text-sm">info@sekolahmadani.sch.id</p>
                </div>
              </div>
            </div>

            {/* Bagian Bawah Kartu: Jam Operasional & Sosmed */}
            <div className="mt-12 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Jam Kerja Layanan</span>
                <p className="text-xs font-semibold text-[#0B1120]">Senin - Jumat | 07.30 - 15.30 WIB</p>
              </div>
              
              {/* Media Sosial Minimalis */}
                          
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a 
                  href="#" 
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center text-slate-500 hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/5 transition-all shadow-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="#" 
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center text-slate-500 hover:text-[#E1306C] hover:border-[#E1306C]/40 hover:bg-[#E1306C]/5 transition-all shadow-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* YouTube */}
                <a 
                  href="#" 
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center text-slate-500 hover:text-[#FF0000] hover:border-[#FF0000]/40 hover:bg-[#FF0000]/5 transition-all shadow-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* ========================================= */}
          {/* SISI KANAN: FORMULIR PESAN MINIMALIS (7 Kolom) */}
          {/* ========================================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Input Nama */}
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-[#0B1120] uppercase tracking-widest block pl-1">Nama Anda</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50/60 border border-slate-200/80 focus:outline-none focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all text-sm text-slate-800"
                    placeholder="Contoh: Ahmad Fauzi"
                  />
                </div>
                
                {/* Input Email */}
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-[#0B1120] uppercase tracking-widest block pl-1">Alamat Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50/60 border border-slate-200/80 focus:outline-none focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all text-sm text-slate-800"
                    placeholder="fauzi@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Input Telepon */}
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-[#0B1120] uppercase tracking-widest block pl-1">No. Telepon / WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50/60 border border-slate-200/80 focus:outline-none focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all text-sm text-slate-800"
                    placeholder="Contoh: 081234567890"
                  />
                </div>

                {/* Input Subjek */}
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-[#0B1120] uppercase tracking-widest block pl-1">Perihal / Subjek</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50/60 border border-slate-200/80 focus:outline-none focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all text-sm text-slate-800"
                    placeholder="Kategori pesan (Contoh: Informasi Pendaftaran)"
                  />
                </div>
              </div>

              {/* Input Pesan */}
              <div className="space-y-2">
                <label className="text-xs font-extrabold text-[#0B1120] uppercase tracking-widest block pl-1">Isi Pesan Singkat</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50/60 border border-slate-200/80 focus:outline-none focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all text-sm text-slate-800 resize-none"
                  placeholder="Ketikkan detail pertanyaan atau keperluan Anda di sini..."
                ></textarea>
              </div>

              {/* Alert Pengiriman Sukses */}
              {isSubmitted && (
                <div className="p-4 bg-emerald-50/80 border border-emerald-100 text-emerald-800 rounded-2xl text-sm font-semibold flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.293 15.607l-3.9-3.813 1.414-1.415 2.445 2.39 5.857-5.961 1.428 1.402-7.244 7.397z"/>
                  </svg>
                  Pesan Anda terkirim! Tim Admin kami akan membalas via email secepatnya.
                </div>
              )}

              {/* Alert Pengiriman Gagal */}
              {apiError && (
                <div className="p-4 bg-rose-50/80 border border-rose-200 text-rose-800 rounded-2xl text-sm font-semibold flex items-center gap-3">
                  <svg className="w-5 h-5 text-rose-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                  {apiError}
                </div>
              )}

              {/* Tombol Kirim */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4.5 rounded-2xl font-bold text-white tracking-wide text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? "bg-slate-400 cursor-not-allowed" 
                    : "bg-[#0B1120] hover:bg-brand-primary hover:shadow-[0_20px_35px_rgba(11,17,32,0.15)]"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <polygon className="opacity-75" fill="currentColor" points="4 12 10 12 10 6"></polygon>
                    </svg>
                    Sedang Mengirim...
                  </>
                ) : (
                  "Kirim Pesan"
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}