const { FONTFAMILY, getFontList, subsets } = require("subset-utils"); 

const fontList = getFontList(FONTFAMILY.Pretendard);
subsets(
  ["static",    "woff",  fontList],
  ["static",    "woff2", fontList],
  ["glyph",     "woff",  fontList],
  ["glyph",     "woff2", fontList],
  ["variable",  "woff2", fontList],
  ["dynamic",   "woff",  fontList],
  ["dynamic",   "woff2", fontList]
);
