// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://mhdmubashir.github.io",
  // Preserve the URL scheme of the previous static export (no trailing slash,
  // `/policies/examease/privacy-policy` served from `privacy-policy.html`).
  trailingSlash: "never",
  build: {
    format: "file",
    inlineStylesheets: "always",
  },
  compressHTML: true,
});
