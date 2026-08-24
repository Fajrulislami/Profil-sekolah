"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Newspaper, 
  Trophy, 
  Building2, 
  GraduationCap, 
  MessageSquare, 
  Users, 
  LogOut 
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/admin/dashboard' },
  { name: 'Berita & Info', icon: Newspaper, href: '/admin/dashboard/berita' },
  { name: 'Data Prestasi', icon: Trophy, href: '/admin/dashboard/prestasi' },
  { name: 'Fasilitas', icon: Building2, href: '/admin/dashboard/fasilitas' },
  { name: 'PPDB', icon: GraduationCap, href: '/admin/dashboard/ppdb' },
  { name: 'Pesan Masuk', icon: MessageSquare, href: '/admin/dashboard/pesan' },
  { name: 'Pengguna', icon: Users, href: '/admin/dashboard/pengguna' },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col min-h-screen fixed left-0 top-0">
      {/* Logo Area */}
      <div className="h-16 flex items-center px-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">SM</span>
          </div>
          <span className="font-bold text-slate-800">Admin CMS</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-2">
          Menu Utama
        </div>
        
        {menuItems.map((item) => {
          const Icon = item.icon;
          // Deteksi menu aktif dinamis
          const isActive = 
            item.href === '/admin/dashboard' 
              ? pathname === '/admin/dashboard' 
              : pathname.startsWith(item.href);
          
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? 'bg-emerald-50 text-emerald-700' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Area / Logout */}
      <div className="p-4 border-t border-slate-200">
        <Link 
          href="/admin/login"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-rose-600 hover:bg-rose-50 transition-colors w-full"
        >
          <LogOut className="w-5 h-5" />
          Keluar (Logout)
        </Link>
      </div>
    </aside>
  );
}
