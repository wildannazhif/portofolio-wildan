// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// GitHub Pages project site: https://wildannazhif.github.io/portofolio-wildan/
export default defineConfig({
  site: "https://wildannazhif.github.io/portofolio-wildan/",
  base: "/portofolio-wildan/",
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
