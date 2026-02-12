import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://qarabaglifarm.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Qarabağlılar Farm | Təbiətdən süfrənizə: Təmiz və Sağlam Qida",
    template: "%s | Qarabağlılar Farm",
  },
  description:
    "Qarabağlılar Farm — qoyunçuluq və ekoloji təmiz ət məhsulları istehsalı ilə məşğul olan müasir kənd təsərrüfatı müəssisəsi. Keyfiyyətə nəzarət, veterinar standartları. Təbii ətdən süfrənizə.",
  keywords: [
    "Qarabağlılar Farm",
    "qoyunçuluq",
    "ət məhsulları",
    "ekoloji qida",
    "Azərbaycan",
    "qoyun əti",
    "təbii ət",
    "Bakı",
  ],
  authors: [{ name: "Qarabağlılar Farm", url: BASE_URL }],
  creator: "Qarabağlılar Farm",
  openGraph: {
    type: "website",
    locale: "az_AZ",
    siteName: "Qarabağlılar Farm",
    url: BASE_URL,
    title: "Qarabağlılar Farm | Təbiətdən süfrənizə: Təmiz və Sağlam Qida",
    description:
      "Qarabağlılar Farm — qoyunçuluq və ekoloji təmiz ət məhsulları istehsalı. Təbii ətdən süfrənizə.",
    images: [{ url: "/aboutimg.jpeg", width: 1200, height: 630, alt: "Qarabağlılar Farm" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qarabağlılar Farm | Təbiətdən süfrənizə: Təmiz və Sağlam Qida",
    description: "Qarabağlılar Farm — ekoloji təmiz ət məhsulları. Təbii ətdən süfrənizə.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: "/az",
    languages: {
      "az-AZ": "/az",
      "en-US": "/en",
      "ru-RU": "/ru",
    },
  },
  category: "agriculture",
  other: {
    "geo.region": "AZ",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a3c34",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Qarabağlılar Farm",
  description:
    "Qarabağlılar Farm — qoyunçuluq və ekoloji təmiz ət məhsulları istehsalı. Təbiətdən süfrənizə: təmiz və sağlam qida.",
  url: BASE_URL,
  logo: `${BASE_URL}/logow.png`,
  image: `${BASE_URL}/aboutimg.jpeg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bakı",
    addressRegion: "Nəsimi",
    streetAddress: "Mirəli Qaşqay küç.",
    addressCountry: "AZ",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+994-50-377-44-78",
    contactType: "customer service",
    areaServed: "AZ",
  },
  sameAs: ["https://instagram.com/qarabaglifarm"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
