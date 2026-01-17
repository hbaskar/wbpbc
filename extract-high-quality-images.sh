#!/bin/bash
# Extract full-resolution image URLs (excluding size variants)

HTML_FILES=(
  "residential-old.html"
  "residential-pickleball-construction-old.html"
  "residential-basketball-courts-old.html"
  "residential-multi-sport-courts-old.html"
  "residential-artificial-turf-and-putting-grass-old.html"
  "residential-court-fencing-old.html"
  "residential-hoops-and-nets-old-html"
  "residential-custom-courts-old.html"
  "residential-pickleball-court-resurfacing-old.html"
)

DOWNLOAD_DIR="public/residential"
mkdir -p "$DOWNLOAD_DIR"

echo "Extracting full-resolution image URLs..."

# Extract unique full-resolution URLs (exclude size variants like -300x175, -768x448)
for file in "${HTML_FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "Processing $file..."
    grep -o 'https://webuildpickleballcourts.com/wp-content/uploads/[^" ]*\.\(webp\|jpg\|jpeg\|png\)' "$file" | \
      grep -v -- '-[0-9][0-9]*x[0-9][0-9]*\.' | \
      sort -u | while read -r url; do
      filename=$(basename "$url" | sed 's/\?.*//')
      if [ ! -f "$DOWNLOAD_DIR/$filename" ]; then
        echo "Downloading: $filename"
        curl -L -f -o "$DOWNLOAD_DIR/$filename" "$url" 2>/dev/null && echo "✓ Success: $filename" || echo "✗ Failed: $filename"
      fi
    done
  fi
done

# Also download Group-36-1.webp and trust badge images
echo "Downloading decorative images..."
DECORATIVE_URLS=(
  "https://webuildpickleballcourts.com/wp-content/uploads/2025/09/Group-36-1.webp"
  "https://webuildpickleballcourts.com/wp-content/uploads/2025/09/XMLID_11_.png"
  "https://webuildpickleballcourts.com/wp-content/uploads/2025/09/Group-35.png"
)

for url in "${DECORATIVE_URLS[@]}"; do
  filename=$(basename "$url")
  if [ ! -f "$DOWNLOAD_DIR/$filename" ]; then
    echo "Downloading: $filename"
    curl -L -f -o "$DOWNLOAD_DIR/$filename" "$url" 2>/dev/null && echo "✓ Success: $filename" || echo "✗ Failed: $filename"
  fi
done

echo "Download complete!"
