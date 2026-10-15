// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Deploy target: Vercel (served at the domain root — NO base path).
// `site` follows the real deployment URL that Vercel injects at build
// time, so canonical URLs + sitemap stay correct on every deployment
// (preview or production) without hardcoding a domain.
const site = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://portofolio-wildan.vercel.app/";

export default defineConfig({
  site,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // The portrait's only surviving copy lives at the ibb.co URL (the
    // jpg committed in v1 was byte-corrupted). Astro downloads it at build
    // time and emits local AVIF/WebP — no binary blobs in git, no hotlink
    // at runtime, and no repeat of v1's corrupted-image bug.
    remotePatterns: [{ protocol: "https", hostname: "i.ibb.co.com" }],
    responsiveStyles: true,
  },
  build: {
    format: "file",
    inlineStylesheets: "auto",
  },
  compressHTML: true,
});
