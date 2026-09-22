# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal portfolio for Muhammed Mubashir, deployed to GitHub Pages at `https://mhdmubashir.github.io`. Astro 7, fully static, zero client-side framework. Design concept: an engineering notebook — paper background, graphite text, IBM Plex Sans/Mono for content, "Architects Daughter" only for sparse handwritten annotations, a few hand-drawn SVG strokes (underline, circle, arrow, divider). One accent colour (`--mark`, red pencil) used once per page at most. No test suite.

## Commands

```bash
npm run dev      # dev server on http://localhost:4321
npm run check    # astro check — TypeScript + template diagnostics (CI runs this before build)
npm run build    # static output in ./dist (this is what CI deploys)
npm run preview  # serve ./dist
npm run assets   # regenerate favicons, app icons, OG image, LinkedIn cover, avatar from ./branding
```

`npm run assets` needs `rsvg-convert`, ImageMagick `magick`, and Google Chrome (headless screenshots of `branding/social.html`). Run it whenever `branding/*.svg`, `branding/social.html`, or `src/assets/portrait.jpg` changes; outputs land in `public/` and `branding/export/`.

## Deployment

Push to `main` runs `.github/workflows/publish.yml`: `npm ci` → `astro check` → `astro build` → deploy `./dist` to GitHub Pages. Node 22.

## Architecture

**Two sources of truth, nothing else holds copy or metadata:**
- `src/data/portfolioData.json` — all page content (personal, about, skills, experience, projects + policy markdown, apps, CTA labels). Typed by `src/types/index.ts`; extend the interface first when adding a field.
- `src/lib/site.ts` — site URL, title/description templates, keywords, OG image, Google verification, JSON-LD constants. `absoluteUrl()` builds canonical URLs.

`src/lib/content.ts` wraps the JSON with the helpers every page shares: `projectSlug()`/`policyPath()` (the single definition of the policy URL scheme), `allPolicies()`, `sections` (home anchor ids + nav labels), `whatsappUrl()`.

**Routing / URL scheme is frozen to match the previous Next.js export:** `trailingSlash: "never"` and `build.format: "file"` in `astro.config.mjs`, so `/policies/examease/privacy-policy` is served from `privacy-policy.html`. Don't change these without adding redirects; Search Console has these URLs and `/sitemap.xml`.

**Pages (`src/pages/`):**
- `index.astro` — the whole portfolio: hero, then six numbered `<Section>`s (about → contact). Emits `Person` + `WebSite` JSON-LD.
- `policies/[project]/[policy].astro` — renders a policy's markdown (`marked`, build-time) with breadcrumb + `WebPage`/`BreadcrumbList` JSON-LD. Static paths from `allPolicies()`.
- `sitemap.xml.ts` — hand-rolled endpoint (kept at `/sitemap.xml` deliberately; no `@astrojs/sitemap`). `public/robots.txt` points at it.

**Layout / head:** `src/layouts/BaseLayout.astro` → `components/SEO.astro` (title template, description, canonical, OG/Twitter, keywords + verification only on `/`). Pages pass `path` and optional `jsonLd[]`; never hand-write `<meta>` in pages.

**Components:** `Section.astro` (numbered section with margin column + optional handwritten `note`), `Header.astro` (sticky nav; ~15-line IntersectionObserver script for `aria-current`, the only client JS on the site), `Footer.astro`, `Monogram.astro` (inline pencil "M"), item components (`ExperienceItem`, `ProjectItem`, `AppItem`), and `sketch/` (`Divider`, `Annotation`, `Underline`, `Circled`). All styling is scoped Astro `<style>`; shared tokens/utilities (`.page`, `.mono`, `.hand`, `.pencil-link`, `.ext`, `.btn`) live in `src/styles/global.css`.

**Fonts** are self-hosted woff2 in `src/assets/fonts/` (latin subsets, OFL licences alongside). `@font-face` is in `global.css`; the body font is preloaded in `BaseLayout`. Don't add Google Fonts `<link>`s.

**Images:** `src/assets/portrait.jpg` is rendered through `astro:assets` `<Image>` (webp, 1x/2x). Raster brand assets in `public/` are generated, not hand-edited — edit `branding/` and run `npm run assets`. Keep `public/googlefde4c493b781fe56.html` (Search Console verification).

## Design rules worth keeping

- Mobile is first-class: verified at 320/375/430/768/1440. Hand-drawn annotations must never cause horizontal overflow — they stack or hide below `64rem`.
- Lighthouse baseline (local): Performance 100, SEO 100, Best Practices 100, Accessibility ≥ 96. Keep JS at zero beyond the nav script; prefer CSS/SVG for any effect.
- `prefers-reduced-motion` disables all transitions globally in `global.css`.
- Graphite (`--graphite`) is tuned to ≥ 4.5:1 on both paper tones for 12px mono labels — don't lighten it.

## Notes

- `me/` (gitignored) holds the owner's personal reference material (bio, photos). It is source material for content updates, not site source.
- `portfolioData.json` still carries placeholder values in `personal.portfolio` and `policies[].url`; nothing renders them — links come from `policyPath()`.
