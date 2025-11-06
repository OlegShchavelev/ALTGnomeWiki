#!/bin/bash

# This script restructures markdown files in a project by moving each .md file
# (except index.md) into a dedicated subdirectory named after the file (without extension)
# and renaming it to index.md. It processes all directories recursively, excluding:
# - 'public' directory
# - Hidden directories (starting with dot)
# - node_modules directory

# Default root directory
ROOT_DIR="docs"

# Check if custom directory is provided
if [ $# -eq 1 ]; then
    if [ -d "$1" ]; then
        ROOT_DIR="$1"
        echo "Using custom directory: $ROOT_DIR"
    else
        echo "Error: Directory '$1' does not exist"
        exit 1
    fi
else
    echo "Using default directory: $ROOT_DIR"
fi

# Function to process .md files in a directory
process_directory() {
    local dir="$1"

    # Change to target directory
    pushd "$dir" > /dev/null || return

    # Process all .md files in current directory
    for file in *.md; do
        # Skip if no .md files found
        [[ -e "$file" ]] || continue

        # Skip index.md files
        [[ "$file" == "index.md" ]] && continue

        # Get basename without extension
        base_name="${file%.md}"

        # Create target subdirectory
        mkdir -p "$base_name"

        # Move and rename file
        mv "$file" "$base_name/index.md"

        echo "Moved: $dir/$file -> $dir/$base_name/index.md"
    done

    # Return to original directory
    popd > /dev/null || return
}

# Main processing logic
echo "Starting project restructuring in: $ROOT_DIR"
echo "Ignoring: public, hidden directories (.*), and node_modules"

# Find all directories except excluded ones
find "$ROOT_DIR" -mindepth 1 -type d \
    ! -path "$ROOT_DIR/public*" \
    ! -path "$ROOT_DIR/node_modules*" \
    ! -path "$ROOT_DIR/.*" \
    ! -path "*/.*" \
    -print0 | while IFS= read -r -d $'\0' dir; do

    # Skip directories without .md files
    if ! ls "$dir"/*.md >/dev/null 2>&1; then
        continue
    fi

    process_directory "$dir"
done

echo "Restructuring complete! All .md files moved to their own directories."
