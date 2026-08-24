"use client";

import React, { useState } from 'react';
import { Search, Edit, Trash2, ShieldAlert, Shield, ShieldCheck } from 'lucide-react';

const dummyUsers = [
  {
    id: 1,
    name: "Ahmad S.Pd",
    email: "ahmad@sekolah.sch.id",
    role: "SuperAdmin",
    isActive: true,
    lastLogin: "Baru saja",
  },
  {
    id: 2,
    name: "Budi Humas",
    email: "humas@sekolah.sch.id",
    role: "AdminHumas",
    isActive: true,
    lastLogin: "Kemarin, 09:30",
  },
  {
    id: 3,
    name: "Siti Aminah PPDB",
    email: "ppdb@sekolah.sch.id",
    role: "AdminPPDB",
    isActive: false,
    lastLogin: "20 Agustus 2026",
  },
];

export default function PenggunaTable() {
  const [users, setUsers] = useState(dummyUsers);

  const toggleStatus = (id: number) => {
    setUsers(users.map(u => u.id === id ? { ...u, isActive: !u.isActive } : u));
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "SuperAdmin":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-violet-100 text-violet-700 rounded-lg border border-violet-200">
            <ShieldAlert className="w-3.5 h-3.5" /> Super Admin
          </span>
        );
      case "AdminHumas":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-lg border border-blue-200">
            <Shield className="w-3.5 h-3.5" /> Admin Humas
          </span>
        );
      case "AdminPPDB":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-amber-100 text-amber-700 rounded-lg border border-amber-200">
            <ShieldCheck className="w-3.5 h-3.5" /> Admin PPDB
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {/* Filter & Pencarian */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Cari nama atau email admin..."
            className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select className="block w-full sm:w-auto py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white">
            <option value="">Semua Peran (Role)</option>
            <option value="SuperAdmin">Super Admin</option>
            <option value="AdminHumas">Admin Humas</option>
            <option value="AdminPPDB">Admin PPDB</option>
          </select>
        </div>
      </div>

      {/* Tabel Data */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-semibold text-slate-500">
              <tr>
                <th className="px-6 py-4 w-12 text-center">No</th>
                <th className="px-6 py-4">Nama & Email</th>
                <th className="px-6 py-4">Peran (Role)</th>
                <th className="px-6 py-4 text-center">Status Akun</th>
                <th className="px-6 py-4">Terakhir Login</th>
                <th className="px-6 py-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((user, i) => (
                <tr key={user.id} className={`transition-colors ${user.isActive ? 'hover:bg-slate-50' : 'bg-slate-50/50'}`}>
                  <td className="px-6 py-4 text-center text-slate-400">{i + 1}</td>
                  <td className="px-6 py-4">
                    <p className={`font-semibold ${user.isActive ? 'text-slate-800' : 'text-slate-500 line-through decoration-slate-300'}`}>{user.name}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{user.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    {getRoleBadge(user.role)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => toggleStatus(user.id)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                        user.isActive ? 'bg-emerald-500' : 'bg-slate-300'
                      }`}
                      title={user.isActive ? 'Nonaktifkan Akun' : 'Aktifkan Akun'}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          user.isActive ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                    <p className="text-[10px] mt-1 font-medium text-slate-500">
                      {user.isActive ? 'Aktif' : 'Diblokir'}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-slate-500 text-xs font-medium">
                    {user.lastLogin}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        title="Edit Pengguna"
                        className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        title="Hapus Pengguna"
                        className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        onClick={() => alert(`Yakin ingin menghapus ${user.name}?`)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
