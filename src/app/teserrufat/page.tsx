import type { Metadata } from "next";
import Image from "next/image";
import {
  Wheat,
  Stethoscope,
  Droplets,
  Truck,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Təsərrüfatımız",
  description:
    "Qarabağlı Farm — heyvanların saxlanma şəraiti, otlaqlar, qidalanma və keyfiyyətə nəzarət prosesi.",
};

const processSteps = [
  {
    icon: Wheat,
    title: "Yem seçimi",
    description:
      "Yalnız təbii və keyfiyyətli yemlər. Süni əlavələr və hormon istifadə olunmur.",
  },
  {
    icon: Stethoscope,
    title: "Baytarlıq nəzarəti",
    description:
      "Daimi veterinar müayinə və profilaktik tədbirlər. Sağlamlığa tam nəzarət.",
  },
  {
    icon: Droplets,
    title: "Sanitariya",
    description:
      "Təmizlik və sanitariya standartlarına ciddi riayət. Ekoloji təmiz mühit.",
  },
  {
    icon: Truck,
    title: "Çatdırılma",
    description:
      "Keyfiyyətin qorunması ilə çatdırılma. Şəffaf və etibarlı logistika.",
  },
];

export default function TeserrufatPage() {
  return (
    <>
      {/* Başlıq */}
      <section
        className="bg-[var(--light-gray)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
        aria-labelledby="teserrufat-basliq"
      >
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1
              id="teserrufat-basliq"
              className="text-4xl font-bold tracking-tight text-[var(--deep-green)] sm:text-5xl"
            >
              Təsərrüfatımız
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--graphite)]">
              Şərait, keyfiyyət və nəzarət
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Təsvir */}
      <section
        className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="tesvir"
      >
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2
              id="tesvir"
              className="text-3xl font-bold tracking-tight text-[var(--deep-green)] sm:text-4xl"
            >
              Şərait və qidalanma
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-[var(--graphite)]">
              <p>
                Heyvanlarımız təbii otlaqlarda saxlanılır. Geniş ərazi,
                təmiz hava və təbii işıq — sağlam inkişaf üçün əsas
                şərtlərdir. Süni mühit və sıx saxlanma yoxdur.
              </p>
              <p>
                Qidalanma yalnız təbii yemlər əsasında təşkil olunur. Ot,
                yem bitkiləri və keyfiyyətli yem əlavələri. Veterinar
                tövsiyələrinə uyğun balanslaşdırılmış rasion.
              </p>
              <p>
                Sanitariya və təmizlikə daim diqqət yetirilir. Bu
                yanaşma həm heyvanların sağlamlığını, həm də məhsulun
                keyfiyyətini təmin edir.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Qalereya */}
      <section
        className="bg-[var(--light-gray)] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="qalereya"
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2
              id="qalereya"
              className="text-center text-3xl font-bold tracking-tight text-[var(--deep-green)] sm:text-4xl"
            >
              Qalereya
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--graphite)]">
              Təsərrüfatımızdan görüntülər
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ScrollReveal key={i} delay={i <= 3 ? (i as 0 | 1 | 2 | 3) : 0}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[var(--border)] transition-transform hover:scale-[1.02]">
                  <Image
                    src="https://images.unsplash.com/photo-1500595046743-cd271d694d30"
                    alt={`Qarabağlı Farm — görüntü ${i}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Keyfiyyətə nəzarət prosesi */}
      <section
        className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="keyfiyyet"
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2
              id="keyfiyyet"
              className="text-center text-3xl font-bold tracking-tight text-[var(--deep-green)] sm:text-4xl"
            >
              Keyfiyyətə nəzarət prosesi
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--graphite)]">
              Hər addımda keyfiyyət və etibarlıq
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index as 0 | 1 | 2 | 3 | 4}>
                <article
                  className="relative rounded-xl border border-[var(--border)] bg-[var(--light-gray)]/50 p-8 transition-all hover:border-[var(--deep-green)]/30 hover:shadow-[var(--shadow-card)]"
                  aria-labelledby={`step-${index}`}
                >
                  <span className="absolute -top-2 left-8 bg-[var(--deep-green)] px-3 py-1 text-sm font-semibold text-white rounded">
                    {index + 1}
                  </span>
                  <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--deep-green)]/10 text-[var(--deep-green)]">
                    <step.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3
                    id={`step-${index}`}
                    className="mt-6 text-xl font-semibold text-[var(--graphite)]"
                  >
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {step.description}
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
