#!/bin/bash

# Create base directories
mkdir -p src/app/ideas

for year in 2022 2023 2024 2025; do
  echo "Migrating $year..."
  SRC_DIR="src/pages/ideas/$year"
  DEST_DIR="src/app/ideas/$year"
  
  if [ -d "$SRC_DIR" ]; then
    mkdir -p "$DEST_DIR"
    
    # Process each MDX file
    for file in "$SRC_DIR"/*.mdx; do
      [ -e "$file" ] || continue
      
      filename=$(basename "$file")
      slug="${filename%.*}"
      
      mkdir -p "$DEST_DIR/$slug"
      mv "$file" "$DEST_DIR/$slug/page.mdx"
    done
  else
    echo "No directory for $year"
  fi
done
