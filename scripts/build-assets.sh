#!/usr/bin/env bash
# Regenerates every raster brand asset from the sources in ./branding.
# Needs: rsvg-convert (brew install librsvg), ImageMagick `magick`, Google Chrome.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/branding"
OUT="$ROOT/branding/export"
PUB="$ROOT/public"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

mkdir -p "$OUT"

echo "▸ icons from monogram.svg"
rsvg-convert -w 192 -h 192 "$SRC/monogram.svg" -o "$PUB/icon-192.png"
rsvg-convert -w 512 -h 512 "$SRC/monogram.svg" -o "$PUB/icon-512.png"
rsvg-convert -w 180 -h 180 "$SRC/monogram.svg" -o "$PUB/apple-touch-icon.png"
# maskable: same tile, glyph already sits inside the safe zone (center 80%)
cp "$PUB/icon-512.png" "$PUB/icon-512-maskable.png"
rsvg-convert -w 32 -h 32 "$SRC/monogram.svg" -o "$OUT/favicon-32.png"
rsvg-convert -w 16 -h 16 "$SRC/monogram.svg" -o "$OUT/favicon-16.png"
magick "$OUT/favicon-16.png" "$OUT/favicon-32.png" "$PUB/favicon.ico"
rsvg-convert -w 1024 -h 1024 "$SRC/monogram.svg" -o "$OUT/monogram-1024.png"

shot() { # name width height
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --window-size="$2,$3" --screenshot="$OUT/$1.png" "file://$SRC/social.html#$1" >/dev/null 2>&1
}

echo "▸ social images from social.html"
shot og 1200 630
shot github 1280 640
shot linkedin 1584 396
shot avatar 512 512

# Optimise PNGs (palette quantisation is safe: flat paper + one photo)
for f in og github linkedin avatar; do
  magick "$OUT/$f.png" -strip -define png:compression-level=9 "$OUT/$f.png"
done
cp "$OUT/og.png" "$PUB/og-image.png"

echo "▸ done"
ls -la "$PUB"/icon-*.png "$PUB/apple-touch-icon.png" "$PUB/favicon.ico" "$PUB/og-image.png" "$OUT"
