import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { DynamicGallerySection } from "@/components/DynamicContentClient";
import { Wheat, Stethoscope, Droplets, Truck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "farm" });
  return {
    title: t("title"),
    description: t("conditions.p1"),
  };
}

const processKeys = [
  { icon: Wheat, titleKey: "feed", descKey: "feedDesc" },
  { icon: Stethoscope, titleKey: "veterinary", descKey: "veterinaryDesc" },
  { icon: Droplets, titleKey: "sanitation", descKey: "sanitationDesc" },
  { icon: Truck, titleKey: "delivery", descKey: "deliveryDesc" },
] as const;

const GALLERY_IMAGES = [
  "https://images.pexels.com/photos/880867/pexels-photo-880867.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
  "https://images.pexels.com/photos/880870/pexels-photo-880870.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
  "https://images.pexels.com/photos/14635224/pexels-photo-14635224.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
  "https://images.pexels.com/photos/14635232/pexels-photo-14635232.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
  "https://images.pexels.com/photos/880877/pexels-photo-880877.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
  "https://images.pexels.com/photos/5667612/pexels-photo-5667612.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
];

export default async function TeserrufatPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("farm");

  return (
    <>
      {/* Header */}
      <section
        className="bg-[var(--light-gray)] px-4 py-10 sm:px-6 sm:py-16 lg:py-24 lg:px-8"
        aria-labelledby="farm-title"
      >
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1
              id="farm-title"
              className="text-2xl font-bold tracking-tight text-[var(--deep-green)] sm:text-4xl md:text-5xl"
            >
              {t("title")}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[var(--graphite)] sm:mt-6 sm:text-lg">
              {t("subtitle")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-white px-4 py-8 sm:py-12 lg:px-8" aria-hidden>
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="relative aspect-[3/1] overflow-hidden rounded-xl">
              <Image
                src="https://images.pexels.com/photos/6622956/pexels-photo-6622956.jpeg?auto=compress&cs=tinysrgb&w=1400&q=80"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1400px"
              />
              <div className="absolute inset-0 bg-[var(--deep-green)]/50" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Conditions */}
      <section
        className="bg-white px-4 py-12 sm:px-6 sm:py-20 lg:py-28 lg:px-8"
        aria-labelledby="conditions"
      >
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2
              id="conditions"
              className="text-2xl font-bold tracking-tight text-[var(--deep-green)] sm:text-3xl md:text-4xl"
            >
              {t("conditions.title")}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-[var(--graphite)] sm:mt-8 sm:space-y-6 sm:text-lg">
              <p>{t("conditions.p1")}</p>
              <p>{t("conditions.p2")}</p>
              <p>{t("conditions.p3")}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Image strip */}
      <section className="bg-[var(--light-gray)] px-4 py-8 sm:py-12 lg:px-8" aria-hidden>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
            <ScrollReveal delay={0}>
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                <Image
                  src="https://images.pexels.com/photos/355441/pexels-photo-355441.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[var(--deep-green)]/30" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                <Image
                  src="https://images.pexels.com/photos/732547/pexels-photo-732547.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[var(--deep-green)]/30" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                <Image
                  src="https://images.pexels.com/photos/22937057/pexels-photo-22937057.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[var(--deep-green)]/30" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        className="bg-[var(--light-gray)] px-4 py-12 sm:px-6 sm:py-20 lg:py-28 lg:px-8"
        aria-labelledby="gallery"
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2
              id="gallery"
              className="text-center text-2xl font-bold tracking-tight text-[var(--deep-green)] sm:text-3xl md:text-4xl"
            >
              {t("gallery.title")}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[var(--graphite)] sm:mt-4 sm:text-base">
              {t("gallery.subtitle")}
            </p>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {GALLERY_IMAGES.map((src, i) => (
              <ScrollReveal key={i} delay={i <= 2 ? (i as 0 | 1 | 2) : 0}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[var(--border)] transition-transform hover:scale-[1.02]">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </ScrollReveal>
            ))}

            <DynamicGallerySection />
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="bg-white px-4 py-12 sm:px-6 sm:py-20 lg:py-28 lg:px-8"
        aria-labelledby="process"
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2
              id="process"
              className="text-center text-2xl font-bold tracking-tight text-[var(--deep-green)] sm:text-3xl md:text-4xl"
            >
              {t("process.title")}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[var(--graphite)] sm:mt-4 sm:text-base">
              {t("process.subtitle")}
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {processKeys.map((step, index) => (
              <ScrollReveal key={step.titleKey} delay={index as 0 | 1 | 2 | 3 | 4}>
                <article
                  className="relative rounded-xl border border-[var(--border)] bg-[var(--light-gray)]/50 p-6 transition-all hover:border-[var(--deep-green)]/30 hover:shadow-[var(--shadow-card)] sm:p-8"
                  aria-labelledby={`step-${index}`}
                >
                  <span className="absolute -top-2 left-8 rounded bg-[var(--deep-green)] px-3 py-1 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--deep-green)]/10 text-[var(--deep-green)]">
                    <step.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3
                    id={`step-${index}`}
                    className="mt-6 text-xl font-semibold text-[var(--graphite)]"
                  >
                    {t(`process.${step.titleKey}`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {t(`process.${step.descKey}`)}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
