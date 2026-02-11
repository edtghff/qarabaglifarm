"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Menu, X, Instagram, Globe } from "lucide-react";

const INSTAGRAM_URL = "https://instagram.com";

const navKeys = ["home", "about", "farm", "products", "contact"] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("nav");

  const navLinks = navKeys.map((key) => ({
    href: key === "home" ? "/" : `/${key === "about" ? "haqqimizda" : key === "farm" ? "teserrufat" : key === "products" ? "mehsullar" : "elaqe"}`,
    label: t(key),
  }));

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 transition-shadow"
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:gap-6 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative flex h-10 shrink-0 items-center overflow-visible transition-opacity hover:opacity-90 sm:h-12"
          aria-label="Qarabağlılar Farm"
        >
          <Image
            src="/logow.png"
            alt="Qarabağlılar Farm"
            width={280}
            height={88}
            className="h-full w-auto origin-left scale-[1.2] object-contain object-left sm:scale-[1.4]"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex lg:gap-8"
          aria-label={t("menuAria")}
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
          <div className="ml-2 flex items-center gap-2 border-l border-[var(--border)] pl-4">
            <LanguageSwitcher />
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--graphite)] transition-colors hover:text-[var(--deep-green)]"
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
          </div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-[var(--graphite)] active:bg-[var(--light-gray)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={t("openMenu")}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--border)] bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col" aria-label={t("menuAria")}>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="min-h-[48px] flex items-center border-b border-[var(--border)] py-3 font-medium text-[var(--graphite)] hover:text-[var(--deep-green)] active:bg-[var(--light-gray)] last:border-0"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[48px] items-center gap-2 py-3 font-medium text-[var(--graphite)] hover:text-[var(--deep-green)] active:bg-[var(--light-gray)]"
            >
              <Instagram size={20} /> Instagram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function LanguageSwitcher() {
  const pathname = usePathname();
  const locales = [
    { code: "az", label: "AZ" },
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
  ] as const;

  return (
    <div className="flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--light-gray)]/50 p-1">
      <Globe size={16} className="hidden text-[var(--muted)] sm:block" aria-hidden />
      {locales.map(({ code, label }) => (
        <Link
          key={code}
          href={pathname || "/"}
          locale={code}
          className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-md px-2 text-sm font-medium text-[var(--graphite)] transition-colors hover:bg-white hover:text-[var(--deep-green)]"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
