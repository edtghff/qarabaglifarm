"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabaseBrowser } from "@/lib/supabaseClient";

type ProductRow = {
  id: string;
  name: string;
  description?: string | null;
  price?: string | null;
  unit?: string | null;
  image_url?: string | null;
};

type GalleryRow = {
  id: string;
  image_url: string;
  note?: string | null;
};

export function DynamicProductsSection() {
  const [products, setProducts] = useState<ProductRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const { data, error } = await supabaseBrowser
          .from("products")
          .select("id,name,description,price,unit,image_url")
          .order("created_at", { ascending: false });

        if (error) {
          // eslint-disable-next-line no-console
          console.error("Supabase products error", error.message);
          return;
        }

        if (!cancelled && data) {
          setProducts(data as ProductRow[]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading && !products.length) return null;
  if (!products.length) return null;

  return (
    <section
      className="bg-white px-4 py-12 sm:px-6 sm:py-20 lg:py-24 lg:px-8"
      aria-labelledby="dynamic-products"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="dynamic-products"
          className="text-2xl font-bold tracking-tight text-[var(--deep-green)] sm:text-3xl md:text-4xl"
        >
          Məhsul siyahısı
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-[var(--graphite)] sm:mt-4 sm:text-base">
          Hazırda aktiv olan məhsulların siyahısı. Siyahı admin panelindən mütəmadi olaraq
          yenilənir.
        </p>

        <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.id}
              className="flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--light-gray)]/40 p-5 shadow-[var(--shadow-card)]"
            >
              {p.image_url && (
                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg bg-[var(--border)]">
                  <Image
                    src={p.image_url}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}

              <h3 className="text-lg font-semibold text-[var(--graphite)]">{p.name}</h3>

              {p.description && (
                <p className="mt-2 text-sm text-[var(--muted)]">{p.description}</p>
              )}

              {(p.price || p.unit) && (
                <p className="mt-3 text-sm font-semibold text-[var(--deep-green)]">
                  {p.price && <span>{p.price}</span>}
                  {p.price && p.unit && <span> · </span>}
                  {p.unit && <span>{p.unit}</span>}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DynamicGallerySection() {
  const [images, setImages] = useState<GalleryRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const { data, error } = await supabaseBrowser
          .from("gallery_images")
          .select("id,image_url,note")
          .order("created_at", { ascending: false });

        if (error) {
          // eslint-disable-next-line no-console
          console.error("Supabase gallery error", error.message);
          return;
        }

        if (!cancelled && data) {
          setImages(data as GalleryRow[]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading && !images.length) return null;
  if (!images.length) return null;

  return (
    <>
      {images.map((img) => (
        <div
          key={img.id}
          className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[var(--border)]"
        >
          <Image
            src={img.image_url}
            alt={img.note || "Qarabağlılar Farm qalereya şəkli"}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ))}
    </>
  );
}