import { basename, extname, join } from "path";
import { mkdir, access, rm } from 'fs/promises';
import { fontPipe, FontPipeI } from "font-range";

// == Types ===================================================================
export interface ISubsets<T>{
  (kinds: TSubsetKinds, format: Tformat, fontList: IFontInfo): T
}
export interface IFontInfo {
  family:   FONTFAMILY;
  fontList: string[];
  options:  TFontListOptions;
}

export type Tformat      = "woff" | "woff2"
export type TPathKinds   = "Static" | "Variable";
export type TSubsetKinds = "static" | "glyph" | "dynamic";
export type TFontListOptions = { ext?: "ttf"; variable?: boolean };

// == Constants ===============================================================
const STATIC_PATH          = join(process.cwd(), "dist", "public", "static", "alternative");
const STATIC_OUTPUT_PATH   = join(process.cwd(), "dist", "web",    "static"  );
const VARIABLE_PATH        = join(process.cwd(), "dist", "public", "variable");
const VARIABLE_OUTPUT_PATH = join(process.cwd(), "dist", "web",    "variable");

export enum FONTFAMILY {
  Pretendard    = "Pretendard",
  PretendardJP  = "PretendardJP",
  PretendardStd = "PretendardStd",
  PretendardGOV = "PretendardGOV"
};

const FONTWEIGHTS = [
  "Black",
  "Bold",
  "ExtraBold",
  "ExtraLight",
  "Light",
  "Medium",
  "Regular",
  "SemiBold",
  "Thin"
];

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

function getOutInfo(kinds: TSubsetKinds, format: Tformat) {
  switch(kinds) {
    case "static":   return {
      outType: format,
      outName: "{NAME}{EXT}"
    };
    case "glyph":    return {
      outType: `${format}-subset`,
      outName: "{NAME}.subset{EXT}"
    };
    case "dynamic":  return {
      outType: `${format}-dynamic-subset`,
      outName: "{NAME}.subset.{INDEX}{EXT}"
    };
  }
}

async function createOption(kinds: TSubsetKinds, format: Tformat, fontInfo: IFontInfo) {
  // Get Infos
  const { fontList, options } = fontInfo;

  const pathType = options?.variable  ? "Variable" : "Static";
  const isStatic = pathType === "Static";
  const basePath = isStatic ? STATIC_PATH        : VARIABLE_PATH;
  const distPath = isStatic ? STATIC_OUTPUT_PATH : VARIABLE_OUTPUT_PATH

  const { outType,  outName  } = getOutInfo(kinds, format);
  const outDir   = join(distPath, outType);

  // Clear Files
  await clearDir(outDir);

  // Create Options
  const baseLogFormat  = "Convert {ORIGIN} -> {OUTPUT}";
  const groupLogFormat = `\n== ${kinds} ${outType} ======\n` + baseLogFormat;
  const baseOption     = {
    format: format === "woff" ? "woff-zopfli" : format,
    saveDir: outDir,
    nameFormat: outName
  };
  const fontOptions = fontList.map((fontFile, i) => {
    const logFormat  = i === 0 ? groupLogFormat : baseLogFormat;
    const fontName   = basename(fontFile, extname(fontFile));
    const fontPath   = join(basePath, fontFile);
    const fontOption = {
      fontPath,
      option: {
        ...baseOption,
        logFormat
      }
    } as Required<FontPipeI>;

    if(kinds === "glyph") {
      fontOption.option.textFile = join(process.cwd(), "subset_glyphs.txt");
    }
    if(kinds === "dynamic") {
      fontOption.option.cssFile  = join(distPath, fontName + (isStatic ? "" : "-VF") + ".css");
    }
    return fontOption;
  });
  return fontOptions;
}

// == Main ====================================================================
export function getFontList(family = FONTFAMILY.Pretendard, options?: TFontListOptions) {
  const { ext = "ttf", variable = false } = options ?? {};

  const extResult = `.${ext}`;
  const fontList  = variable
    ? [ family + "Variable" + extResult ]
    : FONTWEIGHTS.map(weight => family + "-" + weight + extResult);

  return { family, fontList, options };
}

export async function subsets<T>(...subsetList: Parameters<ISubsets<T>>[]) {
  const options = subsetList.map(async (info) => await createOption(...info));

  await fontPipe(
    (await Promise.all(options)).flat()
  );
}
