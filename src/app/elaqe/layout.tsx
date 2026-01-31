import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Əlaqə",
  description:
    "Qarabağlılar Farm ilə əlaqə saxlayın. Telefon, email, ünvan və əlaqə formu.",
};

export default function ElaqeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
