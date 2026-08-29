"use client";

import React, { useState } from 'react';
import { Search, Mail, MailOpen, Phone, Trash2, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function PesanInbox() {
  const [activeMsgId, setActiveMsgId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("Semua Pesan");
  const [apiError, setApiError] = useState<string | null>(null);
  
  const { data: rawData, error, mutate } = useSWR('/api/v1/pesan', fetcher, {
    refreshInterval: 10000 // Refresh every 10 seconds
  });
  
  const messages: any[] = Array.isArray(rawData) ? rawData : [];
  const isLoading = !rawData && !error;

  // Fungsi untuk menandai pesan sudah dibaca
  const markAsRead = async (id: number) => {
    try {
      // Optimistic update
      mutate(messages.map(m => m.id === id ? { ...m, isRead: true } : m), false);
      
      const res = await fetch(`/api/v1/pesan/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isRead: true })
      });
      
      if (!res.ok) {
        mutate(); // Rollback if failed
      }
    } catch (error) {
      console.error('Failed to update read status', error);
      mutate();
    }
  };

  const deleteMessage = async (id: number) => {
    if (!confirm('Yakin ingin menghapus pesan ini?')) return;
    setApiError(null);
    try {
      // Optimistic delete
      mutate(messages.filter(m => m.id !== id), false);
      
      const res = await fetch(`/api/v1/pesan/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        if (activeMsgId === id) setActiveMsgId(null);
      } else {
        const errorData = await res.json();
        setApiError(errorData.error || 'Gagal menghapus pesan');
        mutate();
      }
    } catch (error) {
      console.error('Failed to delete message', error);
      setApiError('Terjadi kesalahan jaringan');
      mutate();
    }
  };

  const filteredMessages = messages.filter(msg => {
    const matchSearch = (msg.senderName || "").toLowerCase().includes(searchQuery.toLowerCase()) || 
                        (msg.subject || "").toLowerCase().includes(searchQuery.toLowerCase());
    const matchStatus = filterStatus === "Semua Pesan" ? true :
                        filterStatus === "Belum Dibaca" ? !msg.isRead :
                        filterStatus === "Sudah Dibaca" ? msg.isRead : true;
    return matchSearch && matchStatus;
  });

  // Pilih pesan untuk dibaca
  const handleSelectMsg = (id: number) => {
    setActiveMsgId(id);
    const msg = messages.find(m => m.id === id);
    if (msg && !msg.isRead) {
      markAsRead(id);
    }
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-slate-50 focus:bg-white transition-colors"
            />
          </div>
          <div className="flex gap-2 mt-3">
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="flex-1 text-xs px-2 py-1.5 border border-slate-200 rounded text-slate-600 bg-white outline-none"
            >
              <option value="Semua Pesan">Semua Pesan</option>
              <option value="Belum Dibaca">Belum Dibaca</option>
              <option value="Sudah Dibaca">Sudah Dibaca</option>
            </select>
          </div>
        </div>

        {/* List Pesan */}
        <div className="flex-1 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-sm text-slate-500">Memuat pesan...</div>
          ) : filteredMessages.length === 0 ? (
            <div className="p-4 text-center text-sm text-slate-500">Tidak ada pesan.</div>
          ) : (
            filteredMessages.map((msg) => (
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
                    {msg.senderName}
                  </span>
                  <span className="text-[10px] text-slate-400 whitespace-nowrap">
                    {new Intl.DateTimeFormat('id-ID', { dateStyle: 'short' }).format(new Date(msg.createdAt))}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-1.5">
                  {!msg.isRead && <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>}
                  {msg.type === 'NEWSLETTER' && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded border bg-amber-50 text-amber-600 border-amber-200 whitespace-nowrap">
                      📰 Buletin
                    </span>
                  )}
                  <span className={`text-xs px-1.5 py-0.5 rounded border bg-blue-50 text-blue-700 border-blue-200 whitespace-nowrap overflow-hidden text-ellipsis`}>
                    {msg.subject}
                  </span>
                </div>
                <p className={`text-xs line-clamp-2 ${!msg.isRead ? 'text-slate-700 font-medium' : 'text-slate-500'}`}>
                  {msg.message}
                </p>
              </button>
            ))
          )}
        </div>
      </div>

      {/* ========================================== */}
      {/* PANEL KANAN: DETAIL PESAN                  */}
      {/* ========================================== */}
      <div className="w-2/3 flex flex-col bg-white relative">
        
        {apiError && (
          <div className="absolute top-4 right-4 z-10 p-3 bg-rose-50 border border-rose-200 text-rose-700 text-sm font-medium rounded-lg shadow-sm flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            {apiError}
            <button onClick={() => setApiError(null)} className="ml-2 font-bold hover:text-rose-900">✕</button>
          </div>
        )}

        {activeMsg ? (
          <>
            {/* Header Pesan */}
            <div className="p-6 border-b border-slate-100 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded border bg-blue-50 text-blue-700 border-blue-200`}>
                    {activeMsg.subject}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-4">
                  Pesan Baru dari {activeMsg.senderName}
                </h2>
                
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  {activeMsg.email && (
                    <div className="flex items-center gap-2 text-slate-600">
                      <Mail className="w-4 h-4 text-slate-400" />
                      <a href={`mailto:${activeMsg.email}`} className="hover:text-emerald-600 hover:underline">{activeMsg.email}</a>
                    </div>
                  )}
                  {activeMsg.phone && (
                    <div className="flex items-center gap-2 text-slate-600">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <a href={`https://wa.me/${activeMsg.phone}`} target="_blank" rel="noreferrer" className="hover:text-emerald-600 hover:underline">{activeMsg.phone}</a>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    • Dikirim pada: {new Intl.DateTimeFormat('id-ID', { dateStyle: 'long', timeStyle: 'short' }).format(new Date(activeMsg.createdAt))}
                  </div>
                </div>
              </div>
            </div>

            {/* Isi Pesan (Lapang dan Ramah Awam) */}
            <div className="flex-1 p-6 overflow-y-auto bg-slate-50/50">
              <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm leading-relaxed text-slate-700">
                {activeMsg.message}
              </div>
            </div>

            {/* Aksi Balasan (Footer) */}
            <div className="p-4 border-t border-slate-200 bg-white flex items-center justify-between">
              <button 
                className="flex items-center gap-2 text-sm font-medium text-rose-500 hover:text-rose-600 px-3 py-2 rounded hover:bg-rose-50 transition-colors"
                onClick={() => deleteMessage(activeMsg.id)}
              >
                <Trash2 className="w-4 h-4" /> Hapus
              </button>

              <div className="flex flex-wrap gap-2">
                {activeMsg.email && (
                  <div className="relative group">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
                      <Mail className="w-4 h-4" /> Balas Email ▾
                    </button>
                    {/* Dropdown Options (Dengan wrapper padding transparan agar tidak hilang saat di-hover) */}
                    <div className="absolute bottom-full left-0 pb-2 hidden group-hover:block w-max min-w-[200px] z-10">
                      <div className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden flex flex-col">
                        <a 
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${activeMsg.email}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 border-b border-slate-100 font-medium transition-colors whitespace-nowrap"
                        >
                          <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
                            <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.728L12 16.64l-6.545-4.913v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 8.411l8.073-4.918c1.618-1.214 3.927-.059 3.927 1.964Z"/>
                            <path fill="#34A853" d="M18.545 21h3.819C23.268 21 24 20.268 24 19.366V5.457c0-.58-.313-1.125-.818-1.425l-4.637 2.85v14.118Z"/>
                            <path fill="#FBBC04" d="M5.455 21H1.636C.732 21 0 20.268 0 19.366V5.457c0-.58.313-1.125.818-1.425l4.637 2.85v14.118Z"/>
                            <path fill="#4285F4" d="M12 16.64L24 7.636v-2.18c0-.58-.313-1.125-.818-1.425L12 8.411 1.073 1.764c-.505.3-.818.845-.818 1.425v2.18L12 16.64Z"/>
                          </svg>
                          Gmail
                        </a>
                        <a 
                          href={`https://compose.mail.yahoo.com/?to=${activeMsg.email}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 border-b border-slate-100 font-medium transition-colors whitespace-nowrap"
                        >
                          <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="#6001D2">
                            <path d="M22.775 5.564c-.463-.207-1.078-.293-1.574-.293H2.8c-.496 0-1.111.086-1.574.293C.566 5.86 0 6.642 0 7.426v9.148c0 .784.566 1.566 1.226 1.862.463.207 1.078.293 1.574.293h18.4c.496 0 1.111-.086 1.574-.293.66-.296 1.226-1.078 1.226-1.862V7.426c0-.784-.566-1.566-1.225-1.862zm-1.87 2.65L12 14.81l-8.905-6.596h17.81z"/>
                          </svg>
                          Yahoo!
                        </a>
                        <a 
                          href={`mailto:${activeMsg.email}`}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 font-medium transition-colors whitespace-nowrap"
                        >
                          <svg className="w-4 h-4 shrink-0 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Aplikasi Default
                        </a>
                      </div>
                    </div>
                  </div>
                )}
                {activeMsg.phone && (
                  <a 
                    href={`https://wa.me/${activeMsg.phone}?text=Halo%20Bapak/Ibu%20${encodeURIComponent(activeMsg.senderName)},%20kami%20dari%20Admin%20Sekolah%20ingin%20membalas%20pesan%20Anda:`}
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
