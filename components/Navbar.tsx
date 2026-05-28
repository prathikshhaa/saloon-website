"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-sm">
      <div className="max-w-[95%] lg:max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <Link href="/" className="text-white text-2xl font-bold tracking-[0.14em]">
          LUXE
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10 focus:outline-none"
          aria-label="Toggle navigation"
        >
          <span className="text-xl">{isOpen ? "✕" : "☰"}</span>
        </button>

        <nav className="hidden md:flex flex-wrap items-center justify-center gap-3 lg:gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-[0.12em] px-4 py-2 rounded-[4px] duration-300 ${
                pathname === link.href ? "bg-[#c8a76d] text-white" : "text-white hover:text-[#c8a76d]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="relative group">
            <button
              className={`text-sm uppercase tracking-[0.12em] px-4 py-2 rounded-[4px] duration-300 ${
                pathname.includes("/gallery") ? "bg-[#c8a76d] text-white" : "text-white hover:text-[#c8a76d]"
              }`}
            >
              Gallery
            </button>
            <div className="absolute top-[45px] left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 bg-black/90 backdrop-blur-xl border border-white/10 rounded-[24px] p-3 w-[220px] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <Link
                href="/gallery/men"
                className="block px-5 py-4 rounded-[16px] text-white uppercase tracking-[0.12em] text-sm hover:bg-[#c8a76d] hover:text-black duration-300"
              >
                Men
              </Link>
              <Link
                href="/gallery/women"
                className="block mt-2 px-5 py-4 rounded-[16px] text-white uppercase tracking-[0.12em] text-sm hover:bg-[#c8a76d] hover:text-black duration-300"
              >
                Women
              </Link>
            </div>
          </div>
        </nav>

        <Link href="/book" className="hidden md:inline-block">
          <button className="bg-[#c8a76d] text-white px-6 py-3 rounded-full uppercase tracking-[0.18em] text-sm font-semibold hover:bg-white hover:text-black hover:scale-105 duration-300">
            BOOK NOW
          </button>
        </Link>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[72px] z-40 bg-black/95 border-t border-white/10 py-4">
          <div className="max-w-[95%] mx-auto flex flex-col gap-3 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-[12px] px-4 py-3 text-base uppercase tracking-[0.14em] duration-300 ${
                  pathname === link.href ? "bg-[#c8a76d] text-white" : "text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/gallery/men"
              onClick={() => setIsOpen(false)}
              className="block rounded-[12px] px-4 py-3 text-base uppercase tracking-[0.14em] text-white hover:bg-white/10 duration-300"
            >
              Gallery — Men
            </Link>
            <Link
              href="/gallery/women"
              onClick={() => setIsOpen(false)}
              className="block rounded-[12px] px-4 py-3 text-base uppercase tracking-[0.14em] text-white hover:bg-white/10 duration-300"
            >
              Gallery — Women
            </Link>
            <Link href="/book" className="block" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-[#c8a76d] text-white px-6 py-3 rounded-full uppercase tracking-[0.18em] text-sm font-semibold hover:bg-white hover:text-black duration-300">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
