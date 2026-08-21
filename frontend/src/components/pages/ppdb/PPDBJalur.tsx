"use client";

export default function PPDBJalur() {
  const tracks = [
    {
      id: 1,
      title: "Beasiswa Hafidz Qur'an",
      subtitle: "Bebas Biaya Pendidikan 100%",
      badge: "Gratis SPP & Asrama",
      desc: "Khusus untuk anak yang memiliki hafalan Al-Qur'an (minimal 15–30 Juz). Sekolah menanggung seluruh biaya pendaftaran, SPP bulanan, dan asrama sampai lulus.",
      points: [
        "Gratis uang masuk & SPP bulanan",
        "Gratis tempat tinggal asrama & makan",
        "Bimbingan khusus hafalan mutqin",
      ],
      imageUrl: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1470&auto=format&fit=crop",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Jalur Juara Lomba & Prestasi",
      subtitle: "Langsung Diterima Tanpa Tes Tulis",
      badge: "Diskon Biaya s.d 50%",
      desc: "Untuk anak yang pernah juara lomba (Juara 1, 2, atau 3) di bidang Sains/OSN, Olahraga, Seni, atau Robotika minimal tingkat Kota/Kabupaten.",
      points: [
        "Tidak perlu ikut tes tulis akademik",
        "Potongan uang masuk sekolah hingga 50%",
        "Masuk kelas pembinaan bakat juara",
      ],
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop",
      isFeatured: false,
    },
    {
      id: 3,
      title: "Jalur Pendaftaran Umum",
      subtitle: "Terbuka untuk Semua Calon Siswa",
      badge: "Jenjang TK, SD, SMP & Pesantren",
      desc: "Jalur masuk reguler untuk seluruh calon siswa. Penilaian tidak memakai tes yang menakutkan, melainkan temu kenal santai untuk melihat minat dan bakat anak.",
      points: [
        "Tes ramah anak & menyenangkan",
        "Mengetahui potensi & gaya belajar anak",
        "Pendampingan belajar sejak hari pertama",
      ],
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1470&auto=format&fit=crop",
      isFeatured: false,
    },
    {
      id: 4,
      title: "Jalur Kakak-Beradik (Keluarga)",
      subtitle: "Keringanan Khusus Saudara Kandung",
      badge: "Hemat Biaya Masuk",
      desc: "Khusus untuk Bapak/Ibu yang sudah memiliki anak yang bersekolah di sini. Dapatkan potongan biaya khusus jika mendaftarkan adik atau saudaranya.",
      points: [
        "Diskon khusus uang pengembangan",
        "Jaminan prioritas kursi kuota",
        "Proses berkas lebih cepat & praktis",
      ],
      imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop",
      isFeatured: false,
    },
  ];

  return (
    <section className="relative w-full py-24 bg-slate-950 font-sans border-t border-slate-900 overflow-hidden">
      
      {/* Ambient Glow Emas */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section (Bahasa Sederhana & Ramah Orang Tua) */}
        <div className="flex flex-col items-start lg:items-center lg:text-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900 border border-amber-400/30 shadow-sm w-max mb-6">
            <span className="flex h-2.5 w-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wider uppercase">
              Panduan Pilihan Pendaftaran
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.15] mb-6">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 pb-2">
              Pilihan Jalur Masuk Sekolah
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-medium">
            Kami menyediakan 4 jalur pendaftaran yang mudah. Silakan pilih jalur yang paling pas dan menguntungkan untuk putra-putri Anda.
          </p>
        </div>

        {/* 4 Kartu Jalur Masuk (Jelas, Berfoto, dan Mudah Dibaca) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="group rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Foto Ilustrasi Header */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-950">
                <img
                  src={track.imageUrl}
                  alt={track.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                
                {/* Badge Status Kuning/Emas */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md">
                    {track.badge}
                  </span>
                </div>

                {/* Judul & Subtitle di Atas Foto */}
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-1 group-hover:text-amber-300 transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-slate-200 text-xs sm:text-sm font-bold group-hover:text-amber-300 transition-colors">
                    {track.subtitle}
                  </p>
                </div>
              </div>

              {/* Isi Penjelasan & Keuntungan */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between bg-slate-900/60">
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                  {track.desc}
                </p>

                {/* Daftar Keuntungan Poin-Poin */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Keuntungan yang Didapat:
                  </span>
                  {track.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0">
                        ✓
                      </div>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Tombol Aksi Cepat */}
                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Kuota Terbatas</span>
                  <a
                    href="#formulir"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-extrabold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Daftar Jalur Ini
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
