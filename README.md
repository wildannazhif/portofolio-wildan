# Portofolio — Wildan Nazhif Irsyadi

Rebuild v2 (`rebuild/astro-lightweight`) — coding ulang total dari versi React.

## Stack terbaru
- **Astro 7** — static site, HTML murni. **0 KB JavaScript** dikirim ke browser.
- **Tailwind CSS v4** — satu stylesheet kecil, tanpa runtime.
- **TypeScript 5** + `astro check`.
- **Sharp** — foto dioptimasi saat build ke AVIF/WebP multi-ukuran.
- GitHub Pages via Actions (`.github/workflows/deploy.yml`).

## Kenapa jauh lebih ringan di smartphone
| v1 (React) | v2 (Astro) |
|---|---|
| React 19 runtime + `motion` + shadcn + Geist variable font | Tanpa framework JS, tanpa animasi JS, font sistem (Arial) — 0 unduhan font |
| `backdrop-blur`, blob blur besar (berat GPU HP) | Tanpa blur, tanpa efek GPU |
| Foto 45 KB **rusak** (header JPEG hilang, fallback eksternal) | Foto dari URL fallback, diunduh & dikonversi AVIF/WebP saat build (tanpa blob biner di git), `fetchpriority=high`, ukuran responsif |
| Link email rusak (URL Gmail-compose dipakai sebagai alamat) | `mailto:` benar, LinkedIn/GitHub URL penuh |
| Satu `App.tsx` 655 baris | Konten terpisah di `src/data/portfolio.ts`, komponen per-section |

Teknik lain: `content-visibility: auto` untuk section bawah, tap target ≥44px,
navigasi mobile tanpa hamburger-JS (scroll horizontal murni CSS),
`@media print` untuk cetak CV, SEO + JSON-LD Person + sitemap.

## Jalankan lokal
```bash
npm install
npm run dev      # http://localhost:4321/portofolio-wildan/
npm run build    # output ke dist/
npm run check    # typecheck Astro
```

## Deploy
Push ke branch `rebuild/astro-lightweight` (atau `main` setelah merge) →
GitHub Actions build → GitHub Pages di
https://wildannazhif.github.io/portofolio-wildan/
