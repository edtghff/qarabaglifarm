import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://qarabaglifarm.vercel.app";

const PUBLIC_PATHS = ["", "/haqqimizda", "/teserrufat", "/mehsullar", "/elaqe"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routing.locales.flatMap<MetadataRoute.Sitemap[number]>((locale) =>
    PUBLIC_PATHS.map((path) => {
      const url =
        path === ""
          ? `${BASE_URL}/${locale}`
          : `${BASE_URL}/${locale}${path}`;

      return {
        url,
        lastModified: now,
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.8,
      };
    }),
  );
}

