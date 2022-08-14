import { join } from "path";
import { fontRange } from "font-range";

import { 
  clearDir, getFontName,
  getBasePath, getDistPath,
  printSubsetKind, printConvertedPath
} from "./shared";
import type { IFontInfo, Tformat } from ".";

// == Dynamic Subset ==========================================================
export async function dynamic_subset(format: Tformat, font: IFontInfo) {
  const {
    fontList = [],
    options: { variable = false } = {},
  } = font;

  const kinds = variable ? "Variable" : "Static";
  const inputPath = getBasePath(kinds);
  const distPath  = getDistPath(kinds);
  const outType   = `${format}-dynamic-subset`;
  const outDir    = join(distPath, outType);

  // Clear Files
  printSubsetKind(kinds, outType);
  await clearDir(outDir);

  // Create Files
  const nameFormat = "{NAME}.subset.{INDEX}{EXT}";
  const results: ReturnType<typeof fontRange>[] = [];
  for ( const fontFile of fontList ) {
    const fontName = getFontName(fontFile);
    const fontPath = join(inputPath, fontFile);
    const cssFile  = join(distPath, fontName + (variable ? "-subset" : "") + ".css");
    const outFile  = fontName + ".subset.n." + format;

    printConvertedPath(fontFile, outFile);
    results.push(
      fontRange(cssFile, fontPath, {
        savePath: outDir,
        format: format,
        nameFormat: nameFormat
      })
    );
  }

  console.log("");
  return await Promise.all(results);
}
