import { join } from "path";
import { fontRange } from "font-range";

import { 
  STATIC_PATH as INPUT_PATH,
  STATIC_OUTPUT_PATH as DIST_PATH,
  clearDir, getFontName,
  printSubsetKind, printConvertedPath
} from "./shared";

// == Dynamic Subset ==========================================================
export async function dynamic_subset(format: string, fontList: string[]) {
  const outType = `${format}-dynamic-subset`;
  const outDir  = join(DIST_PATH, outType);

  // Clear Files
  printSubsetKind("Static", outType);
  clearDir(outDir);

  // Create Files
  const nameFormat = "{NAME}.subset.{INDEX}{EXT}";
  const results: Promise<Buffer[]>[] = [];
  for ( const fontFile of fontList ) {
    const fontName = getFontName(fontFile);
    const fontPath = join(INPUT_PATH, fontFile);
    const cssFile  = join(DIST_PATH, fontName + ".css");
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
