const { FONTFAMILY, getFontList, subsets } = require("subset-utils");

const fontList = getFontList(FONTFAMILY.PretendardJP);
const variable = getFontList(FONTFAMILY.PretendardJP, { variable: true });

subsets(
  // Pretendard JP woff
  ["static",    "woff",  fontList],
  ["dynamic",   "woff",  fontList],

  // Pretendard JP woff2
  ["static",    "woff2", fontList],
  ["dynamic",   "woff2", fontList],

  // Pretendard JP Variable
  ["static",    "woff2", variable],
  ["dynamic",   "woff2", variable]
);
