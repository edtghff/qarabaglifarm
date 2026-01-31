import Link from "next/link";
import Image from "next/image";
import {
  Leaf,
  ShieldCheck,
  Sparkles,
  Droplets,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  {
    icon: Leaf,
    title: "Təbii yemlər",
    description:
      "Heyvanlarımız yalnız təbii yemlərlə qidalanır. Süni əlavələr və hormon istifadə etmirik.",
  },
  {
    icon: ShieldCheck,
    title: "Sanitar nəzarət",
    description:
      "Veterinar nəzarəti və sanitariya standartlarına ciddi riayət. Keyfiyyətə tam nəzarət.",
  },
  {
    icon: Sparkles,
    title: "Cins heyvandarlıq",
    description:
      "Seçilmiş cinslərin yetişdirilməsi və nəsillik istiqamətin inkişafı.",
  },
  {
    icon: Droplets,
    title: "Ekoloji təmizlik",
    description:
      "Təbiətə hörmət. Ekoloji təmiz şəraitdə yetişdirilən məhsullar.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex min-h-[90vh] flex-col justify-end bg-[var(--deep-green)] px-4 pb-20 pt-24 sm:min-h-screen sm:px-6 sm:pb-28 lg:px-8"
        aria-label="Əsas bölmə"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&q=80"
            alt="Qarabağlı Farm — otlaq və təbii mühit"
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

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Təbiətdən süfrənizə: Təmiz və Sağlam Qida
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
              Qarabağlı Farm — təbii şəraitdə qoyun yetişdirən, ekoloji təmiz və
              keyfiyyətli ət məhsulları təqdim edən müasir kənd təsərrüfatı
              müəssisəsidir. Veterinar nəzarəti və şəffaflıq əsas prinsipimizdir.
            </p>
            <div className="mt-10">
              <Link
                href="/elaqe"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-[var(--deep-green)] shadow-lg transition-all hover:bg-white/95 hover:shadow-xl active:scale-[0.98]"
                aria-label="Əlaqə saxla"
              >
                Əlaqə saxla
                <ArrowRight size={20} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Haqqımızda Preview */}
      <section
        className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="haqqimizda-preview"
      >
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2
              id="haqqimizda-preview"
              className="text-3xl font-bold tracking-tight text-[var(--deep-green)] sm:text-4xl"
            >
              Haqqımızda
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--graphite)]">
              Qarabağlı Farm — qoyunçuluq və ekoloji təmiz ət məhsulları
              istehsalı ilə məşğul olan müasir kənd təsərrüfatı müəssisəsidir.
              Keyfiyyətə nəzarət, veterinar standartları və dayanıqlı inkişaf
              bizim əsas dəyərlərimizdir. Ailəvi təsərrüfatdan strateji aqrar
              brendə — şəffaflıq və peşəkarlıqla.
            </p>
            <Link
              href="/haqqimizda"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-[var(--deep-green)] transition-colors hover:text-[var(--deep-green-hover)]"
            >
              Daha ətraflı
              <ArrowRight size={18} strokeWidth={2} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Dəyərlər */}
      <section
        className="bg-[var(--light-gray)] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="deyerler"
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2
              id="deyerler"
              className="text-center text-3xl font-bold tracking-tight text-[var(--deep-green)] sm:text-4xl"
            >
              Dəyərlər
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--graphite)]">
              Fəaliyyətimizin əsasında duran prinsiplər
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item, index) => (
              <ScrollReveal key={item.title} delay={index as 0 | 1 | 2 | 3 | 4}>
                <article
                  className="group rounded-xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-card)] transition-all hover:border-[var(--deep-green)]/30 hover:shadow-[var(--shadow-soft)]"
                  aria-labelledby={`value-${index}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--deep-green)]/10 text-[var(--deep-green)] transition-colors group-hover:bg-[var(--deep-green)] group-hover:text-white">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3
                    id={`value-${index}`}
                    className="mt-6 text-xl font-semibold text-[var(--graphite)]"
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {item.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Məhsullar Preview */}
      <section
        className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="mehsullar-preview"
      >
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2
              id="mehsullar-preview"
              className="text-3xl font-bold tracking-tight text-[var(--deep-green)] sm:text-4xl"
            >
              Məhsullarımız
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--graphite)]">
              Seçilmiş qoyun cinsləri və yüksək keyfiyyətli ət məhsulları.
              Təbii dad, ekoloji təmizlik və tam keyfiyyətə nəzarət — hər
              məhsulumuzun zəmanəti.
            </p>
            <Link
              href="/mehsullar"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-[var(--deep-green)] transition-colors hover:text-[var(--deep-green-hover)]"
            >
              Bütün məhsullar
              <ArrowRight size={18} strokeWidth={2} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
