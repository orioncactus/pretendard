// == Load Library =============================================================
const join = require("path").join;
const readdir = require("fs").promises.readdir;
const unlink = require("fs").promises.unlink;
const fontRange = require("font-range").fontRange;

// == Constants ================================================================
const INPUT_PATH = join("dist", "public", "static", "alternative");
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
  "Pretendard-Thin",
];
const FONTLISTS_JP = [
  "PretendardJP-Black",
  "PretendardJP-Bold",
  "PretendardJP-ExtraBold",
  "PretendardJP-ExtraLight",
  "PretendardJP-Light",
  "PretendardJP-Medium",
  "PretendardJP-Regular",
  "PretendardJP-SemiBold",
  "PretendardJP-Thin",
];
const FONTLISTS_STD = [
  "PretendardStd-Black",
  "PretendardStd-Bold",
  "PretendardStd-ExtraBold",
  "PretendardStd-ExtraLight",
  "PretendardStd-Light",
  "PretendardStd-Medium",
  "PretendardStd-Regular",
  "PretendardStd-SemiBold",
  "PretendardStd-Thin",
];

// == Dynamic Subset ===========================================================
let count = 1;
async function dynamic_subset(format, name) {
  const outputDir = join(OUTPUT_PATH, format + "-dynamic-subset");
  const nameFormat = "{NAME}.subset.{INDEX}{EXT}";
  console.log(`== Static ${format}-dynamic-subset ======`);
  // Clear Files
  if (count < 3) {
    const fileLists = await readdir(outputDir);
    console.log(`== Remove ${format} file from ${outputDir} ======`);
    for (const fontFile of fileLists) {
      const fontPath = join(outputDir, fontFile);
      await unlink(fontPath);
    }
  }
  // Create Files
  for (const fontName of name) {
    const cssFile = join(OUTPUT_PATH, fontName + ".css");
    const fontFile = join(INPUT_PATH, fontName + ".ttf");
    console.log(
      "Convert " + fontName + ".ttf -> " + fontName + ".subset.n." + format
    );
    await fontRange(cssFile, fontFile, {
      savePath: outputDir,
      format: format,
      nameFormat: nameFormat,
    });
  }
  count++;
}

// == Subset Apply  ============================================================
(async () => {
  await dynamic_subset("woff", FONTLISTS);
  await dynamic_subset("woff2", FONTLISTS);
  await dynamic_subset("woff", FONTLISTS_JP);
  await dynamic_subset("woff2", FONTLISTS_JP);
  await dynamic_subset("woff", FONTLISTS_STD);
  await dynamic_subset("woff2", FONTLISTS_STD);
})();
