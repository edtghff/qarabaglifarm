import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Eye, Shield, Leaf, BarChart3 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: t("title"),
    description: t("registration.text"),
  };
}

const missionKeys = [
  { icon: Eye, titleKey: "transparency", descKey: "transparencyDesc" },
  { icon: Shield, titleKey: "quality", descKey: "qualityDesc" },
  { icon: Leaf, titleKey: "sustainability", descKey: "sustainabilityDesc" },
] as const;

const statKeys = ["annualProduction", "animalCount", "employees"] as const;

const statValueKeys: Record<(typeof statKeys)[number], string> = {
  annualProduction: "annualProductionValue",
  animalCount: "animalCountValue",
  employees: "employeesValue",
};

export default async function HaqqimizdaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <>
      {/* Header */}
      <section
        className="bg-[var(--light-gray)] px-4 py-10 sm:px-6 sm:py-16 lg:py-24 lg:px-8"
        aria-labelledby="about-title"
      >
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1
              id="about-title"
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
                src="/aboutimg.jpeg"
                alt="Qarabağlılar Farm — ofis və brend"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1200px"
                priority
              />
              <div className="absolute inset-0 bg-[var(--deep-green)]/30" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* History */}
      <section
        className="bg-white px-4 py-12 sm:px-6 sm:py-20 lg:py-28 lg:px-8"
        aria-labelledby="history"
      >
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2
              id="history"
              className="text-2xl font-bold tracking-tight text-[var(--deep-green)] sm:text-3xl md:text-4xl"
            >
              {t("history.title")}
            </h2>
            <div className="mt-6 space-y-6 text-base leading-relaxed text-[var(--graphite)] sm:mt-10 sm:space-y-8 sm:text-lg sm:leading-loose">
              <p>{t("history.p1")}</p>
              <p>{t("history.p2")}</p>
              <p>{t("history.p3")}</p>
              {t("history.p4") && <p>{t("history.p4")}</p>}
              {t("history.p5") && <p>{t("history.p5")}</p>}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Image block 2 */}
      <section className="bg-[var(--light-gray)] px-4 py-8 sm:py-12 lg:px-8" aria-hidden>
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src="https://images.pexels.com/photos/22937058/pexels-photo-22937058.jpeg?auto=compress&cs=tinysrgb&w=700&q=80"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[var(--deep-green)]/35" />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src="https://images.pexels.com/photos/31291006/pexels-photo-31291006.jpeg?auto=compress&cs=tinysrgb&w=700&q=80"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[var(--deep-green)]/35" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section
        className="bg-[var(--light-gray)] px-4 py-12 sm:px-6 sm:py-20 lg:py-28 lg:px-8"
        aria-labelledby="mission"
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2
              id="mission"
              className="text-center text-2xl font-bold tracking-tight text-[var(--deep-green)] sm:text-3xl md:text-4xl"
            >
              {t("mission.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-[var(--graphite)] sm:mt-6 sm:text-lg">
              {t("mission.subtitle")}
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-3">
            {missionKeys.map((item, index) => (
              <ScrollReveal key={item.titleKey} delay={index as 0 | 1 | 2}>
                <article
                  className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)] transition-all hover:border-[var(--deep-green)]/30 hover:shadow-[var(--shadow-soft)] sm:p-8"
                  aria-labelledby={`mission-${index}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--deep-green)]/10 text-[var(--deep-green)]">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3
                    id={`mission-${index}`}
                    className="mt-6 text-xl font-semibold text-[var(--graphite)]"
                  >
                    {t(`mission.${item.titleKey}`)}
                  </h3>
                  <p className="mt-3 text-[var(--muted)] leading-relaxed">
                    {t(`mission.${item.descKey}`)}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section
        className="bg-white px-4 py-12 sm:px-6 sm:py-20 lg:py-28 lg:px-8"
        aria-labelledby="registration"
      >
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2
              id="registration"
              className="text-2xl font-bold tracking-tight text-[var(--deep-green)] sm:text-3xl md:text-4xl"
            >
              {t("registration.title")}
            </h2>
            <div className="mt-6 space-y-6 text-base leading-relaxed text-[var(--graphite)] sm:mt-10 sm:space-y-8 sm:text-lg sm:leading-loose">
              <p>{t("registration.text")}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section
        className="bg-[var(--deep-green)] px-4 py-12 sm:px-6 sm:py-20 lg:py-28 lg:px-8"
        aria-labelledby="stats"
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 id="stats" className="sr-only">
              {t("stats.annualProduction")}
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {statKeys.map((key, index) => (
              <ScrollReveal key={key} delay={index as 0 | 1 | 2}>
                <div className="text-center text-white">
                  <BarChart3
                    className="mx-auto mb-4 opacity-80"
                    size={40}
                    strokeWidth={1.5}
                  />
                  <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {t(`stats.${statValueKeys[key]}`)}
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/80">
                    {t(`stats.${key}`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
