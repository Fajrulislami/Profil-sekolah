"use client";

export default function BeritaHeader() {
  return (
    // Menghapus border-b agar tidak ada garis pembatas di bawah
    <section className="relative w-full pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden font-sans">
      
      {/* 
        ANIMASI BACKGROUND BERGERAK 
        - Menggunakan ukuran fixed (px) agar dijamin muncul dan tidak terpotong.
        - Warna dibuat sedikit lebih jelas (emerald-200/40) dan kecepatan rotasi diatur agar terlihat bernafas/bergerak.
      */}
      <div className="absolute top-0 left-[-5%] w-[600px] h-[600px] rounded-[40%] bg-gradient-to-br from-emerald-200/40 to-transparent blur-[100px] animate-[spin_20s_linear_infinite] pointer-events-none" />
      
      <div className="absolute bottom-[-20%] right-[-5%] w-[700px] h-[700px] rounded-[40%] bg-gradient-to-tr from-teal-200/30 to-transparent blur-[120px] animate-[spin_25s_linear_infinite_reverse] pointer-events-none" />

      {/* Pola Titik Halus (Grid) */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=')] opacity-60 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* 
          BADGE KAPSUL PUTIH
          Diubah menggunakan bg-white agar sama dengan konsep galeri sebelumnya
        */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-emerald-300 shadow-sm w-max mb-8 transition-all duration-500 hover:border-emerald-400">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs sm:text-sm font-bold text-emerald-700 tracking-wider uppercase">
            Pusat Informasi Terkini
          </span>
        </div>

        {/* 
          GRADASI HIJAU TEKS
          Menggunakan gradasi hijau menyala seperti pada halaman prestasi sebelumnya
        */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black tracking-tighter leading-[1.1] mb-8">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 pb-2 pr-4">
            BERITA & INFORMASI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
          Informasi terbaru seputar kegiatan, prestasi, dan perkembangan sekolah. 
          Ikuti terus jejak langkah dan momen berharga dari keluarga besar kami.
        </p>

      </div>
    </section>
  );
}