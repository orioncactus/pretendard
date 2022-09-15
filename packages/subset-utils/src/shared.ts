import { basename, extname, join } from "path";
import { mkdir, access, rm } from 'fs/promises';

// == Constants ===============================================================
export const STATIC_PATH          = join(process.cwd(), "dist", "public", "static", "alternative");
export const STATIC_OUTPUT_PATH   = join(process.cwd(), "dist", "web", "static");
export const VARIABLE_PATH        = join(process.cwd(), "dist", "public", "variable");
export const VARIABLE_OUTPUT_PATH = join(process.cwd(), "dist", "web", "variable");

// == Functions ===============================================================
export async function clearDir(outDir: string) {
  try {
    await access(outDir);
    await rm(outDir, { recursive: true, force: true });
    await mkdir(outDir);
  } catch(err) {
    await mkdir(outDir);
  }
}

export function getFontName(fontFile: string) {
  return basename(fontFile, extname(fontFile));
}

export function getBasePath(kinds: "Static" | "Variable") {
  return kinds === "Static" ? STATIC_PATH : VARIABLE_PATH;
}

export function getDistPath(kinds: "Static" | "Variable") {
  return kinds === "Static" ? STATIC_OUTPUT_PATH : VARIABLE_OUTPUT_PATH;
}

export function printSubsetKind(kinds: "Static" | "Variable", outPath: string) {
  console.log(`== ${kinds} ${outPath} ======`);
}

export function printConvertedPath(fontFile: string, outputFile: string) {
  console.log(`Convert ${fontFile} -> ${outputFile}`);
}
