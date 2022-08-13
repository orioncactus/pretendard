import { static_subset, glyph_subset, variable_subset } from "./normal-subset"; 
import { dynamic_subset } from "./dynamic-subset";

// == Types ===================================================================
export interface ISubsets<T>{
  (kinds: TSubsetKinds, format: Tformat, fontList: IFontInfo): T
}
export interface IFontInfo {
  family: FONTFAMILY;
  fontList: string[];
  options: TFontListOptions;
}

type Tformat      = "woff" | "woff2"
type TSubsetKinds = "static" | "glyph" | "variable" | "dynamic";
type TFontListOptions = { ext?: "ttf"; variable?: boolean };

// == Constants ===============================================================
export enum FONTFAMILY {
  Pretendard    = "Pretendard",
  PretendardJP  = "PretendardJP",
  PretendardStd = "PretendardStd"
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
export function getFontList(family = FONTFAMILY.Pretendard, options?: TFontListOptions) {
  const { ext = "ttf", variable = false } = options ?? {};

  const extResult = `.${ext}`;
  const fontList  = variable
    ? [ family + "Variable" + extResult ]
    : FONTWEIGHTS.map(weight => family + "-" + weight + extResult);

  return { family, fontList, options };
}

export async function subsets<T>(...subsetList: Parameters<ISubsets<T>>[]) {
  const promises = subsetList.map(([kinds, format, font])=> {
    switch(kinds as TSubsetKinds) {
      case "static":   return static_subset(format, font);
      case "glyph":    return glyph_subset(format, font);
      case "variable": return variable_subset(format, font);
      case "dynamic":  return dynamic_subset(format, font);
    }
  }).flat();

  await Promise.all(promises);
}

