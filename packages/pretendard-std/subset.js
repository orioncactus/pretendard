const { FONTFAMILY, getFontList, subsets } = require("subset-utils"); 

const fontList = getFontList(FONTFAMILY.PretendardStd);
const variable = getFontList(FONTFAMILY.PretendardStd, { variable: true });

subsets(
  // Pretendard Std
  ["static",    "woff",  fontList],
  ["static",    "woff2", fontList],
  ["dynamic",   "woff",  fontList],
  ["dynamic",   "woff2", fontList],
  // Pretendard Std Variable
  ["static",    "woff2", variable],
  ["dynamic",   "woff2", variable]
);
