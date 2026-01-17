#!/bin/bash
# Script to download images from residential HTML files

mkdir -p public/residential

# Extract unique image URLs
grep -oE 'https://webuildpickleballcourts.com/wp-content/uploads/[^" ]+\.(webp|jpg|jpeg|png|svg)' residential-*.html | \
  sed 's/.*\///' | sort -u | while read -r filename; do
  # Get the full URL
  url=$(grep -oE "https://webuildpickleballcourts.com/wp-content/uploads/[^\" ]*${filename}" residential-*.html | head -1)
  if [ ! -z "$url" ]; then
    echo "Downloading: $filename"
    curl -L -o "public/residential/$filename" "$url" 2>/dev/null || echo "Failed: $filename"
  fi
done

echo "Download complete!"
