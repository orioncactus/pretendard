// == Load Library =============================================================
const join      = require("path").join;
const readdir   = require('fs').readdir;
const unlink    = require('fs').unlink;
const fontRange = require("font-range").fontRange;

// == Constants ================================================================
const INPUT_PATH = join("dist", "public", "static");
const OUTPUT_PATH = join("dist", "web", "static");
const FONTLISTS = [
  "Pretendard-Black",
  "Pretendard-Bold",
  "Pretendard-ExtraBold",
  "Pretendard-ExtraLight",
  "Pretendard-Light",
  "Pretendard-Medium",
  "Pretendard-Regular",
  "Pretendard-SemiBold",
  "Pretendard-Thin"
];

const errCallback = (err) => {
  if(err) {
    console.error(err);
    return true;
  }
  return false;
};

// == Dynamic Subset ===========================================================
function dynamic_subset(format) {
  const outputDir = join(OUTPUT_PATH, format + "-dynamic-subset");
  const nameFormat = "{NAME}.subset.{INDEX}{EXT}";
  console.log("== Static " + format + "-dynamic-subset ======" );

  // Remove Files
  readdir(outputDir, (err, fileLists) => {
    if(errCallback(err)) {
      return;
    }
    for( const fontFile of fileLists ) {
      const fontPath = join(outputDir, fontFile);
      unlink(fontPath, errCallback);
    }
  });

  // Create Files
  for ( const fontName of FONTLISTS ) {
    const cssFile = join(OUTPUT_PATH, fontName + ".css");
    const fontFile = join(INPUT_PATH, fontName + ".otf");

    console.log("Convert " + fontName + ".otf -> " + fontName + ".subset.n." + format );
    fontRange(cssFile, fontFile, {
      savePath: outputDir,
      format: format,
      nameFormat: nameFormat
    });
  }
  console.log("");
}

// == Subset Apply  ============================================================
dynamic_subset("woff");
dynamic_subset("woff2");
