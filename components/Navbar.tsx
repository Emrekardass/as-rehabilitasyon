"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/as-nedir", label: "AS Nedir?" },
    { href: "/semptomlari", label: "Semptomları" },
    { href: "/tani-kriterleri", label: "Tanı Kriterleri" },
    { href: "/tedavi-egzersizleri", label: "Tedavi Egzersizleri" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      {/* Main Bar */}
      <div className="bg-[#333333] rounded-full px-6 md:px-12 py-2 shadow-2xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
              <Image
                src="/tedavi-egzersizleri/aslogo.png"
                alt="AS Logo"
                fill
                sizes="(max-width: 768px) 64px, 80px"
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl lg:text-2xl text-white whitespace-nowrap">
              <span className="text-red-600">AS</span> Rehabilitasyon
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-red-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hamburger Button - Mobile Only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white focus:outline-none"
            aria-label="Menüyü aç/kapat"
          >
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="bg-[#333333] rounded-2xl shadow-2xl px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-full text-white hover:text-red-400 hover:bg-white/5 transition-all duration-200 py-3 px-4 rounded-xl text-lg font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
