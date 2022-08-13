import { join } from "path";
import { fontRange } from "font-range";

import { 
  STATIC_PATH,
  STATIC_OUTPUT_PATH,
  VARIABLE_PATH,
  VARIABLE_OUTPUT_PATH,
  clearDir, getFontName,
  printSubsetKind, printConvertedPath
} from "./shared";
import type { IFontInfo } from ".";

// == Dynamic Subset ==========================================================
export async function dynamic_subset(format: string, font: IFontInfo) {
  const {
    fontList = [],
    options: { variable = false } = {},
  } = font;

  const inputPath = variable ? VARIABLE_PATH : STATIC_PATH;
  const distPath  = variable ? VARIABLE_OUTPUT_PATH : STATIC_OUTPUT_PATH;
  const outType   = `${format}-dynamic-subset`;
  const outDir    = join(distPath, outType);

  // Clear Files
  printSubsetKind(variable ? "Variable" : "Static", outType);
  clearDir(outDir);

  // Create Files
  const nameFormat = "{NAME}.subset.{INDEX}{EXT}";
  const results: Promise<Buffer[]>[] = [];
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
