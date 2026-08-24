"use client";

import React, { useState } from 'react';
import { Search, Mail, MailOpen, Phone, Trash2, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';

// Data dummy sesuai variasi form di publik
const dummyMessages = [
  {
    id: 1,
    sender: "Bapak Budi Santoso",
    email: "budi.santoso88@gmail.com",
    wa: "", // Tidak ada WA dari form Kontak Umum
    subject: "Pertanyaan Umum",
    message: "Halo, saya mau memastikan jadwal tur sekolah untuk calon wali murid SD apakah bisa dilakukan hari Sabtu minggu ini? Jam berapa saja layanannya buka?",
    date: "Hari ini, 09:30 WIB",
    isRead: false,
    color: "bg-blue-100 text-blue-700 border-blue-200"
  },
  {
    id: 2,
    sender: "Ibu Siti Aminah (Wali dari Ananda Dika)",
    email: "", // Tidak ada email dari form PPDBCTA
    wa: "089876543210",
    subject: "Konsultasi PPDB",
    message: "Terdapat permohonan konsultasi PPDB baru untuk jenjang SD. Mohon segera hubungi nomor WhatsApp yang tertera untuk memandu proses selanjutnya.",
    date: "Kemarin, 15:45 WIB",
    isRead: true,
    color: "bg-amber-100 text-amber-700 border-amber-200"
  },
  {
    id: 3,
    sender: "Pengunjung Anonim",
    email: "redaksi@suarakota.com",
    wa: "", // Tidak ada WA dari form Langganan Buletin
    subject: "Langganan Buletin",
    message: "Pengguna ini mendaftarkan emailnya melalui halaman Berita untuk berlangganan pengumuman resmi dan rangkuman berita prestasi mingguan.",
    date: "20 Agustus 2026",
    isRead: true,
    color: "bg-purple-100 text-purple-700 border-purple-200"
  }
];

export default function PesanInbox() {
  const [activeMsgId, setActiveMsgId] = useState<number | null>(1);
  const [messages, setMessages] = useState(dummyMessages);

  // Fungsi untuk menandai pesan sudah dibaca
  const markAsRead = (id: number) => {
    setMessages(msgs => msgs.map(m => m.id === id ? { ...m, isRead: true } : m));
  };

  // Pilih pesan untuk dibaca
  const handleSelectMsg = (id: number) => {
    setActiveMsgId(id);
    markAsRead(id);
  };

  const activeMsg = messages.find(m => m.id === activeMsgId);

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex h-[600px]">
      
      {/* ========================================== */}
      {/* PANEL KIRI: DAFTAR PESAN                   */}
      {/* ========================================== */}
      <div className="w-1/3 border-r border-slate-200 flex flex-col bg-slate-50">
        
        {/* Header List */}
        <div className="p-4 border-b border-slate-200 bg-white">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Cari pengirim atau subjek..."
              className="block w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-slate-50 focus:bg-white transition-colors"
            />
          </div>
          <div className="flex gap-2 mt-3">
            <select className="flex-1 text-xs px-2 py-1.5 border border-slate-200 rounded text-slate-600 bg-white outline-none">
              <option>Semua Pesan</option>
              <option>Belum Dibaca</option>
              <option>Sudah Dibaca</option>
            </select>
          </div>
        </div>

        {/* List Pesan */}
        <div className="flex-1 overflow-y-auto">
          {messages.map((msg) => (
            <button
              key={msg.id}
              onClick={() => handleSelectMsg(msg.id)}
              className={`w-full text-left p-4 border-b border-slate-100 transition-colors relative ${
                activeMsgId === msg.id 
                  ? 'bg-emerald-50 border-l-4 border-l-emerald-500' 
                  : 'hover:bg-slate-100 border-l-4 border-l-transparent bg-white'
              }`}
            >
              <div className="flex items-start justify-between mb-1">
                <span className={`text-sm truncate pr-2 ${!msg.isRead ? 'font-bold text-slate-900' : 'font-medium text-slate-700'}`}>
                  {msg.sender}
                </span>
                <span className="text-[10px] text-slate-400 whitespace-nowrap">{msg.date}</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                {!msg.isRead && <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>}
                <span className={`text-xs px-1.5 py-0.5 rounded border ${msg.color} whitespace-nowrap overflow-hidden text-ellipsis`}>
                  {msg.subject}
                </span>
              </div>
              <p className={`text-xs line-clamp-2 ${!msg.isRead ? 'text-slate-700 font-medium' : 'text-slate-500'}`}>
                {msg.message}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* ========================================== */}
      {/* PANEL KANAN: DETAIL PESAN                  */}
      {/* ========================================== */}
      <div className="w-2/3 flex flex-col bg-white">
        
        {activeMsg ? (
          <>
            {/* Header Pesan */}
            <div className="p-6 border-b border-slate-100 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded border ${activeMsg.color}`}>
                    {activeMsg.subject}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-4">
                  {activeMsg.subject === "Langganan Buletin" ? "Pendaftaran Berlangganan Baru" : `Pesan Baru dari ${activeMsg.sender}`}
                </h2>
                
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  {activeMsg.email && (
                    <div className="flex items-center gap-2 text-slate-600">
                      <Mail className="w-4 h-4 text-slate-400" />
                      <a href={`mailto:${activeMsg.email}`} className="hover:text-emerald-600 hover:underline">{activeMsg.email}</a>
                    </div>
                  )}
                  {activeMsg.wa && (
                    <div className="flex items-center gap-2 text-slate-600">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <a href={`https://wa.me/${activeMsg.wa}`} target="_blank" rel="noreferrer" className="hover:text-emerald-600 hover:underline">{activeMsg.wa}</a>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    • Dikirim pada: {activeMsg.date}
                  </div>
                </div>
              </div>
            </div>

            {/* Isi Pesan (Lapang dan Ramah Awam) */}
            <div className="flex-1 p-6 overflow-y-auto bg-slate-50/50">
              <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm leading-relaxed text-slate-700">
                {activeMsg.message}
              </div>

              {activeMsg.subject === "Konsultasi PPDB" && (
                <div className="mt-4 p-4 rounded-lg bg-emerald-50 border border-emerald-100 flex gap-3 text-sm text-emerald-800">
                  <AlertCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <p>Ini adalah pesan <strong>Konsultasi PPDB</strong>. Pastikan memberikan jawaban yang solutif agar calon wali murid merasa terbantu dan yakin mendaftar.</p>
                </div>
              )}
            </div>

            {/* Aksi Balasan (Footer) */}
            <div className="p-4 border-t border-slate-200 bg-white flex items-center justify-between">
              <button 
                className="flex items-center gap-2 text-sm font-medium text-rose-500 hover:text-rose-600 px-3 py-2 rounded hover:bg-rose-50 transition-colors"
                onClick={() => alert('Yakin ingin menghapus pesan ini?')}
              >
                <Trash2 className="w-4 h-4" /> Hapus
              </button>

              <div className="flex gap-3">
                {activeMsg.email && (
                  <a 
                    href={`mailto:${activeMsg.email}`}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
                  >
                    <Mail className="w-4 h-4" /> Balas Email
                  </a>
                )}
                {activeMsg.wa && (
                  <a 
                    href={`https://wa.me/${activeMsg.wa}?text=Halo%20Bapak/Ibu%20${encodeURIComponent(activeMsg.sender)},%20kami%20dari%20Admin%20Sekolah%20ingin%20membalas%20pesan%20Anda:`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-emerald-600 border border-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" /> Balas via WhatsApp
                  </a>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-400 p-6 text-center">
            <MailOpen className="w-16 h-16 text-slate-200 mb-4" />
            <h3 className="text-lg font-medium text-slate-500 mb-1">Pilih Pesan</h3>
            <p className="text-sm">Silakan pilih pesan dari daftar di sebelah kiri untuk membaca isinya.</p>
          </div>
        )}

      </div>
    </div>
  );
}
