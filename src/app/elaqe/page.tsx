"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ElaqePage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Placeholder: real form would submit to API
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  };

  return (
    <>
      {/* Başlıq */}
      <section
        className="bg-[var(--light-gray)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
        aria-labelledby="elaqe-basliq"
      >
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1
              id="elaqe-basliq"
              className="text-4xl font-bold tracking-tight text-[var(--deep-green)] sm:text-5xl"
            >
              Əlaqə
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--graphite)]">
              Bizimlə əlaqə saxlayın — cavab verməyə hazırıq
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section
        className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="elaqe-form"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Form */}
            <ScrollReveal>
              <div>
                <h2
                  id="elaqe-form"
                  className="text-2xl font-bold tracking-tight text-[var(--deep-green)] sm:text-3xl"
                >
                  Əlaqə formu
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-6"
                  aria-label="Əlaqə formu"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[var(--graphite)]"
                    >
                      Ad
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-2 w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--graphite)] transition-colors focus:border-[var(--deep-green)] focus:outline-none focus:ring-2 focus:ring-[var(--deep-green)]/20"
                      placeholder="Adınız"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[var(--graphite)]"
                    >
                      Telefon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="mt-2 w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--graphite)] transition-colors focus:border-[var(--deep-green)] focus:outline-none focus:ring-2 focus:ring-[var(--deep-green)]/20"
                      placeholder="+994 XX XXX XX XX"
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--graphite)]"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--graphite)] transition-colors focus:border-[var(--deep-green)] focus:outline-none focus:ring-2 focus:ring-[var(--deep-green)]/20"
                      placeholder="email@example.com"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--graphite)]"
                    >
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="mt-2 w-full resize-y rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--graphite)] transition-colors focus:border-[var(--deep-green)] focus:outline-none focus:ring-2 focus:ring-[var(--deep-green)]/20"
                      placeholder="Mesajınız..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--deep-green)] px-8 py-4 font-semibold text-white transition-all hover:bg-[var(--deep-green-hover)] disabled:opacity-70 sm:w-auto"
                    aria-label="Göndər"
                  >
                    {status === "sending" ? (
                      "Göndərilir..."
                    ) : status === "sent" ? (
                      "Göndərildi"
                    ) : (
                      <>
                        Göndər
                        <Send size={20} strokeWidth={2} />
                      </>
                    )}
                  </button>
                  {status === "sent" && (
                    <p className="text-sm text-green-600">
                      Mesajınız uğurla göndərildi. Tezliklə sizinlə əlaqə saxlayacağıq.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-sm text-red-600">
                      Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.
                    </p>
                  )}
                </form>
              </div>
            </ScrollReveal>

            {/* Əlaqə məlumatları */}
            <ScrollReveal delay={1}>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[var(--deep-green)] sm:text-3xl">
                  Əlaqə məlumatları
                </h2>
                <ul className="mt-8 space-y-6">
                  <li>
                    <a
                      href="tel:+994518866362"
                      className="flex items-start gap-4 text-[var(--graphite)] transition-colors hover:text-[var(--deep-green)]"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--deep-green)]/10 text-[var(--deep-green)]">
                        <Phone size={22} strokeWidth={1.5} />
                      </span>
                      <div>
                        <span className="block text-sm font-medium text-[var(--muted)]">
                          Telefon
                        </span>
                        <span className="mt-1 block font-medium">
                          +994 51 886 63 62
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/994518866362"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 text-[var(--graphite)] transition-colors hover:text-[var(--deep-green)]"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--deep-green)]/10 text-[var(--deep-green)]">
                        <Phone size={22} strokeWidth={1.5} />
                      </span>
                      <div>
                        <span className="block text-sm font-medium text-[var(--muted)]">
                          WhatsApp
                        </span>
                        <span className="mt-1 block font-medium">
                          +994 51 886 63 62
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@qarabaglifarm.az"
                      className="flex items-start gap-4 text-[var(--graphite)] transition-colors hover:text-[var(--deep-green)]"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--deep-green)]/10 text-[var(--deep-green)]">
                        <Mail size={22} strokeWidth={1.5} />
                      </span>
                      <div>
                        <span className="block text-sm font-medium text-[var(--muted)]">
                          Email
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
                      className="flex items-start gap-4 text-[var(--graphite)] transition-colors hover:text-[var(--deep-green)]"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--deep-green)]/10 text-[var(--deep-green)]">
                        <Instagram size={22} strokeWidth={1.5} />
                      </span>
                      <div>
                        <span className="block text-sm font-medium text-[var(--muted)]">
                          Instagram
                        </span>
                        <span className="mt-1 block font-medium">
                          @qarabaglifarm
                        </span>
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
                          Ünvan
                        </span>
                        <span className="mt-1 block font-medium">
                          Bakı ş. Nəsimi r-nu, Mirəli Qaşqay küç.
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>

                {/* Xəritə placeholder */}
                <div className="mt-12 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--light-gray)]">
                  <div
                    className="flex aspect-video items-center justify-center text-[var(--muted)]"
                    aria-hidden
                  >
                    <div className="text-center">
                      <MapPin size={48} strokeWidth={1} className="mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Google Maps xəritəsi</p>
                      <p className="mt-1 text-xs">
                        Xəritə inteqrasiyası ünvan əlavə edildikdə aktivləşəcək
                      </p>
                    </div>
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
