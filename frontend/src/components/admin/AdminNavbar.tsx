"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ExternalLink, Bell, Search, CheckCircle2 } from 'lucide-react';
import type { DecodedUser } from '@/utils/auth-util';

export default function AdminNavbar({ user }: { user?: DecodedUser | null }) {
  const [showNotif, setShowNotif] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  const [notifications, setNotifications] = useState<any[]>([]);

  const fetchNotifications = async () => {
    try {
      const [resPesan, resPpdb] = await Promise.all([
        fetch('/api/v1/pesan', { cache: 'no-store' }),
        fetch('/api/v1/pendaftar', { cache: 'no-store' })
      ]);

      let newNotifications: any[] = [];

      if (resPesan.ok) {
        const pesanData = await resPesan.json();
        const unreadPesan = pesanData.filter((msg: any) => !msg.isRead).map((msg: any) => ({
          id: `pesan_${msg.id}`,
          originalId: msg.id,
          type: 'pesan',
          title: `Pesan Baru: ${msg.senderName}`,
          desc: msg.subject,
          dateObj: new Date(msg.createdAt),
          time: new Intl.DateTimeFormat('id-ID', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(msg.createdAt)),
          unread: true,
        }));
        newNotifications = [...newNotifications, ...unreadPesan];
      }

      if (resPpdb.ok) {
        const ppdbData = await resPpdb.json();
        const pendingPpdb = ppdbData
          .filter((p: any) => !p.isRead)
          .map((p: any) => ({
            id: `ppdb_${p.id}`,
            originalId: p.id,
            type: 'ppdb',
            title: `Pendaftar PPDB Baru`,
            desc: `${p.fullName} (${p.gradeLevel}) baru saja mendaftar.`,
            dateObj: new Date(p.createdAt),
            time: new Intl.DateTimeFormat('id-ID', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(p.createdAt)),
            unread: true,
          }));
        newNotifications = [...newNotifications, ...pendingPpdb];
      }

      // Urutkan dari yang paling baru
      newNotifications.sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());
      
      // Tampilkan 10 terbaru
      setNotifications(newNotifications.slice(0, 10));
    } catch (error) {
      console.error('Failed to fetch notifications', error);
    }
  };

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 10000); // Polling every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const unreadCount = notifications.filter(n => n.unread).length;

  // Tutup dropdown jika klik di luar area
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotif(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const markAllAsRead = async () => {
    try {
      await Promise.all([
        fetch('/api/v1/pesan/markAll', { method: 'POST' }),
        fetch('/api/v1/pendaftar/markAll', { method: 'POST' })
      ]);

      setNotifications([]);
    } catch (error) {
      console.error('Failed to mark all as read', error);
    }
  };

  const markAsRead = async (notif: any) => {
    try {
      if (notif.type === 'pesan') {
        await fetch(`/api/v1/pesan/${notif.originalId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ isRead: true })
        });
      } else if (notif.type === 'ppdb') {
        await fetch(`/api/v1/pendaftar/${notif.originalId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ isRead: true })
        });
      }
      setNotifications(notifications.filter(n => n.id !== notif.id));
    } catch (error) {
      console.error('Failed to mark read', error);
    }
  };

  // Fungsi helper untuk mendapatkan inisial dari nama
  const getInitials = (name?: string) => {
    if (!name) return 'A';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const displayName = user?.name || 'Admin';
  const displayRole = user?.role === 'SuperAdmin' ? 'Super Admin' : user?.role || 'Admin';

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-20">
      
      {/* Kiri: Pencarian Global (Opsional) atau Judul Halaman */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Cari data..."
            className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Kanan: Actions & Profile */}
      <div className="flex items-center gap-6">
        
        {/* Tombol Lihat Website */}
        <Link 
          href="/" 
          target="_blank"
          className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Lihat Website</span>
        </Link>

        {/* Garis Pemisah */}
        <div className="w-px h-6 bg-slate-200"></div>

        {/* Notifikasi */}
        <div className="relative" ref={notifRef}>
          <button 
            onClick={() => setShowNotif(!showNotif)}
            className={`relative p-1.5 rounded-lg transition-colors focus:outline-none ${showNotif ? 'bg-slate-100 text-slate-700' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
          >
            <Bell className="w-5 h-5" />
            {/* Badge Notifikasi Aktif */}
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500 ring-2 ring-white"></span>
              </span>
            )}
          </button>

          {/* Dropdown Notifikasi */}
          {showNotif && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden transform opacity-100 scale-100 transition-all origin-top-right">
              <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <h3 className="font-semibold text-slate-800 text-sm">Notifikasi</h3>
                {unreadCount > 0 && (
                  <button onClick={markAllAsRead} className="text-xs font-medium text-emerald-600 hover:text-emerald-700">
                    Tandai semua dibaca
                  </button>
                )}
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.length > 0 ? (
                  <ul className="divide-y divide-slate-100">
                    {notifications.map(notif => (
                      <li key={notif.id}>
                        <button 
                          onClick={() => markAsRead(notif)}
                          className={`w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors ${notif.unread ? 'bg-emerald-50/30' : ''}`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <p className={`text-sm ${notif.unread ? 'font-semibold text-slate-800' : 'font-medium text-slate-600'}`}>
                              {notif.title}
                            </p>
                            {notif.unread && <span className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 mt-1.5"></span>}
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{notif.desc}</p>
                          <p className="text-[10px] text-slate-400 mt-1">{notif.time}</p>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-8 text-center text-slate-500">
                    <CheckCircle2 className="w-8 h-8 mx-auto text-slate-300 mb-2" />
                    <p className="text-sm">Tidak ada notifikasi baru</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Profil Admin */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-semibold text-slate-800">{displayName}</div>
            <div className="text-xs text-slate-500">{displayRole}</div>
          </div>
          <div className="w-9 h-9 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold">
            {getInitials(user?.name)}
          </div>
        </div>
        
      </div>
    </header>
  );
}
