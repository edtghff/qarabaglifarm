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

export const metadata: Metadata = {
  title: {
    default: "Qarabağlı Farm | Təbiətdən süfrənizə — Təmiz və Sağlam Qida",
    template: "%s | Qarabağlı Farm",
  },
  description:
    "Qarabağlı Farm — qoyunçuluq və ekoloji təmiz ət məhsulları istehsalı ilə məşğul olan müasir kənd təsərrüfatı müəssisəsi. Keyfiyyətə nəzarət, veterinar standartları.",
  keywords: ["Qarabağlı Farm", "qoyunçuluq", "ət məhsulları", "ekoloji qida", "Azərbaycan"],
  openGraph: {
    type: "website",
    locale: "az_AZ",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        <Header />
        <main id="main-content" role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
