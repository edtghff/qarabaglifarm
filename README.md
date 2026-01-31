# Qarabağlı Farm — Korporativ vebsayt

Qarabağlı Farm üçün müasir, çoxsəhifəli korporativ vebsayt. Next.js (App Router), Tailwind CSS və Lucide-React əsasında qurulub.

## Texnologiyalar

- **Next.js 16** (App Router)
- **Tailwind CSS 4**
- **Lucide-React** (ikonlar)
- **TypeScript**

## Struktur

| Səhifə | URL | Təsvir |
|--------|-----|--------|
| Ana səhifə | `/` | Hero, Haqqımızda, Dəyərlər, Məhsullar, Instagram |
| Haqqımızda | `/haqqimizda` | Tarix, Missiya, Rəsmi qeydiyyat, Statistika |
| Təsərrüfat | `/teserrufat` | Şərait, Qalereya, Keyfiyyət prosesi |
| Məhsullar | `/mehsullar` | Qoyun cinsləri, Ət məhsulları, CTA |
| Əlaqə | `/elaqe` | Forma, Əlaqə məlumatları, Xəritə placeholder |

## İşə salma

```bash
npm install
npm run dev
```

Brauzerdə [http://localhost:3000](http://localhost:3000) açın.

## Build

```bash
npm run build
npm start
```

## Xüsusiyyətlər

- **SEO**: Hər səhifə üçün meta teqlər
- **Semantik**: `<header>`, `<footer>`, `<section>`, `<article>`, `aria-labelledby`
- **Scroll animasiyaları**: Fade-up (Intersection Observer)
- **Rənglər**: Deep green (#1a3c34), ağ, açıq boz fon
- **Dil**: Bütün mətnlər azərbaycanca
- **Responsiv**: Mobile-first, sticky header

## Gələcək genişləndirmə

- Əlaqə formunun backend-ə göndərilməsi (API route və ya xarici servis)
- Google Maps API ilə xəritə
- Admin panel üçün hazır struktura (məzmun idarəetməsi)

---

© 2026 Qarabağlı Farm. Bütün hüquqlar qorunur.
