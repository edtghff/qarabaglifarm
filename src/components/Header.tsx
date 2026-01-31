"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";

const navLinks = [
  { href: "/", label: "Ana səhifə" },
  { href: "/haqqimizda", label: "Haqqımızda" },
  { href: "/teserrufat", label: "Təsərrüfat" },
  { href: "/mehsullar", label: "Məhsullar" },
  { href: "/elaqe", label: "Əlaqə" },
];

const INSTAGRAM_URL = "https://instagram.com";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 transition-shadow"
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative flex shrink-0 items-center transition-opacity hover:opacity-90"
          aria-label="Qarabağlılar Farm — Ana səhifə"
        >
          <Image
            src="/logo.jpeg"
            alt="Qarabağlılar Farm"
            width={180}
            height={56}
            className="h-10 w-auto object-contain sm:h-12"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Əsas menyu"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[15px] font-medium text-[var(--graphite)] transition-colors hover:text-[var(--deep-green)]"
            >
              {label}
            </Link>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--graphite)] transition-colors hover:text-[var(--deep-green)]"
            aria-label="Instagram"
          >
            <Instagram size={20} strokeWidth={1.5} />
          </a>
        </nav>

        <button
          type="button"
          className="flex p-2 text-[var(--graphite)] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Menyunu aç"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--border)] bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobil menyu">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-medium text-[var(--graphite)] hover:text-[var(--deep-green)]"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium text-[var(--graphite)] hover:text-[var(--deep-green)]"
            >
              <Instagram size={20} /> Instagram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
