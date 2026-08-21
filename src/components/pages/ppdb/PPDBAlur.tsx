"use client";

export default function PPDBAlur() {
  const steps = [
    {
      num: "01",
      title: "Daftar dari HP / Laptop",
      desc: "Isi data awal calon siswa dan nomor WhatsApp orang tua melalui formulir online yang praktis.",
    },
    {
      num: "02",
      title: "Kirim Foto Berkas",
      desc: "Cukup foto dokumen (Kartu Keluarga, Akta, Rapor) lalu unggah atau kirim langsung ke panitia.",
    },
    {
      num: "03",
      title: "Temu Kenal Santai",
      desc: "Anak diajak bermain dan berinteraksi santai bersama guru untuk melihat bakat serta gaya belajarnya.",
    },
    {
      num: "04",
      title: "Bincang Bersama Guru",
      desc: "Diskusi ringan antara orang tua dan kepala sekolah/guru seputar pembinaan terbaik untuk anak.",
    },
    {
      num: "05",
      title: "Resmi Diterima!",
      desc: "Pengumuman hasil kelulusan, pengukuran seragam sekolah, dan persiapan masuk kelas baru.",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-slate-50 font-sans border-t border-slate-200/80 overflow-hidden">
      
      {/* Pola Titik Halus */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=')] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section (Tema Terang) */}
        <div className="flex flex-col items-start lg:items-center lg:text-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-emerald-300 shadow-sm w-max mb-6">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-emerald-700 tracking-wider uppercase">
              Proses Mudah & Tidak Ribet
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.15] mb-6">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 pb-2">
              5 Langkah Mudah Mendaftar
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed font-medium">
            Pendaftaran kami buat sesederhana mungkin agar Bapak & Ibu merasa nyaman dan terbantu di setiap langkahnya.
          </p>
        </div>

        {/* 5 Steps Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-3xl sm:text-4xl font-black text-emerald-600/25 mb-4">
                  {step.num}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
                <span>Langkah {idx + 1}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
