const { FONTFAMILY, getFontList, subsets } = require("subset-utils");

const fontList = getFontList(FONTFAMILY.PretendardStd);
const variable = getFontList(FONTFAMILY.PretendardStd, { variable: true });

subsets(
  // Pretendard Std woff
  ["static",    "woff",  fontList],
  ["dynamic",   "woff",  fontList],

  // Pretendard Std woff2
  ["static",    "woff2", fontList],
  ["dynamic",   "woff2", fontList],

  // Pretendard Std Variable
  ["static",    "woff2", variable],
  ["dynamic",   "woff2", variable]
);
