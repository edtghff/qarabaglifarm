import type { Metadata } from "next";
import { Eye, Shield, Leaf, BarChart3 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Haqqımızda",
  description:
    "Qarabağlılar Farm — şirkətin tarixi, missiyası və vizyonu. Şəffaflıq, keyfiyyət və dayanıqlı inkişaf əsas prinsiplərimizdir.",
};

const missionItems = [
  {
    icon: Eye,
    title: "Şəffaflıq",
    description:
      "Heyvanların saxlanma şəraitinin açıq nümayişi. Müştərilərimizə tam əminlik veririk.",
  },
  {
    icon: Shield,
    title: "Keyfiyyət",
    description:
      "Daimi veterinar monitorinq və sanitariya standartlarına ciddi riayət.",
  },
  {
    icon: Leaf,
    title: "Dayanıqlı inkişaf",
    description:
      "Təbii qidalanma və saxlanma üsulları. Ekoloji təmiz istehsal.",
  },
];

const stats = [
  { label: "İllik istehsal", value: "—", suffix: "" },
  { label: "Heyvan sayı", value: "—", suffix: "" },
  { label: "Əməkdaşlar", value: "—", suffix: "" },
];

export default function HaqqimizdaPage() {
  return (
    <>
      {/* Başlıq */}
      <section
        className="bg-[var(--light-gray)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
        aria-labelledby="haqqimizda-basliq"
      >
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1
              id="haqqimizda-basliq"
              className="text-4xl font-bold tracking-tight text-[var(--deep-green)] sm:text-5xl"
            >
              Qarabağlılar Farm haqqında
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--graphite)]">
              Təbiətə hörmət. Keyfiyyətə nəzarət.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Şirkətin tarixi */}
      <section
        className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="tarix"
      >
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2
              id="tarix"
              className="text-3xl font-bold tracking-tight text-[var(--deep-green)] sm:text-4xl"
            >
              Şirkətin tarixi
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-[var(--graphite)]">
              <p>
                Qarabağlılar Farm ailəvi təsərrüfat ənənələri əsasında yaranmış
                müasir kənd təsərrüfatı müəssisəsidir. Kiçik fermer təsərrüfatından
                strukturlu aqrar şirkətə qədər inkişaf yolu keçmişik.
              </p>
              <p>
                Fəaliyyətimiz qoyunçuluq üzərində qurulub. Sağlam heyvanların
                təbii şəraitdə yetişdirilməsi, təbii yemlərlə qidalanması və
                veterinar tələblərinə tam uyğunluq — bizim əsas prinsiplərimizdir.
              </p>
              <p>
                Şirkət özünü sadəcə ferma kimi deyil, gələcəkdə daha geniş
                bazar və ixrac imkanlarına malik aqrar brend kimi
                mövqeləndirir. Strateji düşüncə və peşəkar idarəetmə ilə
                inkişafımızı davam etdiririk.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Missiya və Vizion */}
      <section
        className="bg-[var(--light-gray)] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="missiya"
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2
              id="missiya"
              className="text-center text-3xl font-bold tracking-tight text-[var(--deep-green)] sm:text-4xl"
            >
              Missiya və Vizion
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-[var(--graphite)]">
              Fəaliyyətimizin əsasında duran dəyərlər
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {missionItems.map((item, index) => (
              <ScrollReveal key={item.title} delay={index as 0 | 1 | 2}>
                <article
                  className="rounded-xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-card)] transition-all hover:border-[var(--deep-green)]/30 hover:shadow-[var(--shadow-soft)]"
                  aria-labelledby={`mission-${index}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--deep-green)]/10 text-[var(--deep-green)]">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3
                    id={`mission-${index}`}
                    className="mt-6 text-xl font-semibold text-[var(--graphite)]"
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[var(--muted)] leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rəsmi qeydiyyat və nəzarət */}
      <section
        className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="qeydiyyat"
      >
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2
              id="qeydiyyat"
              className="text-3xl font-bold tracking-tight text-[var(--deep-green)] sm:text-4xl"
            >
              Rəsmi qeydiyyat və nəzarət
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--graphite)]">
              Qarabağlılar Farm qanunvericiliyə uyğun fəaliyyət göstərir. Müəssisənin
              dövlət qeydiyyatı, veterinar nəzarəti və sanitariya standartlarına
              riayət bizim üçün prioritetdir. Müştərilərimizə rəsmi və şəffaf
              xidmət təqdim edirik.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Statistik blok */}
      <section
        className="bg-[var(--deep-green)] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="statistika"
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2
              id="statistika"
              className="sr-only"
            >
              Statistika
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index as 0 | 1 | 2}>
                <div className="text-center text-white">
                  <BarChart3
                    className="mx-auto mb-4 opacity-80"
                    size={40}
                    strokeWidth={1.5}
                  />
                  <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/80">
                    {stat.label}
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
