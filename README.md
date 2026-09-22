# mhdmubashir.github.io

Personal portfolio of Muhammed Mubashir — a static [Astro](https://astro.build) site
designed like an engineering notebook (paper, graphite, a few pencil annotations).

Live: https://mhdmubashir.github.io

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # astro check (TypeScript + template diagnostics)
npm run build    # static output in ./dist
npm run preview  # serve ./dist locally
```

## Edit content

All copy lives in `src/data/portfolioData.json` (typed by `src/types/index.ts`).
Site-wide metadata (URL, titles, descriptions, keywords, verification) lives in
`src/lib/site.ts`. Pages and components only read from those two files.

## Brand assets

Sources in `branding/` (monogram SVG, OG/social templates, post templates).
Brand rules in `branding/BRAND.md`, post captions in `branding/posts/captions.md`.

```bash
npm run assets   # favicons, app icons, OG image, GitHub preview, LinkedIn cover, avatar
npm run posts    # Instagram / LinkedIn post graphics, stories, carousel -> branding/export/posts
```

Requires `rsvg-convert` (librsvg), ImageMagick and Google Chrome on the machine.

## Deploy

Pushing to `main` runs `.github/workflows/publish.yml`, which builds `./dist`
and deploys it to GitHub Pages.
