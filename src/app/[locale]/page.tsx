import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  Leaf,
  ShieldCheck,
  Sparkles,
  Droplets,
  ArrowRight,
  Phone,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const valueKeys = [
  { icon: Leaf, titleKey: "naturalFeed", descKey: "naturalFeedDesc" },
  { icon: ShieldCheck, titleKey: "sanitary", descKey: "sanitaryDesc" },
  { icon: Sparkles, titleKey: "breeding", descKey: "breedingDesc" },
  { icon: Droplets, titleKey: "eco", descKey: "ecoDesc" },
] as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tAbout = await getTranslations("about");

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex min-h-[70vh] flex-col justify-end bg-[var(--deep-green)] px-4 pb-8 pt-20 sm:min-h-[80vh] sm:px-6 sm:pb-28 sm:pt-24 lg:px-8"
        aria-label={t("hero.title")}
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/880867/pexels-photo-880867.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt={t("hero.title")}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-[var(--deep-green)]/75"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl xl:text-7xl">
              {t("hero.title")}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:mt-6 sm:text-lg md:text-xl">
              {t("hero.subtitle")}
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href="/elaqe"
                className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-base font-semibold text-[var(--deep-green)] shadow-lg transition-all hover:bg-white/95 hover:shadow-xl active:scale-[0.98] sm:px-8"
                aria-label={t("hero.cta")}
              >
                {t("hero.cta")}
                <ArrowRight size={20} strokeWidth={2} />
              </Link>
              <p className="text-sm text-white/85 sm:text-base">
                {t("hero.trustBadge")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section
        className="border-b border-[var(--border)] bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
        aria-labelledby="home-stats"
      >
        <div className="mx-auto max-w-5xl">
          <h2 id="home-stats" className="sr-only">
            {tAbout("stats.annualProduction")}
          </h2>
          <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3 sm:gap-8">
            <ScrollReveal delay={0}>
              <p className="text-2xl font-bold tabular-nums text-[var(--deep-green)] sm:text-3xl">
                {tAbout("stats.annualProductionValue")}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--muted)] sm:text-sm">
                {tAbout("stats.annualProduction")}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <p className="text-2xl font-bold tabular-nums text-[var(--deep-green)] sm:text-3xl">
                {tAbout("stats.animalCountValue")}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--muted)] sm:text-sm">
                {tAbout("stats.animalCount")}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p className="text-2xl font-bold tabular-nums text-[var(--deep-green)] sm:text-3xl">
                {tAbout("stats.employeesValue")}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--muted)] sm:text-sm">
                {tAbout("stats.employees")}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section
        className="bg-[var(--light-gray)] px-4 py-12 sm:px-6 sm:py-20 lg:py-24 lg:px-8"
        aria-labelledby="about-preview"
      >
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--deep-green)]">
              {t("aboutPreview.lead")}
            </p>
            <h2
              id="about-preview"
              className="mt-2 text-2xl font-bold tracking-tight text-[var(--graphite)] sm:text-3xl md:text-4xl"
            >
              {t("aboutPreview.title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--graphite)] sm:mt-6 sm:text-lg">
              {t("aboutPreview.text")}
            </p>
            <Link
              href="/haqqimizda"
              className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[var(--deep-green)] px-6 py-3 font-semibold text-white transition-all hover:bg-[var(--deep-green-hover)] active:scale-[0.98] sm:px-8"
            >
              {t("aboutPreview.link")}
              <ArrowRight size={18} strokeWidth={2} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Values / Why us */}
      <section
        className="bg-white px-4 py-12 sm:px-6 sm:py-20 lg:py-28 lg:px-8"
        aria-labelledby="values"
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2
              id="values"
              className="text-center text-2xl font-bold tracking-tight text-[var(--deep-green)] sm:text-3xl md:text-4xl"
            >
              {t("values.title")}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-base text-[var(--graphite)] sm:mt-4 sm:text-lg">
              {t("values.subtitle")}
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {valueKeys.map((item, index) => (
              <ScrollReveal key={item.titleKey} delay={index as 0 | 1 | 2 | 3 | 4}>
                <article
                  className="group rounded-xl border border-[var(--border)] bg-[var(--light-gray)]/50 p-6 shadow-[var(--shadow-card)] transition-all hover:border-[var(--deep-green)]/40 hover:shadow-[var(--shadow-soft)] sm:p-8"
                  aria-labelledby={`value-${index}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--deep-green)]/10 text-[var(--deep-green)] transition-colors group-hover:bg-[var(--deep-green)] group-hover:text-white">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3
                    id={`value-${index}`}
                    className="mt-6 text-xl font-semibold text-[var(--graphite)]"
                  >
                    {t(`values.${item.titleKey}`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {t(`values.${item.descKey}`)}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section
        className="bg-[var(--light-gray)] px-4 py-12 sm:px-6 sm:py-20 lg:py-24 lg:px-8"
        aria-labelledby="products-preview"
      >
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2
              id="products-preview"
              className="text-2xl font-bold tracking-tight text-[var(--deep-green)] sm:text-3xl md:text-4xl"
            >
              {t("productsPreview.title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--graphite)] sm:mt-6 sm:text-lg">
              {t("productsPreview.text")}
            </p>
            <p className="mt-4 text-sm font-medium text-[var(--graphite)]">
              {t("productsPreview.cta")}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/mehsullar"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[var(--deep-green)] px-6 py-3 font-semibold text-white transition-all hover:bg-[var(--deep-green-hover)] active:scale-[0.98] sm:px-8"
              >
                {t("productsPreview.link")}
                <ArrowRight size={18} strokeWidth={2} />
              </Link>
              <a
                href="tel:+994703774478"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border-2 border-[var(--deep-green)] px-6 py-3 font-semibold text-[var(--deep-green)] transition-all hover:bg-[var(--deep-green)] hover:text-white active:scale-[0.98] sm:px-8"
              >
                <Phone size={18} strokeWidth={2} />
                070 377 44 78
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Strip */}
      <section
        className="bg-[var(--deep-green)] px-4 py-12 sm:px-6 sm:py-16 lg:py-20 lg:px-8"
        aria-labelledby="cta-strip"
      >
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2
              id="cta-strip"
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
            >
              {t("ctaStrip.title")}
            </h2>
            <p className="mt-4 text-base text-white/90 sm:mt-6 sm:text-lg">
              {t("ctaStrip.text")}
            </p>
            <Link
              href="/elaqe"
              className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 font-semibold text-[var(--deep-green)] transition-all hover:bg-white/95 hover:shadow-lg active:scale-[0.98] sm:mt-10 sm:px-8"
            >
              {t("ctaStrip.button")}
              <ArrowRight size={20} strokeWidth={2} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
