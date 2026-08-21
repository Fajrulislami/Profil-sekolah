"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/tentang" },
   {
      name: "Jenjang",
      href: "#",
      isDropdown: true,
      dropdownItems: [
        {
          name: "TK Terpadu",
          href: "/jenjang/tk",
        },
        {
          name: "SD Terpadu",
          href: "/jenjang/sd",
        },
        {
          name: "SMP Terpadu",
          href: "/jenjang/smp",
        },
        {
          name: "Pesantren Rabbani",
          href: "/jenjang/pesantren",
        },
      ],
   },
    { name: "Fasilitas", href: "/fasilitas" },
    { name: "Prestasi", href: "/prestasi" },
    { name: "Berita", href: "/berita" },
  ];

  return (
    <>
      {/* Container Utama Navbar */}
      <nav 
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl ${
          isScrolled 
            ? "top-4 bg-white/95 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-md border-transparent" 
            : "top-6 bg-white shadow-lg border-gray-100"
        } rounded-full border`}
      >
        <div className="flex items-center justify-between pl-3 pr-2 py-2 h-16">
          
          {/* KIRI: Logo & Ikon */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            {/* Lingkaran Logo Hijau dengan Ikon Edukasi dan Animasi Rotasi saat di-hover */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white shadow-md transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-9-5m9 5l9-5" />
              </svg>
            </div>
            {/* Teks Logo */}
            <span className="hidden lg:block font-extrabold text-gray-900 text-sm tracking-tight group-hover:text-brand-primary transition-colors duration-300">
              YPI Cordova
            </span>
          </Link>

          {/* TENGAH: Link Navigasi Desktop */}
          <div className="hidden md:flex items-center justify-center gap-2 flex-grow">
            {menuItems.map((item) => {
              const isActive = pathname === item.href || (item.isDropdown && pathname.startsWith(item.dropdownItems![0].href.split('/')[1]));

              return item.isDropdown ? (
                <div key={item.name} className="relative group px-1">
                  <button className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[14px] font-semibold transition-all duration-300 ${
                    isActive 
                      ? "bg-brand-50 text-brand-primary" 
                      : "text-gray-600 hover:bg-brand-50/50 hover:text-brand-primary hover:scale-105"
                  }`}>
                    {item.name}
                    <svg className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Panel Dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 overflow-hidden">
                    <div className="p-2 space-y-1">
                      {item.dropdownItems?.map((dropItem) => (
                        <Link 
                          key={dropItem.name} 
                          href={dropItem.href}
                          className={`block px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200 ${
                            pathname === dropItem.href 
                              ? "bg-brand-primary text-white shadow-md" 
                              : "text-gray-600 hover:bg-brand-50 hover:text-brand-primary hover:pl-5"
                          }`}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div key={item.name} className="px-1">
                  <Link
                    href={item.href}
                    className={`block px-4 py-2 rounded-full text-[14px] font-semibold transition-all duration-300 ${
                      isActive 
                        ? "bg-brand-50 text-brand-primary" 
                        : "text-gray-600 hover:bg-brand-50/50 hover:text-brand-primary hover:scale-105"
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              )
            })}
          </div>

          {/* KANAN: Tombol Hitam Melengkung */}
          <div className="flex items-center gap-2">
            <div className="hidden md:block shrink-0">
              <Link href="/ppdb">
                <button className="relative overflow-hidden bg-emerald-600 hover:bg-emerald-500 text-white text-[14px] font-bold py-2.5 px-6 rounded-full group transition-all duration-300 hover:shadow-[0_8px_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5">
                  <span className="relative z-10">PPDB Online</span>
                  {/* Efek kilauan saat di-hover pada tombol */}
                  <div className="absolute inset-0 h-full w-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[shine_1s_ease-in-out]"></div>
                </button>
              </Link>
            </div>

            {/* TOMBOL HAMBURGER (Mobile) */}
            <div className="md:hidden flex items-center pr-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-full p-2 text-gray-600 hover:bg-brand-50 hover:text-brand-primary focus:outline-none transition-colors"
              >
                {isOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MENU DROP-DOWN UNTUK MOBILE */}
      <div 
        className={`fixed top-24 left-1/2 -translate-x-1/2 w-[95%] bg-white rounded-3xl shadow-2xl border border-gray-100 z-40 transition-all duration-300 overflow-hidden md:hidden ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="p-4 space-y-2 max-h-[75vh] overflow-y-auto">
          {menuItems.map((item) => (
            item.isDropdown ? (
              <div key={item.name} className="space-y-1">
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="w-full flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-bold text-gray-800 hover:bg-brand-50 hover:text-brand-primary transition-all"
                >
                  {item.name}
                  <svg className={`w-5 h-5 transition-transform duration-300 ${isMobileDropdownOpen ? "rotate-180 text-brand-primary" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${isMobileDropdownOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-2 ml-4 mb-2 flex flex-col space-y-1 border-l-2 border-brand-100">
                    {item.dropdownItems?.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        href={dropItem.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-xl px-4 py-2.5 text-[14px] font-semibold transition-all ${
                          pathname === dropItem.href 
                            ? "text-brand-primary bg-brand-50" 
                            : "text-gray-500 hover:text-brand-primary hover:bg-brand-50 hover:pl-6"
                        }`}
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)} 
                className={`block rounded-2xl px-4 py-3 text-[15px] font-bold transition-all ${
                  pathname === item.href 
                    ? "bg-brand-50 text-brand-primary" 
                    : "text-gray-800 hover:bg-brand-50 hover:text-brand-primary"
                }`}
              >
                {item.name}
              </Link>
            )
          ))}
          
          <div className="pt-4 mt-2 border-t border-gray-100">
            <Link href="/ppdb" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-black text-white py-3.5 rounded-full text-center text-[15px] font-bold shadow-lg hover:shadow-xl hover:bg-gray-900 transition-all active:scale-95">
                Hubungi Kami
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}