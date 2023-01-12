const { FONTFAMILY, getFontList, subsets } = require("subset-utils");

const fontList = getFontList(FONTFAMILY.Pretendard);
const variable = getFontList(FONTFAMILY.Pretendard, { variable: true });

subsets(
  // Pretendard woff
  ["static",    "woff",  fontList],
  ["glyph",     "woff",  fontList],
  ["dynamic",   "woff",  fontList],

  // Pretendard woff2
  ["static",    "woff2", fontList],
  ["glyph",     "woff2", fontList],
  ["dynamic",   "woff2", fontList],

  // Pretendard Variable
  ["static",    "woff2", variable],
  ["dynamic",   "woff2", variable]
);
