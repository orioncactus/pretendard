import { spawn } from "child_process";
import { join } from "path";

import {
  STATIC_PATH, STATIC_OUTPUT_PATH,
  VARIABLE_PATH, VARIABLE_OUTPUT_PATH,
  clearDir, getFontName,
  printSubsetKind, printConvertedPath
} from "./shared";

// == Subset ==================================================================
const GLYPH_OPTION = "--text-file=./subset_glyphs.txt";
const NON_GLYPH_OPTION = "--glyphs=*";
function font_subset(
  inputPath: string, outputPath: string, format: string, glyphOption: boolean
) {
  const args = [
    inputPath,
    `--flavor=${format}`,
    "--with-zopfli",
    `--output-file=${outputPath}`,
    "--layout-features=*",
    "--glyph-names",
    "--symbol-cmap",
    "--legacy-cmap",
    "--notdef-glyph",
    "--notdef-outline",
    "--recommended-glyphs",
    "--name-legacy",
    "--drop-tables=",
    "--name-IDs=*",
    "--name-languages=*",
    glyphOption ? GLYPH_OPTION :  NON_GLYPH_OPTION
  ];

  return new Promise<number | null>((resolve, reject) => {
    const process = spawn("pyftsubset", args);

    process.on("close", (code) => {
      resolve(code);
    });
    process.on("error", (err) => {
      reject(err);
    })
  });
}

async function subset_wrapper(
  kinds: Parameters<typeof printSubsetKind>[0],
  basePath: string, distPath: string, format: string, fontList: string[], glyphOption = false
) {
  const outType = glyphOption ? `${format}-subset` : format;
  const outDir  = join(distPath, outType);

  // Clear Files
  printSubsetKind(kinds, outType);
  clearDir(outDir);

  // Create Files
  const results: Promise<number | null>[] = [];
  for ( const fontFile of fontList ) {
    const fontName   = getFontName(fontFile);
    const fontPath   = join(basePath, fontFile);
    const outFile    = fontName + (glyphOption ? ".subset." : ".") + format;
    const outputPath = join(distPath, outType, outFile);

    printConvertedPath(fontFile, outFile);
    results.push(
      font_subset(fontPath, outputPath, format, glyphOption)
    );
  }

  console.log("");
  return await Promise.all(results);
}

// == Each Subset Setup  ======================================================
export function static_subset(format: string, fontList: string[]) {
  return subset_wrapper("Static", STATIC_PATH, STATIC_OUTPUT_PATH, format, fontList);
}

export function glyph_subset(format: string, fontList: string[]) {
  return subset_wrapper("Static", STATIC_PATH, STATIC_OUTPUT_PATH, format, fontList, true);
}

export function variable_subset(format: string, fontList: string[]) {
  return subset_wrapper("Variable", VARIABLE_PATH, VARIABLE_OUTPUT_PATH, format, fontList);
}
