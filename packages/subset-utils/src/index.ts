import { static_subset, glyph_subset, variable_subset } from "./normal-subset"; 
import { dynamic_subset } from "./dynamic-subset";

// == Types ===================================================================
export interface ISubsets<T>{
  (kinds: TSubsetKinds, format: Tformat, fontList: string[]): T
}
type Tformat      = "woff" | "woff2"
type TSubsetKinds = "static" | "glyph" | "variable" | "dynamic";

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
export function getFontList(familly: string, ext = "ttf") {
  return FONTWEIGHTS.map(weight => familly + "-" + weight + `.${ext}`);
}

export async function subsets<T>(...subsetList: Parameters<ISubsets<T>>[]) {
  const promises = subsetList.map(([kinds, format, fontList])=> {
    switch(kinds as TSubsetKinds) {
      case "static":   return static_subset(format, fontList);
      case "glyph":    return glyph_subset(format, fontList);
      case "variable": return variable_subset(format, fontList);
      case "dynamic":  return dynamic_subset(format, fontList);
    }
  }).flat();

  await Promise.all(promises);
}

