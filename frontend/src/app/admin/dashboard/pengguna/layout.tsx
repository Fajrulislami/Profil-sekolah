import React from 'react';
import { getUserFromToken } from '@/utils/auth-util';
import AccessDenied from '@/components/admin/AccessDenied';

export default async function PenggunaLayout({ children }: { children: React.ReactNode }) {
  const user = await getUserFromToken();

  if (user?.role !== 'SuperAdmin') {
    return <AccessDenied message="Hanya Super Admin yang memiliki izin untuk melihat dan mengelola daftar pengguna pada halaman ini." />;
  }

  return <>{children}</>;
}
