const { FONTFAMILY, getFontList, subsets } = require("subset-utils"); 

const fontList = getFontList(FONTFAMILY.PretendardJP);
subsets(
  ["static",    "woff",  fontList],
  ["static",    "woff2", fontList],
  ["variable",  "woff2", fontList],
  ["dynamic",   "woff",  fontList],
  ["dynamic",   "woff2", fontList]
);
