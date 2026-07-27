export default function AboutBriefSection() {
  return (
    <section className="w-full bg-[#0B1120] py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Grid 2 Kolom (Beralih ke 1 kolom jika di layar HP) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ========================================== */}
          {/* BAGIAN KIRI: Khusus Judul (Selalu di Kiri) */}
          {/* ========================================== */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-32">
            
            {/* KAPSUL IDENTIK (Perbaikan: Ditambahkan w-max & disesuaikan untuk Dark Mode) */}
            <div 
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-400/40 shadow-sm w-max mb-6 transition-all duration-500 hover:border-amber-500/50"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shrink-0 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wide uppercase">
                Tentang Kami
              </span>
            </div>
            
            {/* Judul Utama dengan Font Gradient Accent */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-6">
              Membangun Generasi <br />
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent font-black italic pb-2 pr-4 mt-1">
                Cerdas & Berkarakter.
              </span>
            </h2>
            
            {/* Tombol CTA (Tampil di Desktop) - Disesuaikan dengan tema emas */}
            <div className="hidden lg:block mt-6">
              <a 
                href="/tentang" 
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-300 group hover:-translate-y-1"
              >
                Kenali Kami Lebih Dekat
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* ========================================== */}
          {/* BAGIAN KANAN: Penjelasan & Visual          */}
          {/* ========================================== */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Paragraf Penjelasan Singkat */}
            <div className="text-slate-300 text-base md:text-lg leading-relaxed space-y-4">
              <p className="text-justify">
                Selamat datang di <strong className="text-white font-bold">SD Islam YPI Cordova</strong>. Kami percaya bahwa pendidikan sejati tidak hanya sekadar mengisi akal dengan ilmu pengetahuan, tetapi juga menyentuh hati dengan akhlak mulia. Di sini, setiap langkah adalah proses menuntun potensi terbaik siswa untuk siap menghadapi tantangan masa depan.
              </p>
              <p className="text-justify">
                Didukung oleh tenaga pendidik profesional dan fasilitas modern, kami berkomitmen untuk menciptakan lingkungan belajar yang aman, inklusif, dan menyenangkan bagi setiap siswa untuk mengeksplorasi potensi terbaik mereka.
              </p>
            </div>
            
            {/* Area Gambar Estetik dengan Efek Sinematik */}
            <div className="relative w-full h-[300px] sm:h-[400px] rounded-3xl overflow-hidden mt-4 group border border-slate-800/80">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                alt="Suasana Belajar" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 mix-blend-luminosity group-hover:mix-blend-normal"
              />
              {/* Overlay Gradient Hitam di bawah */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-90"></div>
              
              {/* Badge Overlay di atas gambar */}
              <div className="absolute bottom-6 left-6 bg-[#121A2A]/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-700/80 flex items-center gap-4 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-900 rounded-xl flex items-center justify-center font-black text-xl shadow-lg">
                  15+
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-500 uppercase tracking-wider">Pengalaman</p>
                  <p className="text-white font-bold leading-none mt-1">Tahun Mendidik</p>
                </div>
              </div>
            </div>

            {/* Tombol CTA (Tampil khusus di Mobile/Tablet) */}
            <div className="block lg:hidden mt-4">
              <a 
                href="/tentang-kami" 
                className="inline-flex w-full items-center justify-center px-8 py-4 text-sm font-bold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all"
              >
                Kenali Kami Lebih Dekat
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}