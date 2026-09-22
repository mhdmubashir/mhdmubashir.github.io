# Brand notes — Muhammed Mubashir

The idea: an engineer's notebook. Paper, graphite, a ruler, a few pencil notes. Calm, precise, slightly handmade. Never loud.

## Voice

- First person, plain sentences, no hype. "I built", not "revolutionary".
- Specific over general: name the stack, the tool, the number of slides.
- One handwritten aside per post at most ("still running", "in no particular order").
- Never invent metrics, clients, awards or testimonials. If it isn't in `me/data.md` or the site, it doesn't go in a post.

## Colours

| Token | Hex | Use |
|---|---|---|
| paper | `#f6f4ee` | background |
| paper-2 | `#efece4` | photo mount, subtle panels |
| ink | `#1d1c1a` | headlines, body |
| ink-2 | `#4a4843` | secondary text, handwriting |
| graphite | `#63605a` | mono labels, arrows (AA on both papers) |
| stroke / stroke-2 | `#b9b5aa` / `#d9d5cb` | rules, dotted lines |
| mark | `#b4402e` | red pencil — one circled word per post, max |

## Type

- **IBM Plex Sans** (variable) — everything readable. Headlines weight 500, tight tracking.
- **IBM Plex Mono** — labels, URLs, "Note 03 —" tags, page numbers. Uppercase, 8% tracking.
- **Architects Daughter** — handwriting only: asides, "hello, I'm", figure captions. Never body text.

Fonts are self-hosted in `src/assets/fonts/` (OFL).

## Marks

- **Monogram**: pencil-drawn "M" (`branding/monogram.svg`). Top-right of every post, favicon, app icons.
- **Portrait**: passport photo in a hand-ruled mount, rotated 1–2°, captioned "fig. 1 — Kerala, India / UAE". Same treatment on the site, OG image, avatar and intro posts.
- **Sketch strokes**: rough underline (ink), rough ellipse (red pencil), small curved arrow (graphite), wobbly divider (stroke). Sparse. If removing one changes nothing, remove it.

## Layout rules (posts)

- Vertical margin rule on the left, like a notebook. Content starts right of it.
- Top: mono label left ("Note 05 — Home server"), monogram right.
- Bottom: thin rule, site URL left, page number right.
- Generous whitespace. Headline ≤ 6 words when possible. Lists as pencil checklists, two columns max.

## Files

| What | Where |
|---|---|
| Site favicon / app icons | `public/favicon.svg`, `public/icon-*.png`, `public/apple-touch-icon.png` |
| OG / Twitter image (1200×630) | `public/og-image.png` |
| GitHub social preview (1280×640) | `branding/export/github.png` |
| LinkedIn cover (1584×396) | `branding/export/linkedin.png` |
| Avatar (512×512) | `branding/export/avatar.png` |
| Posts: IG/LinkedIn 4:5, stories, landscape, carousel | `branding/export/posts/` |
| Captions | `branding/posts/captions.md` |
| Sources | `branding/monogram.svg`, `branding/social.html`, `branding/posts.html` |

Regenerate: `npm run assets` (icons + social) and `npm run posts` (post graphics).

## Where to use what

- **LinkedIn**: avatar → `avatar.png`; cover → `linkedin.png`; posts → `posts/instagram/*.png` (4:5 works in feed) or `posts/linkedin/*.png`; carousel → upload `posts/carousel/c01…c05` as a PDF/document post.
- **Instagram**: avatar → `avatar.png`; feed → `posts/instagram/*.png`; stories → `posts/stories/*.png`; carousel → `posts/carousel/*`.
- **GitHub**: repo social preview → `github.png`; profile picture → `avatar.png`.
