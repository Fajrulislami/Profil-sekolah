"use client";

import useSWR from 'swr';
import { useState } from "react";

const fetcher = (url: string) => fetch(url, { headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }, cache: 'no-store' }).then(res => res.json());

export default function PPDBFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const { data: fetchRes, error } = useSWR('/api/v1/ppdb-setting?section=faq', fetcher);

  const faqs = fetchRes?.data || [];

  return (
    <section className="relative w-full py-24 bg-slate-950 font-sans border-t border-slate-900 overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section (Tema Gelap) */}
        <div className="flex flex-col items-start lg:items-center lg:text-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900 border border-amber-400/30 shadow-sm w-max mb-6">
            <span className="flex h-2.5 w-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wider uppercase">
              Pusat Bantuan & FAQ
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 pb-2">
              Tanya Jawab Seputar PPDB
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-medium">
            Temukan jawaban cepat atas pertanyaan yang paling sering diajukan oleh calon wali murid.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-slate-400 text-lg">Belum ada data yang diisi</p>
            </div>
          ) : (
            faqs.map((faq: any, idx: number) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-slate-900/90 border-amber-400/40 shadow-lg"
                      : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  {/* Tombol Header Accordion */}
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-black text-base sm:text-lg text-white cursor-pointer"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <div
                      className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen 
                          ? "bg-amber-500 text-slate-950 border-transparent rotate-180" 
                          : "bg-slate-800 border-amber-400/30 text-amber-400"
                      }`}
                    >
                      {/* Menggunakan SVG Chevron agar lebih konsisten & rapi */}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Konten Accordion dengan Animasi Mulus */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-medium border-t border-slate-800/60">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
}