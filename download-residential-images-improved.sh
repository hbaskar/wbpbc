#!/bin/bash
# Improved script to download images from residential HTML files

mkdir -p public/residential

# Extract unique image URLs with better pattern matching
grep -h -oE 'https://webuildpickleballcourts.com/wp-content/uploads/[^" ]+\.(webp|jpg|jpeg|png|svg)' residential-*.html | \
  sed 's/ 800w.*//' | sed 's/ 600w.*//' | sed 's/ 300w.*//' | sed 's/ 768w.*//' | \
  sed 's/ 1024w.*//' | sed 's/ 1152w.*//' | sed 's/ 1440w.*//' | sed 's/ 1536w.*//' | \
  sed 's/ 1920w.*//' | sed 's/ 2048w.*//' | sed 's/ 2560w.*//' | \
  sort -u | while read -r url; do
  filename=$(basename "$url" | sed 's/-[0-9]*x[0-9]*//')
  if [ ! -f "public/residential/$filename" ]; then
    echo "Downloading: $filename"
    curl -L -f -o "public/residential/$filename" "$url" 2>/dev/null && echo "✓ Success: $filename" || echo "✗ Failed: $filename"
  else
    echo "Already exists: $filename"
  fi
done

echo "Download complete!"
