"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl bg-[#333333] rounded-full px-12 py-5 shadow-2xl">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl lg:text-2xl text-white whitespace-nowrap">
          <span className="text-red-600">AS</span> Rehabilitasyon
        </Link>

        {/* Links */}
        <div className="flex gap-8 items-center">
          <Link
            href="/as-nedir"
            className="text-white hover:text-red-400 transition-colors duration-200"
          >
            AS Nedir?
          </Link>
          <Link
            href="/semptomlari"
            className="text-white hover:text-red-400 transition-colors duration-200"
          >
            Semptomları
          </Link>
          <Link
            href="/tani-kriterleri"
            className="text-white hover:text-red-400 transition-colors duration-200"
          >
            Tanı Kriterleri
          </Link>
          <Link
            href="/tedavi-egzersizleri"
            className="text-white hover:text-red-400 transition-colors duration-200"
          >
            Tedavi Egzersizleri
          </Link>
        </div>
      </div>
    </nav>
  );
}
