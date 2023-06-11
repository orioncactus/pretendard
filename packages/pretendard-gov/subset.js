const { FONTFAMILY, getFontList, subsets } = require("subset-utils");

const fontList = getFontList(FONTFAMILY.PretendardGOV);
const variable = getFontList(FONTFAMILY.PretendardGOV, { variable: true });

subsets(
  // Pretendard GOV woff
  ["static",    "woff",  fontList],
  ["glyph",     "woff",  fontList],
  ["dynamic",   "woff",  fontList],

  // Pretendard GOV woff2
  ["static",    "woff2", fontList],
  ["glyph",     "woff2", fontList],
  ["dynamic",   "woff2", fontList],

  // Pretendard GOV Variable
  ["static",    "woff2", variable],
  ["dynamic",   "woff2", variable]
);
