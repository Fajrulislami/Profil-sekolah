import React from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminNavbar from '@/components/admin/AdminNavbar';
import { getUserFromToken } from '@/utils/auth-util';

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUserFromToken();

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar - Fixed width 64 (256px) */}
      <AdminSidebar role={user?.role} />

      {/* Main Content Area - Offset by sidebar width */}
      <div className="flex-1 flex flex-col pl-64">
        {/* Top Navbar */}
        <AdminNavbar user={user} />

        {/* Page Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
