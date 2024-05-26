#!/bin/zsh
set -e

script_dir="$(cd "$(dirname "$0")" && pwd)"
temp_path="$script_dir/temp"
package_path="$script_dir/../../packages"
pretendard_path="$package_path/pretendard/dist/public"
pretendard_jp_path="$package_path/pretendard-jp/dist/public"
pretendard_std_path="$package_path/pretendard-std/dist/public"
pretendard_gov_path="$package_path/pretendard-gov/dist/public"


echo "Converting fonts to ttx..."
for fonts_file in "$temp_path"/*.(ttf|otf); do
    ttx "$fonts_file"
    rm "$fonts_file"
done 


echo "Fixing Font Creation Date..."
python3 "$script_dir/date.py"


echo "Fixing Unintended strings..."
python3 "$script_dir/validate.py"


if find "$temp_path" -type f -name '*VF.ttx' -print -quit | grep -q '.'; then
    echo "Adding Suffix from Variable..."
    python3 "$script_dir/rename.py"
fi


echo "Creating Pretendard Std..."
python3 "$script_dir/create-std.py"


echo "Adding Macintosh Name Table..."
python3 "$script_dir/namerecord.py"


echo "Converting fonts..."
for fonts_file in "$temp_path"/*.ttx; do
    ttx "$fonts_file"
    rm "$fonts_file"
done


if find "$temp_path" -type f -name '*VF.ttf' | read; then
    echo "Fixing Variable file name..."
    find "$temp_path" -type f -name '*VF.ttf' -print0 | while IFS= read -r -d '' fonts_file; do
        mv "$fonts_file" "${fonts_file/VF/Variable}"
    done
fi


echo "Subsetting Std..."
subset_options=(--text-file="$script_dir/subset-std.txt" --layout-features='*' --glyph-names --symbol-cmap --legacy-cmap --notdef-glyph --notdef-outline --recommended-glyphs --name-IDs='*' --name-legacy --name-languages='*')
for fonts_file in "$temp_path"/*Std*; do
    pyftsubset "$fonts_file" "${subset_options[@]}"
    for subset_file in "${fonts_file%.*}".subset.*; do
		rm "$fonts_file"
        if [[ -f "$subset_file" ]]; then
            new_filename="${subset_file/.subset/}"
            mv "$subset_file" "$new_filename"
        fi
    done
done


echo "Moving files to appropriate directories..."
for fonts_file in "$temp_path"/*; do
    if [[ $fonts_file == *"JP"* ]]; then
        if [[ $fonts_file == *.otf ]]; then
            target_path="$pretendard_jp_path/static"
        elif [[ $fonts_file == *.ttf && $fonts_file != *"Variable"* ]]; then
            target_path="$pretendard_jp_path/static/alternative"
        elif [[ $fonts_file == *.ttf && $fonts_file == *"Variable"* ]]; then
            target_path="$pretendard_jp_path/variable"
        fi
    elif [[ $fonts_file == *"Std"* ]]; then
        if [[ $fonts_file == *.otf ]]; then
            target_path="$pretendard_std_path/static"
        elif [[ $fonts_file == *.ttf && $fonts_file != *"Variable"* ]]; then
            target_path="$pretendard_std_path/static/alternative"
        elif [[ $fonts_file == *.ttf && $fonts_file == *"Variable"* ]]; then
            target_path="$pretendard_std_path/variable"
        fi
    elif [[ $fonts_file == *"GOV"* ]]; then
        if [[ $fonts_file == *.otf ]]; then
            target_path="$pretendard_gov_path/static"
        elif [[ $fonts_file == *.ttf && $fonts_file != *"Variable"* ]]; then
            target_path="$pretendard_gov_path/static/alternative"
        elif [[ $fonts_file == *.ttf && $fonts_file == *"Variable"* ]]; then
            target_path="$pretendard_gov_path/variable"
        fi
    else
        if [[ $fonts_file == *.otf ]]; then
            target_path="$pretendard_path/static"
        elif [[ $fonts_file == *.ttf && $fonts_file != *"Variable"* ]]; then
            target_path="$pretendard_path/static/alternative"
        elif [[ $fonts_file == *.ttf && $fonts_file == *"Variable"* ]]; then
            target_path="$pretendard_path/variable"
        fi
    fi
    mv "$fonts_file" "$target_path"
done


echo "Done!"
