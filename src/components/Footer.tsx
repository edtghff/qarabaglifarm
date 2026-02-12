"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const PHONE_MANAGEMENT = "+994503774478";
const PHONE_DELIVERY = "+994703774478";

const quickLinkPaths = [
  { href: "/", key: "home" },
  { href: "/haqqimizda", key: "about" },
  { href: "/teserrufat", key: "farm" },
  { href: "/mehsullar", key: "products" },
  { href: "/elaqe", key: "contact" },
] as const satisfies readonly { href: string; key: (typeof navKeys)[number] }[];

const navKeys = ["home", "about", "farm", "products", "contact"] as const;

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer
      className="bg-[var(--deep-green)] text-white"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-3 lg:gap-16">
          <div>
            <Link
              href="/"
              className="inline-flex h-12 min-h-[44px] min-w-[44px] items-center justify-center overflow-visible rounded-lg bg-white p-2 transition-opacity hover:opacity-90 active:opacity-80 sm:h-14"
            >
              <Image
                src="/logow.png"
                alt="Qarabağlılar Farm"
                width={280}
                height={88}
                className="h-full w-auto origin-center scale-[1.3] object-contain sm:scale-[1.4]"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/90">
              {t("description")}
            </p>
            <p className="mt-3 text-sm font-medium text-white/80">
              {t("deliveryNote")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              {t("quickLinks")}
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinkPaths.map(({ href, key }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block py-2.5 text-sm text-white/90 transition-colors hover:text-white active:text-white"
                  >
                    {tNav(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              {t("contactInfo")}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${PHONE_MANAGEMENT.replace(/\s/g, "")}`}
                  className="flex min-h-[44px] items-center gap-3 py-2 text-sm text-white/90 transition-colors hover:text-white active:text-white"
                >
                  <Phone size={18} strokeWidth={1.5} />
                  <span>
                    <span className="block text-xs text-white/70">{t("phoneManagement")}</span>
                    <span className="font-medium">+994 50 377 44 78</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${PHONE_DELIVERY.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] items-center gap-3 py-2 text-sm text-white/90 transition-colors hover:text-white active:text-white"
                >
                  <Phone size={18} strokeWidth={1.5} />
                  <span>
                    <span className="block text-xs text-white/70">{t("phoneDelivery")}</span>
                    <span className="font-medium">+994 70 377 44 78</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@qarabaglifarm.az"
                  className="flex min-h-[44px] items-center gap-3 py-2 text-sm text-white/90 transition-colors hover:text-white active:text-white"
                >
                  <Mail size={18} strokeWidth={1.5} />
                  info@qarabaglifarm.az
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-sm text-white/90">
                  <MapPin size={18} strokeWidth={1.5} />
                  {t("address")}
                </span>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] items-center gap-3 py-2 text-sm text-white/90 transition-colors hover:text-white active:text-white"
                >
                  <Instagram size={18} strokeWidth={1.5} />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
