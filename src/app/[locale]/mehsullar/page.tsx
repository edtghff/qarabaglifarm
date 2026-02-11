import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { DynamicProductsSection } from "@/components/DynamicContentClient";
import { Leaf, Shield, Award, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

const meatKeys = [
  { icon: Leaf, titleKey: "naturalTaste", descKey: "naturalTasteDesc" },
  { icon: Shield, titleKey: "ecoClean", descKey: "ecoCleanDesc" },
  { icon: Award, titleKey: "highQuality", descKey: "highQualityDesc" },
] as const;

const breedKeys = [
  { nameKey: "local", descKey: "localDesc" },
  { nameKey: "qualityBreeding", descKey: "qualityBreedingDesc" },
] as const;

export default async function MehsullarPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("products");

  return (
    <>
      {/* Header */}
      <section
        className="bg-[var(--light-gray)] px-4 py-10 sm:px-6 sm:py-16 lg:py-24 lg:px-8"
        aria-labelledby="products-title"
      >
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1
              id="products-title"
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

      {/* Image block */}
      <section className="bg-white px-4 py-8 sm:py-12 lg:px-8" aria-hidden>
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="relative aspect-[21/9] overflow-hidden rounded-xl">
              <Image
                src="https://images.pexels.com/photos/14635232/pexels-photo-14635232.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-[var(--deep-green)]/40" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Breeds */}
      <section
        className="bg-white px-4 py-12 sm:px-6 sm:py-20 lg:py-28 lg:px-8"
        aria-labelledby="breeds"
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2
              id="breeds"
              className="text-2xl font-bold tracking-tight text-[var(--deep-green)] sm:text-3xl md:text-4xl"
            >
              {t("breeds.title")}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-[var(--graphite)] sm:mt-4 sm:text-base">
              {t("breeds.subtitle")}
            </p>
          </ScrollReveal>

          <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2">
            {breedKeys.map((breed, index) => (
              <ScrollReveal key={breed.nameKey} delay={index as 0 | 1}>
                <article
                  className="rounded-xl border border-[var(--border)] bg-[var(--light-gray)]/30 p-6 shadow-[var(--shadow-card)] transition-all hover:border-[var(--deep-green)]/30 hover:shadow-[var(--shadow-soft)] sm:p-8"
                  aria-labelledby={`breed-${index}`}
                >
                  <h3
                    id={`breed-${index}`}
                    className="text-xl font-semibold text-[var(--graphite)]"
                  >
                    {t(`breeds.${breed.nameKey}`)}
                  </h3>
                  <p className="mt-4 leading-relaxed text-[var(--muted)]">
                    {t(`breeds.${breed.descKey}`)}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meat */}
      <section
        className="bg-[var(--light-gray)] px-4 py-12 sm:px-6 sm:py-20 lg:py-28 lg:px-8"
        aria-labelledby="meat"
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2
              id="meat"
              className="text-2xl font-bold tracking-tight text-[var(--deep-green)] sm:text-3xl md:text-4xl"
            >
              {t("meat.title")}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-[var(--graphite)] sm:mt-4 sm:text-base">
              {t("meat.subtitle")}
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-3">
            {meatKeys.map((feature, index) => (
              <ScrollReveal key={feature.titleKey} delay={index as 0 | 1 | 2}>
                <article
                  className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)] transition-all hover:border-[var(--deep-green)]/30 hover:shadow-[var(--shadow-soft)] sm:p-8"
                  aria-labelledby={`meat-${index}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--deep-green)]/10 text-[var(--deep-green)] transition-colors hover:bg-[var(--deep-green)] hover:text-white">
                    <feature.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3
                    id={`meat-${index}`}
                    className="mt-6 text-xl font-semibold text-[var(--graphite)]"
                  >
                    {t(`meat.${feature.titleKey}`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {t(`meat.${feature.descKey}`)}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image grid */}
      <section className="bg-white px-4 py-8 sm:py-12 lg:px-8" aria-hidden>
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <ScrollReveal delay={0}>
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src="https://images.pexels.com/photos/880877/pexels-photo-880877.jpeg?auto=compress&cs=tinysrgb&w=900&q=80"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[var(--deep-green)]/30" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src="https://images.pexels.com/photos/22937058/pexels-photo-22937058.jpeg?auto=compress&cs=tinysrgb&w=900&q=80"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[var(--deep-green)]/30" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <DynamicProductsSection />

      {/* CTA */}
      <section
        className="bg-[var(--deep-green)] px-4 py-12 sm:px-6 sm:py-20 lg:py-28 lg:px-8"
        aria-labelledby="cta"
      >
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2
              id="cta"
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
            >
              {t("cta.title")}
            </h2>
            <p className="mt-4 text-base text-white/90 sm:mt-6 sm:text-lg">
              {t("cta.text")}
            </p>
            <Link
              href="/elaqe"
              className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 font-semibold text-[var(--deep-green)] transition-all hover:bg-white/95 hover:shadow-lg active:scale-[0.98] sm:mt-10 sm:px-8"
            >
              {t("cta.button")}
              <ArrowRight size={20} strokeWidth={2} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
