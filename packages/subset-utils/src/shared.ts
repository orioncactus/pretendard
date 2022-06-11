import { basename, extname, join } from "path";
import { readdir, unlink } from "fs";

// == Constants ===============================================================
export const STATIC_PATH          = join("dist", "public", "static", "alternative");
export const STATIC_OUTPUT_PATH   = join("dist", "web", "static");
export const VARIABLE_PATH        = join("dist", "public", "variable");
export const VARIABLE_OUTPUT_PATH = join("dist", "web", "variable");

// == Functions ===============================================================
function errCallback(err: NodeJS.ErrnoException | null) {
  if(err) {
    console.error(err);
    return true;
  }
  return false;
}

export function clearDir(outDir: string) {
  readdir(outDir, (err, fileLists) => {
    if(errCallback(err)) {
      return;
    }
    for( const fontFile of fileLists ) {
      const fontPath = join(outDir, fontFile);
      unlink(fontPath, errCallback);
    }
  });
}

export function getFontName(fontFile: string) {
  return basename(fontFile, extname(fontFile));
}

export function printSubsetKind(kinds: "Static" | "Variable", outPath: string) {
  console.log(`== ${kinds} ${outPath} ======`);
}

export function printConvertedPath(fontFile: string, outputFile: string) {
  console.log(`Convert ${fontFile} -> ${outputFile}`);
}
