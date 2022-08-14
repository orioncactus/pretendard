import { spawn } from "child_process";
import { join } from "path";

import {
  clearDir, getFontName,
  getBasePath, getDistPath,
  printSubsetKind, printConvertedPath
} from "./shared";
import type { IFontInfo, Tformat } from '.';

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
  format: Tformat, font: IFontInfo, glyphOption = false
) {
  const {
    fontList,
    options: fontOptions,
  } = font;

  const kinds    = fontOptions?.variable ? 'Variable' : 'Static';
  const basePath = getBasePath(kinds);
  const distPath = getDistPath(kinds);
  const outType  = glyphOption ? `${format}-subset` : format;
  const outDir   = join(distPath, outType);

  // Clear Files
  printSubsetKind(kinds, outType);
  await clearDir(outDir);

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
export function static_subset(format: Tformat, font: IFontInfo) {
  return subset_wrapper(format, font);
}

export function glyph_subset(format: Tformat, font: IFontInfo) {
  return subset_wrapper(format, font, true);
}
