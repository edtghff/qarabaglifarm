"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Phone, ImageIcon, PlusCircle, Trash2, Inbox } from "lucide-react";
import { supabaseBrowser } from "@/lib/supabaseClient";

type Submission = {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  created_at: string;
};

type Product = {
  id: string;
  name: string;
  description?: string;
  price?: string;
  unit?: string;
  image_url?: string;
};

type GalleryImage = {
  id: string;
  image_url: string;
  note?: string;
};

async function uploadImageToSupabase(file: File, folder: "products" | "gallery") {
  const ext = file.name.split(".").pop() || "jpg";
  const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const { error } = await supabaseBrowser.storage.from("media").upload(path, file, {
    cacheControl: "3600",
    upsert: false,
  });

  if (error) {
    // eslint-disable-next-line no-console
    console.error("Supabase upload error", error.message);
    return undefined;
  }

  const { data } = supabaseBrowser.storage.from("media").getPublicUrl(path);
  return data?.publicUrl;
}

export default function AdminPage() {
  const tContact = useTranslations("contact");
  const [authorized, setAuthorized] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [tab, setTab] = useState<"submissions" | "content">("submissions");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);

  const [productDraft, setProductDraft] = useState({
    name: "",
    description: "",
    price: "",
    unit: "",
    imageUrl: "",
  });
  const [galleryDraft, setGalleryDraft] = useState({
    imageUrl: "",
    note: "",
  });
  const [productFile, setProductFile] = useState<File | null>(null);
  const [galleryFile, setGalleryFile] = useState<File | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const flag = window.localStorage.getItem("qarabaglilarfarm_admin_ok");
    if (flag === "1") {
      setAuthorized(true);
    }
  }, []);

  useEffect(() => {
    const load = async () => {
      const { data: subs } = await supabaseBrowser
        .from("submissions")
        .select("id,name,phone,email,message,created_at")
        .order("created_at", { ascending: false });
      const { data: prods } = await supabaseBrowser
        .from("products")
        .select("id,name,description,price,unit,image_url")
        .order("created_at", { ascending: false });
      const { data: imgs } = await supabaseBrowser
        .from("gallery_images")
        .select("id,image_url,note")
        .order("created_at", { ascending: false });
      if (subs) setSubmissions(subs as Submission[]);
      if (prods) setProducts(prods as Product[]);
      if (imgs) setGallery(imgs as GalleryImage[]);
    };
    load();
  }, []);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (passwordInput === "Qarabaglilarfarm") {
      setAuthorized(true);
      setPasswordError("");
      if (typeof window !== "undefined") {
        window.localStorage.setItem("qarabaglilarfarm_admin_ok", "1");
      }
    } else {
      setPasswordError("Yanlış şifrə");
    }
  };

  const addProduct = async () => {
    if (!productDraft.name.trim()) return;

    let imageUrl = productDraft.imageUrl.trim() || undefined;

    if (productFile) {
      const uploaded = await uploadImageToSupabase(productFile, "products");
      if (uploaded) imageUrl = uploaded;
    }

    const insertPayload = {
      name: productDraft.name.trim(),
      description: productDraft.description.trim() || null,
      price: productDraft.price.trim() || null,
      unit: productDraft.unit.trim() || null,
      image_url: imageUrl || null,
    };
    const { data, error } = await supabaseBrowser
      .from("products")
      .insert(insertPayload)
      .select();
    if (error) return;
    const inserted = (data as Product[])[0];
    const updated = [inserted, ...products];
    setProducts(updated);
    setProductDraft({ name: "", description: "", price: "", unit: "", imageUrl: "" });
    setProductFile(null);
  };

  const addGalleryImage = async () => {
    if (!galleryDraft.imageUrl.trim() && !galleryFile) return;

    let imageUrl = galleryDraft.imageUrl.trim() || undefined;

    if (galleryFile) {
      const uploaded = await uploadImageToSupabase(galleryFile, "gallery");
      if (uploaded) imageUrl = uploaded;
    }

    if (!imageUrl) return;
    const insertPayload = {
      image_url: imageUrl,
      note: galleryDraft.note.trim() || null,
    };
    const { data, error } = await supabaseBrowser
      .from("gallery_images")
      .insert(insertPayload)
      .select();
    if (error) return;
    const inserted = (data as GalleryImage[])[0];
    const updated = [inserted, ...gallery];
    setGallery(updated);
    setGalleryDraft({ imageUrl: "", note: "" });
    setGalleryFile(null);
  };

  const clearSubmissions = async () => {
    await supabaseBrowser.from("submissions").delete().neq("id", "");
    setSubmissions([]);
  };

  const clearContent = async () => {
    setDeleteError(null);
    const { error: ep } = await supabaseBrowser.from("products").delete().neq("id", "");
    const { error: eg } = await supabaseBrowser.from("gallery_images").delete().neq("id", "");
    if (ep || eg) {
      setDeleteError(
        `Hamısı silinmədi. Supabase RLS siyasətlərinə icazə verin: products və gallery_images üçün DELETE.`,
      );
      return;
    }
    setProducts([]);
    setGallery([]);
  };

  const [deleteError, setDeleteError] = useState<string | null>(null);

  const deleteGalleryImage = async (id: string) => {
    setDeleteError(null);
    const { error } = await supabaseBrowser.from("gallery_images").delete().eq("id", id);
    if (error) {
      setDeleteError(`Qalereya silinmədi: ${error.message}. Supabase RLS siyasətlərini yoxlayın.`);
      return;
    }
    setGallery((prev) => prev.filter((img) => img.id !== id));
  };

  const deleteProduct = async (id: string) => {
    setDeleteError(null);
    const { error } = await supabaseBrowser.from("products").delete().eq("id", id);
    if (error) {
      setDeleteError(`Məhsul silinmədi: ${error.message}. Supabase RLS siyasətlərini yoxlayın.`);
      return;
    }
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  if (!authorized) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--light-gray)] px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
          <h1 className="text-center text-2xl font-bold tracking-tight text-[var(--deep-green)] sm:text-3xl">
            Admin panel
          </h1>
          <p className="mt-3 text-center text-sm text-[var(--muted)] sm:text-base">
            Davam etmək üçün şifrəni daxil edin.
          </p>
          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Şifrə"
              className="w-full rounded-lg border border-[var(--border)] px-3 py-2 text-sm"
            />
            {passwordError && (
              <p className="text-sm text-red-600">{passwordError}</p>
            )}
            <button
              type="submit"
              className="w-full rounded-lg bg-[var(--deep-green)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--deep-green-hover)]"
            >
              Daxil ol
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[var(--light-gray)] px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-6xl rounded-2xl bg-white p-4 shadow-[var(--shadow-card)] sm:p-6 lg:p-8">
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-[var(--deep-green)] sm:text-3xl">
            Admin panel
          </h1>
          <p className="mt-2 text-sm text-[var(--muted)] sm:text-base">
            Bu panel saytın müraciətlərini, məhsullarını və qalereya şəkillərini rahat şəkildə
            idarə etməyə imkan verir.
          </p>
        </header>

        <div className="mb-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setTab("submissions")}
            className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${
              tab === "submissions"
                ? "bg-[var(--deep-green)] text-white"
                : "bg-[var(--light-gray)] text-[var(--graphite)]"
            }`}
          >
            Zəng / əlaqə müraciətləri
          </button>
          <button
            type="button"
            onClick={() => setTab("content")}
            className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${
              tab === "content"
                ? "bg-[var(--deep-green)] text-white"
                : "bg-[var(--light-gray)] text-[var(--graphite)]"
            }`}
          >
            Məhsullar və qalereya
          </button>
        </div>

        {deleteError && (
          <div className="mb-4 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-700">
            {deleteError}
          </div>
        )}
        {tab === "submissions" ? (
          <section>
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold text-[var(--graphite)]">Son müraciətlər</h2>
              {submissions.length > 0 && (
                <button
                  type="button"
                  onClick={clearSubmissions}
                  className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--muted)] hover:border-red-500 hover:text-red-600"
                >
                  <Trash2 size={14} /> Hamısını sil
                </button>
              )}
            </div>
            {submissions.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[var(--border)] bg-[var(--light-gray)]/60 px-4 py-10 text-center text-[var(--muted)]">
                <Inbox size={28} className="mb-3" />
                <p className="text-sm">
                  Hələ müraciət yoxdur. Əlaqə formundan göndərilən mesajlar burada görünəcək.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {submissions.map((s) => (
                  <article
                    key={s.id}
                    className="rounded-xl border border-[var(--border)] bg-[var(--light-gray)]/50 p-4 text-sm sm:p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-semibold text-[var(--graphite)]">{s.name}</p>
                      <p className="text-xs text-[var(--muted)]">
                        {new Date(s.created_at).toLocaleString()}
                      </p>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-[var(--muted)]">
                      {s.phone && (
                        <a href={`tel:${s.phone}`} className="inline-flex items-center gap-1">
                          <Phone size={14} /> {s.phone}
                        </a>
                      )}
                      {s.email && <span>{s.email}</span>}
                    </div>
                    {s.message && (
                      <p className="mt-3 text-[var(--graphite)] whitespace-pre-wrap">
                        {s.message}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            )}
          </section>
        ) : (
          <section className="space-y-10">
            <div>
              <h2 className="text-lg font-semibold text-[var(--graphite)]">
                Məhsul əlavə et (məhsullar səhifəsi üçün)
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Məhsulun adı *"
                  value={productDraft.name}
                  onChange={(e) => setProductDraft((d) => ({ ...d, name: e.target.value }))}
                  className="min-h-[42px] rounded-lg border border-[var(--border)] px-3 text-sm"
                />
                <input
                  type="text"
                  placeholder="Qiymət (məs. 18 AZN / kg)"
                  value={productDraft.price}
                  onChange={(e) => setProductDraft((d) => ({ ...d, price: e.target.value }))}
                  className="min-h-[42px] rounded-lg border border-[var(--border)] px-3 text-sm"
                />
                <input
                  type="text"
                  placeholder="Vahid / qeyd (məs. karkas, çəkisi və s.)"
                  value={productDraft.unit}
                  onChange={(e) => setProductDraft((d) => ({ ...d, unit: e.target.value }))}
                  className="min-h-[42px] rounded-lg border border-[var(--border)] px-3 text-sm sm:col-span-2"
                />
                <textarea
                  rows={3}
                  placeholder="Qısa təsvir"
                  value={productDraft.description}
                  onChange={(e) =>
                    setProductDraft((d) => ({ ...d, description: e.target.value }))
                  }
                  className="w-full rounded-lg border border-[var(--border)] px-3 py-2 text-sm sm:col-span-2"
                />
                <input
                  type="url"
                  placeholder="Şəkil URL (istəyə görə, əgər fayl yükləmirsinizsə)"
                  value={productDraft.imageUrl}
                  onChange={(e) => setProductDraft((d) => ({ ...d, imageUrl: e.target.value }))}
                  className="min-h-[42px] rounded-lg border border-[var(--border)] px-3 text-sm sm:col-span-2"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setProductFile(e.target.files?.[0] ?? null)}
                  className="min-h-[42px] rounded-lg border border-[var(--border)] px-3 text-sm sm:col-span-2"
                />
              </div>
              <button
                type="button"
                onClick={addProduct}
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[var(--deep-green)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--deep-green-hover)]"
              >
                <PlusCircle size={16} /> Məhsul əlavə et
              </button>
              {products.length > 0 && (
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {products.map((p) => (
                    <article
                      key={p.id}
                      className="relative flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--light-gray)]/50 p-4 text-sm shadow-[var(--shadow-card)] sm:p-5"
                    >
                      <button
                        type="button"
                        onClick={() => deleteProduct(p.id)}
                        className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white/90 p-1 text-red-600 shadow-sm hover:bg-white"
                        aria-label="Məhsulu sil"
                      >
                        <Trash2 size={14} />
                      </button>
                      {p.image_url && (
                        <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-lg bg-[var(--border)]">
                          <img
                            src={p.image_url}
                            alt={p.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}
                      <p className="font-semibold text-[var(--graphite)]">{p.name}</p>
                      {p.description && (
                        <p className="mt-1 text-xs text-[var(--muted)]">{p.description}</p>
                      )}
                      {(p.price || p.unit) && (
                        <p className="mt-2 text-xs font-semibold text-[var(--deep-green)]">
                          {p.price && <span>{p.price}</span>}
                          {p.price && p.unit && <span> · </span>}
                          {p.unit && <span>{p.unit}</span>}
                        </p>
                      )}
                    </article>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--graphite)]">
                Qalereyaya şəkil əlavə et (təsərrüfat səhifəsi üçün)
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <input
                  type="url"
                  placeholder="Şəkil URL (və ya fayl yüklə)"
                  value={galleryDraft.imageUrl}
                  onChange={(e) =>
                    setGalleryDraft((d) => ({ ...d, imageUrl: e.target.value }))
                  }
                  className="min-h-[42px] rounded-lg border border-[var(--border)] px-3 text-sm sm:col-span-2"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setGalleryFile(e.target.files?.[0] ?? null)}
                  className="min-h-[42px] rounded-lg border border-[var(--border)] px-3 text-sm sm:col-span-2"
                />
                <input
                  type="text"
                  placeholder="Qeyd (istəyə görə)"
                  value={galleryDraft.note}
                  onChange={(e) => setGalleryDraft((d) => ({ ...d, note: e.target.value }))}
                  className="min-h-[42px] rounded-lg border border-[var(--border)] px-3 text-sm sm:col-span-2"
                />
              </div>
              <button
                type="button"
                onClick={addGalleryImage}
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[var(--deep-green)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--deep-green-hover)]"
              >
                <ImageIcon size={16} /> Şəkil əlavə et
              </button>
              {gallery.length > 0 && (
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {gallery.map((img) => (
                    <div
                      key={img.id}
                      className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--light-gray)]/60"
                    >
                      <div className="relative aspect-[4/3]">
                        <img
                          src={img.image_url}
                          alt={img.note || "Qalereya şəkli"}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      {img.note && (
                        <p className="px-2 py-1 text-xs text-[var(--graphite)]">{img.note}</p>
                      )}
                      <button
                        type="button"
                        onClick={() => deleteGalleryImage(img.id)}
                        className="absolute right-2 top-2 inline-flex items-center justify-center rounded-full bg-white/90 p-1 text-red-600 shadow-sm hover:bg-white"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              {(products.length > 0 || gallery.length > 0) && (
                <button
                  type="button"
                  onClick={clearContent}
                  className="ml-3 inline-flex items-center gap-1 rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--muted)] hover:border-red-500 hover:text-red-600"
                >
                  <Trash2 size={14} /> Hamısını təmizlə
                </button>
              )}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

