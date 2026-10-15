# Portofolio — Wildan Nazhif Irsyadi

Rebuild v2 (`rebuild/astro-lightweight`) — coding ulang total dari versi React.

## Stack terbaru
- **Astro 7** — static site, HTML murni. **0 KB JavaScript** dikirim ke browser.
- **Tailwind CSS v4** — satu stylesheet kecil, tanpa runtime.
- **TypeScript 5** + `astro check`.
- **Sharp** — foto dioptimasi saat build ke AVIF/WebP multi-ukuran.
- **Vercel** — deploy otomatis dari Git (preview per branch, production dari branch utama).

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
npm run dev      # http://localhost:4321/
npm run build    # output ke dist/
npm run check    # typecheck Astro
```

## Design — anti AI slop (v2.1, branch `redesign/long-document`)

Didesain ulang dengan tiga skill dari GitHub: **UI/UX Pro Max**
(`nextlevelbuilder/ui-ux-pro-max-skill`), **Hallmark** (`Nutlope/hallmark`,
anti-AI-slop design), dan **Taste** (`tasteskill/tasteskill`), + prinsip
`anti-ai-slop` (`misbahsy/anti-ai-slop`) untuk copy. Audit v2 menemukan
ciri-ciri AI-slop: hero full-viewport + badge pill + CTA pill, banner indigo,
stat cards, side-stripe cards, rounded-3xl + shadow di mana-mana, footer
ikon tengah, semua section padding-nya sama.

Perbaikan (makrostruktur Hallmark **Long Document**, genre editorial-brutalist,
fingerprint: hanging headings · ledger 2 kolom asimetris · hairline + double
rule · link tanpa kotak · foto tight-crop inline · reveal: none):
- Masthead koran (nama + "Curriculum Vitae — 2026", double rule, Index sebagai
  link teks) gantikan sticky nav pill. Header statis, seperti dokumen.
- Summary jadi lede pembuka, bukan banner warna. Stat cards dihapus —
  angkanya tetap hidup di dalam achievements (tanpa metrik hasil karangan).
- Experience / Education / Leadership jadi ledger: kolom tanggal + isi,
  dipisah hairline. Tanpa stripe, shadow, atau rounded.
- Projects jadi indeks bernomor (No. / Judul + metode / Tahun), bukan cards.
- Skills kembali ke kertas putih (panel gelap dihapus), tools sebagai daftar
  bergaris, bukan pills.
- Footer jadi colophon rata kiri dengan catatan produksi yang jujur.
- Keputusan yang dipertahankan dari pre-flight: font Arial (UI-UX-Pro-Max
  mengusulkan Caveat/Quicksand — ditolak sesuai preferensi user), 0 KB JS,
  konten 1:1, foto AVIF. Pre-emit self-critique Hallmark: P5 H5 E4 S5 R5 V5.

Push ke branch `rebuild/astro-lightweight` (atau `main` setelah merge) →
Vercel otomatis build + deploy (preview untuk branch, production untuk
branch utama). `site`/canonical mengikuti `VERCEL_URL` yang disuntikkan
Vercel saat build, jadi tidak ada domain yang di-hardcode di config.
Kalau pakai custom domain, set sebagai production domain di Vercel saja.
