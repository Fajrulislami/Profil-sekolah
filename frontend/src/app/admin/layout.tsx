import "@/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin CMS | Profil Sekolah",
  description: "Dashboard Administrasi Website Profil Sekolah",
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-slate-50 min-h-screen text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
