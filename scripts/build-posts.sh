#!/usr/bin/env bash
# Renders every social post defined in branding/posts.html to PNG.
# Needs Google Chrome and ImageMagick `magick`.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/branding/posts.html"
OUT="$ROOT/branding/export/posts"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

mkdir -p "$OUT/instagram" "$OUT/stories" "$OUT/linkedin" "$OUT/carousel"

shot() { # id format width height outdir
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --window-size="$3,$4" --screenshot="$5/$1-$2.png" "file://$SRC#$1-$2" >/dev/null 2>&1
  magick "$5/$1-$2.png" -strip -define png:compression-level=9 "$5/$1-$2.png"
}

POSTS="p01 p02 p03 p04 p05 p06 p07 p08 p09"
CAROUSEL="c01 c02 c03 c04 c05"

echo "▸ instagram / linkedin 4:5 (1080×1350)"
for p in $POSTS; do shot "$p" portrait 1080 1350 "$OUT/instagram"; done

echo "▸ stories 9:16 (1080×1920)"
for p in $POSTS; do shot "$p" story 1080 1920 "$OUT/stories"; done

echo "▸ linkedin landscape (1200×627) — intro + contact"
for p in p01 p09; do shot "$p" landscape 1200 627 "$OUT/linkedin"; done

echo "▸ carousel (1080×1350)"
for c in $CAROUSEL; do shot "$c" portrait 1080 1350 "$OUT/carousel"; done

echo "▸ done"
find "$OUT" -name '*.png' | sort
