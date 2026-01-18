#!/bin/bash
# Extract full-resolution image URLs from commercial HTML files

HTML_FILES=(
  "commercial-old.html"
  "commercial-indoor-pickleball-court-old.html"
  "commercial-court-resurfacing-old.html"
  "commercial-court-fencing-old.html"
  "commercial-adding-pickleball-lines-to-tennis-court-old.html"
  "commercial-tennis-court-construction-old.html"
  "commercial-tennis-court-resurfacing-old.html"
)

DOWNLOAD_DIR="public/commercial"
mkdir -p "$DOWNLOAD_DIR"

echo "Extracting full-resolution image URLs from commercial pages..."

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

echo "Download complete!"

