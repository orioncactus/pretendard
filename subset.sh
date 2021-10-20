# == PATH ======================================================================
STATIC_PATH="./dist/public/static/"
STATIC_OUTPUT_PATH="./dist/web/static/"
STATIC_FONTS=(
  "Pretendard-Black.otf"
  "Pretendard-Bold.otf"
  "Pretendard-ExtraBold.otf"
  "Pretendard-ExtraLight.otf"
  "Pretendard-Light.otf"
  "Pretendard-Medium.otf"
  "Pretendard-Regular.otf"
  "Pretendard-SemiBold.otf"
  "Pretendard-Thin.otf"
)

VARIABLE_PATH="./dist/public/variable/"
VARIABLE_OUTPUT_PATH="./dist/web/variable/"
VARIABLE_FONTS=("PretendardVariable.ttf")

ETC_ARGS="--text-file=./subset_glyphs.txt"

# == Subset ====================================================================
font_subset() {
  local inputPath="$1"
  local outputPath="$2"
  local format="$3"
  local etcArgs="$4"

  if [ -z "${etcArgs}" ]; then
    etcArgs="--glyphs=*"
  fi

  pyftsubset "${inputPath}" \
               --flavor="${format}" \
               --with-zopfli \
               --output-file="${outputPath}" \
               --layout-features='*' \
               --glyph-names \
               --symbol-cmap \
               --legacy-cmap \
               --notdef-glyph \
               --notdef-outline \
               --recommended-glyphs \
               --name-legacy \
               --drop-tables= \
               --name-IDs='*' \
               --name-languages='*' \
               "${etcArgs}"
}

subset_wrapper() {
  local basePath="$1"
  local distPath="$2"
  local format="$3"
  eval "local fontsList=(\"\${${4}[@]}\")"
  local etcArgs="$5"

  for fontFile in "${fontsList[@]}"; do
    local fontName="${fontFile%otf}"
    local fontName="${fontName%ttf}"
    local inputPath="${basePath}${fontFile}"

    if [ -z "${etcArgs}" ]; then
      local outputFile="${fontName}${format}"
    else
      local outputFile="${fontName}subset.${format}"
    fi
    local outputPath="${distPath}/${outputFile}"

    echo "Convert ${fontFile} -> ${outputFile}"
    rm "${outputPath}"
    font_subset "${inputPath}" "${outputPath}" "${format}" "${etcArgs}"
  done

  echo ""
}

# == Each Subset Setup  ========================================================
static_subset() {
  local format="$1"
  local etcArgs="$2"

  if [ -z "${etcArgs}" ]; then
    local outPath="${format}"
  else
    local outPath="${format}-subset"
  fi

  echo "== Static ${outPath} ======"
  subset_wrapper "${STATIC_PATH}" "${STATIC_OUTPUT_PATH}${outPath}" \
                 "${format}" "STATIC_FONTS" "${etcArgs}"
}

variable_subset() {
  local format="$1"
  local etcArgs="$2"

  if [ -z "${etcArgs}" ]; then
    local outPath="${format}"
  else
    local outPath="${format}-subset"
  fi

  echo "== Variable ${outPath} ======"
  subset_wrapper "${VARIABLE_PATH}" "${VARIABLE_OUTPUT_PATH}${outPath}" \
                 "${format}" "VARIABLE_FONTS" "${etcArgs}"
  echo ""
}

# == Subset Apply ==============================================================
static_subset woff
static_subset woff2
static_subset woff "${ETC_ARGS}"
static_subset woff2 "${ETC_ARGS}"
variable_subset woff2
npm run dynamic-subset
