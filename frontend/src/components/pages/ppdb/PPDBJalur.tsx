"use client";

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url, { headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }, cache: 'no-store' }).then(res => res.json());

export default function PPDBJalur() {
  const { data: fetchRes, error } = useSWR('/api/v1/ppdb-setting?section=jalur', fetcher);

  const tracks = fetchRes?.data || [];

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

        {tracks.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-slate-400 text-lg">Belum ada data yang diisi</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tracks.map((track: any) => (
            <div
              key={track.id}
              className="group rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Foto Ilustrasi Header */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-950">
                {track.imageUrl ? (
                  <img
                    src={track.imageUrl}
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors duration-700">
                    <svg className="w-12 h-12 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
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
                  {track.points.map((pt: any, i: number) => (
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
        )}

      </div>
    </section>
  );
}
