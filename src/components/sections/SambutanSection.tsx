"use client";

import { useState } from "react";

const principals = [
  {
    id: "tk",
    level: "Taman Kanak-Kanak",
    name: "Bunda Siti Aminah",
    degree: "S.Pd., AUD.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", 
    message: "Di jenjang Taman Kanak-Kanak, fokus utama kami adalah membangun karakter dasar, kemandirian, dan kecintaan anak pada proses belajar melalui pendekatan bermain yang Islami dan bermakna. Kami percaya setiap anak adalah bintang yang siap bersinar."
  },
  {
    id: "sd",
    level: "Sekolah Dasar",
    name: "Ahmad Fauzan",
    degree: "S.Pd., M.Pd.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    message: "Pendidikan dasar adalah fondasi keilmuan dan adab. Kami di SD Madani berkomitmen untuk tidak hanya mencetak siswa yang unggul secara akademik, tetapi juga memiliki hafalan Qur'an yang kuat serta akhlakul karimah yang teraplikasi dalam kehidupan."
  },
  {
    id: "smp",
    level: "Sekolah Menengah Pertama",
    name: "Dr. H. Muhammad Ilham",
    degree: "M.Ag.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    message: "Menghadapi usia remaja, tantangan pendidikan semakin kompleks. SMP Madani hadir dengan kurikulum terpadu yang menyeimbangkan sains modern dan ilmu agama. Kami membekali siswa dengan kemampuan berpikir kritis dan kedewasaan spiritual."
  }
];

export default function SambutanSection() {
  const [activeTab, setActiveTab] = useState(principals[1].id); // Default ke SD

  const activeData = principals.find((p) => p.id === activeTab) || principals[1];

  return (
    <section className="relative w-full bg-[#0B1120] py-24 lg:py-32 overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-brand-accent/5 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Tabs */}
        <div className="flex flex-col items-center mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gradient-accent tracking-tight mb-8 text-center">
            Pesan Kepemimpinan
          </h2>

          {/* Modern Toggle Tabs (Gaya iOS/macOS) */}
          <div className="relative inline-flex p-1.5 bg-slate-100 rounded-full border border-slate-200/50 shadow-inner max-w-full overflow-x-auto overflow-y-hidden hide-scrollbar">
            {principals.map((principal) => (
              <button
                key={principal.id}
                onClick={() => setActiveTab(principal.id)}
                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-500 ease-out whitespace-nowrap ${
                  activeTab === principal.id
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {activeTab === principal.id && (
                  <span className="absolute inset-0 bg-[#0B1120] rounded-full -z-10 shadow-md transition-all duration-500 layout-animation"></span>
                )}
                {principal.level}
              </button>
            ))}
          </div>
        </div>

        {/* Konten Interaktif - PERBAIKAN PADA BAGIAN GAP LAYOUT KIRI KANAN */}
        <div key={activeTab} className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mt-10">
          
          {/* ========================================= */}
          {/* SISI KIRI: FOTO  */}
          {/* ========================================= */}
          <div className="w-full lg:w-5/12 relative z-20">
            {/* Kotak Foto dengan efek mask reveal */}
            <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/40 animate-reveal-mask">
              <img 
                src={activeData.image} 
                alt={activeData.name} 
                className="w-full h-full object-cover animate-scale-down"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-transparent to-transparent"></div>
            </div>

            {/* Floating Glassmorphism Badge */}
            <div className="absolute -bottom-6 -right-2 lg:-right-8 bg-white/90 backdrop-blur-xl border border-white p-5 lg:p-6 rounded-3xl shadow-xl animate-slide-up delay-300 w-[85%] sm:w-auto">
              <p className="text-brand-accent font-extrabold text-[10px] lg:text-xs uppercase tracking-widest mb-1">{activeData.level}</p>
              <h3 className="text-lg lg:text-xl font-bold text-[#0B1120]">{activeData.name}</h3>
              <p className="text-slate-500 text-xs lg:text-sm font-medium">{activeData.degree}</p>
            </div>
          </div>

          {/* ========================================= */}
          {/* SISI KANAN: TEKS SAMBUTAN  */}
          {/* ========================================= */}
          {/* PERBAIKAN: Menghapus margin negatif, mengganti ke layout normal yang bersih */}
          <div className="w-full lg:w-7/12 relative z-10 mt-8 lg:mt-0">
            
            {/* Dekorasi Card: Tampil di semua ukuran layar sekarang (tidak disembunyikan di HP) */}
            <div className="absolute inset-0 bg-slate-50/95 backdrop-blur-md rounded-[2.5rem] lg:rounded-[3rem] -z-10 animate-fade-in shadow-2xl"></div>
            
            <div className="p-8 sm:p-10 lg:p-12 relative">
              {/* Ikon Kutipan Estetik */}
              <svg className="w-16 h-16 lg:w-20 lg:h-20 text-slate-200 absolute top-4 right-6 lg:right-8 -z-10 transform -scale-x-100 animate-slide-up delay-100 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <div className="prose prose-lg text-slate-600 leading-relaxed font-medium">
                <p className="animate-slide-up delay-200 text-lg sm:text-xl lg:text-2xl italic mb-8 text-[#0B1120]">
                  "{activeData.message}"
                </p>
              </div>

              {/* Tanda Tangan Kreatif */}
              <div className="animate-slide-up delay-400 mt-8 border-t border-slate-200 pt-8 flex items-center justify-between">
                <div>
                  <p className="text-xs lg:text-sm font-bold text-slate-800 uppercase tracking-wide">Kepala Sekolah</p>
                  <p className="text-xs lg:text-sm text-slate-500">Periode 2024 - Sekarang</p>
                </div>
                <div className="font-writing text-3xl lg:text-4xl text-brand-primary/40 -rotate-6">
                  {activeData.name.split(' ')[0]}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        .animate-reveal-mask {
          animation: revealMask 1s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        @keyframes revealMask {
          0% { clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); }
          100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
        }

        .animate-scale-down {
          animation: scaleDown 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes scaleDown {
          0% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }

        .animate-slide-up {
          opacity: 0;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </section>
  );
}