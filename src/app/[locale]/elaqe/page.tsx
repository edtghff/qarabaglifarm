"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Instagram, Send } from "lucide-react";
import { supabaseBrowser } from "@/lib/supabaseClient";
import ScrollReveal from "@/components/ScrollReveal";

const PHONE_MANAGEMENT = "+994503774478";
const PHONE_DELIVERY = "+994703774478";

export default function ElaqePage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const t = useTranslations("contact");
  const tFooter = useTranslations("footer");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const data = new FormData(e.currentTarget);
      const payload = {
        name: (data.get("name") as string) || "",
        phone: (data.get("phone") as string) || "",
        email: (data.get("email") as string) || "",
        message: (data.get("message") as string) || "",
      };
      await supabaseBrowser.from("submissions").insert(payload);
      setStatus("sent");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Supabase submission error", err);
      setStatus("error");
    }
  };

  return (
    <>
      {/* Header */}
      <section
        className="bg-[var(--light-gray)] px-4 py-10 sm:px-6 sm:py-16 lg:py-24 lg:px-8"
        aria-labelledby="contact-title"
      >
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1
              id="contact-title"
              className="text-4xl font-bold tracking-tight text-[var(--deep-green)] sm:text-5xl"
            >
              {t("title")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--graphite)]">
              {t("subtitle")}
            </p>
            <p className="mt-3 text-sm font-medium text-[var(--deep-green)]">
              {tFooter("deliveryNote")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section
        className="bg-white px-4 py-12 sm:px-6 sm:py-20 lg:py-28 lg:px-8"
        aria-labelledby="contact-form"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <ScrollReveal>
              <div>
                <h2
                  id="contact-form"
                  className="text-2xl font-bold tracking-tight text-[var(--deep-green)] sm:text-3xl"
                >
                  {t("formTitle")}
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-6"
                  aria-label={t("formTitle")}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[var(--graphite)]"
                    >
                      {t("name")}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-2 min-h-[48px] w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--graphite)] transition-colors focus:border-[var(--deep-green)] focus:outline-none focus:ring-2 focus:ring-[var(--deep-green)]/20"
                      placeholder={t("namePlaceholder")}
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[var(--graphite)]"
                    >
                      {t("phone")}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="mt-2 min-h-[48px] w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--graphite)] transition-colors focus:border-[var(--deep-green)] focus:outline-none focus:ring-2 focus:ring-[var(--deep-green)]/20"
                      placeholder={t("phonePlaceholder")}
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--graphite)]"
                    >
                      {t("email")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 min-h-[48px] w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--graphite)] transition-colors focus:border-[var(--deep-green)] focus:outline-none focus:ring-2 focus:ring-[var(--deep-green)]/20"
                      placeholder={t("emailPlaceholder")}
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--graphite)]"
                    >
                      {t("message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="mt-2 min-h-[120px] w-full resize-y rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--graphite)] transition-colors focus:border-[var(--deep-green)] focus:outline-none focus:ring-2 focus:ring-[var(--deep-green)]/20"
                      placeholder={t("messagePlaceholder")}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[var(--deep-green)] px-8 py-4 font-semibold text-white transition-all hover:bg-[var(--deep-green-hover)] disabled:opacity-70 active:scale-[0.98] sm:w-auto"
                    aria-label={t("send")}
                  >
                    {status === "sending"
                      ? t("sending")
                      : status === "sent"
                        ? t("sent")
                        : t("send")}
                    {status !== "sending" && status !== "sent" && (
                      <Send size={20} strokeWidth={2} />
                    )}
                  </button>
                  {status === "sent" && (
                    <p className="text-sm text-green-600">{t("successMsg")}</p>
                  )}
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[var(--deep-green)] sm:text-3xl">
                  {t("contactInfo")}
                </h2>
                <p className="mt-2 text-sm font-medium text-[var(--muted)]">
                  {tFooter("deliveryNote")}
                </p>
                <ul className="mt-8 space-y-6">
                  <li>
                    <a
                      href={`tel:${PHONE_MANAGEMENT.replace(/\s/g, "")}`}
                      className="flex min-h-[48px] items-start gap-4 py-2 text-[var(--graphite)] transition-colors hover:text-[var(--deep-green)] active:opacity-80"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--deep-green)]/10 text-[var(--deep-green)]">
                        <Phone size={22} strokeWidth={1.5} />
                      </span>
                      <div>
                        <span className="block text-sm font-medium text-[var(--muted)]">
                          {tFooter("phoneManagement")}
                        </span>
                        <span className="mt-1 block font-medium">+994 50 377 44 78</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://wa.me/${PHONE_DELIVERY.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[48px] items-start gap-4 py-2 text-[var(--graphite)] transition-colors hover:text-[var(--deep-green)] active:opacity-80"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--deep-green)]/10 text-[var(--deep-green)]">
                        <Phone size={22} strokeWidth={1.5} />
                      </span>
                      <div>
                        <span className="block text-sm font-medium text-[var(--muted)]">
                          {tFooter("phoneDelivery")}
                        </span>
                        <span className="mt-1 block font-medium">+994 70 377 44 78</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@qarabaglifarm.az"
                      className="flex min-h-[48px] items-start gap-4 py-2 text-[var(--graphite)] transition-colors hover:text-[var(--deep-green)] active:opacity-80"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--deep-green)]/10 text-[var(--deep-green)]">
                        <Mail size={22} strokeWidth={1.5} />
                      </span>
                      <div>
                        <span className="block text-sm font-medium text-[var(--muted)]">
                          {t("emailLabel")}
                        </span>
                        <span className="mt-1 block font-medium">
                          info@qarabaglifarm.az
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[48px] items-start gap-4 py-2 text-[var(--graphite)] transition-colors hover:text-[var(--deep-green)] active:opacity-80"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--deep-green)]/10 text-[var(--deep-green)]">
                        <Instagram size={22} strokeWidth={1.5} />
                      </span>
                      <div>
                        <span className="block text-sm font-medium text-[var(--muted)]">
                          Instagram
                        </span>
                        <span className="mt-1 block font-medium">@qarabaglifarm</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-start gap-4 text-[var(--graphite)]">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--deep-green)]/10 text-[var(--deep-green)]">
                        <MapPin size={22} strokeWidth={1.5} />
                      </span>
                      <div>
                        <span className="block text-sm font-medium text-[var(--muted)]">
                          {t("addressLabel")}
                        </span>
                        <span className="mt-1 block font-medium">{t("address")}</span>
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="mt-12 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--light-gray)]">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.125692534693!2d49.84212289999999!3d40.395468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d654fb8bdd5%3A0x102b4394fc58601a!2zTWlyyZlsaSBRYcWfcWF5IGvDvMOnyZlzaSAxMzI!5e1!3m2!1sen!2saz!4v1770807105356!5m2!1sen!2saz"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                      className="h-full w-full border-0"
                      aria-label={t("mapPlaceholder")}
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
