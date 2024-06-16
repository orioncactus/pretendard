#!/bin/zsh
set -e

script_dir="$(cd "$(dirname "$0")" && pwd)"
temp_glyph_path="$script_dir/temp/"
target_path="$script_dir/../../Pretendard.glyphspackage"

echo "Finding target glyphs..."
python3 "$script_dir/glyph-find.py"

echo "Migrating glyphs..."
python3 "$script_dir/layerid-fix.py"

echo "Pasting glyphs to Sources..."
rsync -a --exclude='.gitkeep' "$temp_glyph_path/" "$target_path/glyphs/"

echo "Done!"
