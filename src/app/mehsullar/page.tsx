import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, Shield, Award, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Məhsullarımız",
  description:
    "Qarabağlılar Farm — qoyun cinsləri və ət məhsulları. Təbii dad, ekoloji təmizlik, yüksək keyfiyyət.",
};

const meatFeatures = [
  {
    icon: Leaf,
    title: "Təbii dad",
    description:
      "Təbii yemlər və açıq otlaq saxlanması ətə unikal, təmiz dad verir. Süni əlavələr yoxdur.",
  },
  {
    icon: Shield,
    title: "Ekoloji təmizlik",
    description:
      "Veterinar nəzarəti və sanitariya standartlarına uyğun istehsal. Etibarlı məhsul.",
  },
  {
    icon: Award,
    title: "Yüksək keyfiyyət",
    description:
      "Seçilmiş cinslər, keyfiyyətə nəzarət prosesi. Hər məhsul üçün zəmanət.",
  },
];

const sheepBreeds = [
  {
    name: "Yerli cinslər",
    description:
      "Regionun iqliminə uyğunlaşmış, sağlam və məhsuldar cinslər. Ailəvi təsərrüfat təcrübəsi əsasında seçilmiş heyvanlar.",
  },
  {
    name: "Keyfiyyətli nəsillik",
    description:
      "Cins seçimi və nəsillik işi ilə məhsuldarlığın və ət keyfiyyətinin yüksəldilməsi. Strateji yanaşma.",
  },
];

export default function MehsullarPage() {
  return (
    <>
      {/* Başlıq */}
      <section
        className="bg-[var(--light-gray)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
        aria-labelledby="mehsullar-basliq"
      >
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1
              id="mehsullar-basliq"
              className="text-4xl font-bold tracking-tight text-[var(--deep-green)] sm:text-5xl"
            >
              Məhsullarımız
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--graphite)]">
              Qoyun cinsləri və ət məhsulları — keyfiyyət və etibarlıq
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Qoyun cinsləri */}
      <section
        className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="cinsler"
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2
              id="cinsler"
              className="text-3xl font-bold tracking-tight text-[var(--deep-green)] sm:text-4xl"
            >
              Qoyun cinsləri
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--graphite)]">
              Seçilmiş cinslər və nəsillik işi əsasında keyfiyyətli məhsul
              istehsalı
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {sheepBreeds.map((breed, index) => (
              <ScrollReveal key={breed.name} delay={index as 0 | 1}>
                <article
                  className="rounded-xl border border-[var(--border)] bg-[var(--light-gray)]/30 p-8 shadow-[var(--shadow-card)] transition-all hover:border-[var(--deep-green)]/30 hover:shadow-[var(--shadow-soft)]"
                  aria-labelledby={`breed-${index}`}
                >
                  <h3
                    id={`breed-${index}`}
                    className="text-xl font-semibold text-[var(--graphite)]"
                  >
                    {breed.name}
                  </h3>
                  <p className="mt-4 leading-relaxed text-[var(--muted)]">
                    {breed.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ət məhsulları */}
      <section
        className="bg-[var(--light-gray)] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="et-mehsullari"
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2
              id="et-mehsullari"
              className="text-3xl font-bold tracking-tight text-[var(--deep-green)] sm:text-4xl"
            >
              Ət məhsulları
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--graphite)]">
              Yüksək keyfiyyətli, ekoloji təmiz qoyun əti. Xüsusiyyətlər:
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {meatFeatures.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index as 0 | 1 | 2}>
                <article
                  className="rounded-xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-card)] transition-all hover:border-[var(--deep-green)]/30 hover:shadow-[var(--shadow-soft)]"
                  aria-labelledby={`meat-${index}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--deep-green)]/10 text-[var(--deep-green)] transition-colors hover:bg-[var(--deep-green)] hover:text-white">
                    <feature.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3
                    id={`meat-${index}`}
                    className="mt-6 text-xl font-semibold text-[var(--graphite)]"
                  >
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {feature.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-[var(--deep-green)] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="elaqe-cta"
      >
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2
              id="elaqe-cta"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Topdan və pərakəndə sifariş üçün əlaqə saxlayın
            </h2>
            <p className="mt-6 text-lg text-white/90">
              Keyfiyyətli məhsullarımız haqqında məlumat və sifariş üçün bizimlə
              əlaqə saxlayın.
            </p>
            <Link
              href="/elaqe"
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-[var(--deep-green)] transition-all hover:bg-white/95 hover:shadow-lg active:scale-[0.98]"
            >
              Əlaqə saxla
              <ArrowRight size={20} strokeWidth={2} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
