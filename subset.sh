# == PATH ======================================================================
STATIC_PATH="./dist/public/static/alternative/"
STATIC_OUTPUT_PATH="./dist/web/static/"
STATIC_FONTS=(
  "Pretendard-Black.ttf"
  "Pretendard-Bold.ttf"
  "Pretendard-ExtraBold.ttf"
  "Pretendard-ExtraLight.ttf"
  "Pretendard-Light.ttf"
  "Pretendard-Medium.ttf"
  "Pretendard-Regular.ttf"
  "Pretendard-SemiBold.ttf"
  "Pretendard-Thin.ttf"
)
STATIC_FONTS_JP=(
  "PretendardJP-Black.ttf"
  "PretendardJP-Bold.ttf"
  "PretendardJP-ExtraBold.ttf"
  "PretendardJP-ExtraLight.ttf"
  "PretendardJP-Light.ttf"
  "PretendardJP-Medium.ttf"
  "PretendardJP-Regular.ttf"
  "PretendardJP-SemiBold.ttf"
  "PretendardJP-Thin.ttf"
)
STATIC_FONTS_STD=(
  "PretendardStd-Black.ttf"
  "PretendardStd-Bold.ttf"
  "PretendardStd-ExtraBold.ttf"
  "PretendardStd-ExtraLight.ttf"
  "PretendardStd-Light.ttf"
  "PretendardStd-Medium.ttf"
  "PretendardStd-Regular.ttf"
  "PretendardStd-SemiBold.ttf"
  "PretendardStd-Thin.ttf"
)

VARIABLE_PATH="./dist/public/variable/"
VARIABLE_OUTPUT_PATH="./dist/web/variable/"
VARIABLE_FONTS=("PretendardVariable.ttf")
VARIABLE_FONTS_JP=("PretendardJPVariable.ttf")
VARIABLE_FONTS_STD=("PretendardStdVariable.ttf")

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
    local fontName="${fontFile%ttf}"
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

static_subset_jp() {
  local format="$1"
  local etcArgs="$2"
  local outPath="${format}"

  echo "== Static ${outPath} ======"
  subset_wrapper "${STATIC_PATH}" "${STATIC_OUTPUT_PATH}${outPath}" \
                 "${format}" "STATIC_FONTS_JP" "${etcArgs}"
}

static_subset_std() {
  local format="$1"
  local etcArgs="$2"
  local outPath="${format}"

  echo "== Static ${outPath} ======"
  subset_wrapper "${STATIC_PATH}" "${STATIC_OUTPUT_PATH}${outPath}" \
                 "${format}" "STATIC_FONTS_STD" "${etcArgs}"
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

variable_subset_jp() {
  local format="$1"
  local etcArgs="$2"
  local outPath="${format}"

  echo "== Variable ${outPath} ======"
  subset_wrapper "${VARIABLE_PATH}" "${VARIABLE_OUTPUT_PATH}${outPath}" \
                 "${format}" "VARIABLE_FONTS_JP" "${etcArgs}"
  echo ""
}

variable_subset_std() {
  local format="$1"
  local etcArgs="$2"
  local outPath="${format}"

  echo "== Variable ${outPath} ======"
  subset_wrapper "${VARIABLE_PATH}" "${VARIABLE_OUTPUT_PATH}${outPath}" \
                 "${format}" "VARIABLE_FONTS_STD" "${etcArgs}"
  echo ""
}

# == Subset Apply ==============================================================
static_subset woff
static_subset woff2
static_subset woff "${ETC_ARGS}"
static_subset woff2 "${ETC_ARGS}"
variable_subset woff2
static_subset_jp woff
static_subset_jp woff2
variable_subset_jp woff2
static_subset_std woff
static_subset_std woff2
variable_subset_std woff2
npm run dynamic-subset
