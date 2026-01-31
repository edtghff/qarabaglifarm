import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Ana səhifə" },
  { href: "/haqqimizda", label: "Haqqımızda" },
  { href: "/teserrufat", label: "Təsərrüfat" },
  { href: "/mehsullar", label: "Məhsullar" },
  { href: "/elaqe", label: "Əlaqə" },
];

export default function Footer() {
  return (
    <footer
      className="bg-[var(--deep-green)] text-white"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div>
            <Link href="/" className="inline-flex rounded-lg bg-white p-2 transition-opacity hover:opacity-90">
              <Image
                src="/logo.jpeg"
                alt="Qarabağlı Farm"
                width={160}
                height={50}
                className="h-10 w-auto object-contain sm:h-12"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/90">
              Qoyunçuluq və ekoloji təmiz ət məhsulları istehsalı. Təbiətdən
              süfrənizə — təmiz və sağlam qida.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Sürətli keçidlər
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/90 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Əlaqə məlumatları
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="tel:+994518866362"
                  className="flex items-center gap-3 text-sm text-white/90 transition-colors hover:text-white"
                >
                  <Phone size={18} strokeWidth={1.5} />
                  +994 51 886 63 62
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@qarabaglifarm.az"
                  className="flex items-center gap-3 text-sm text-white/90 transition-colors hover:text-white"
                >
                  <Mail size={18} strokeWidth={1.5} />
                  info@qarabaglifarm.az
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-sm text-white/90">
                  <MapPin size={18} strokeWidth={1.5} />
                  Bakı ş. Nəsimi r-nu, Mirəli Qaşqay küç.
                </span>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/90 transition-colors hover:text-white"
                >
                  <Instagram size={18} strokeWidth={1.5} />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>© 2026 Qarabağlı Farm. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  );
}
