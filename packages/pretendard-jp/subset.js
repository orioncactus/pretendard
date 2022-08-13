const { FONTFAMILY, getFontList, subsets } = require("subset-utils"); 

const fontList = getFontList(FONTFAMILY.PretendardJP);
const variable = getFontList(FONTFAMILY.PretendardJP, { variable: true });

subsets(
  ["static",    "woff",  fontList],
  ["static",    "woff2", fontList],
  ["dynamic",   "woff",  fontList],
  ["dynamic",   "woff2", fontList],
  ["dynamic",   "woff2", variable],
  ["variable",  "woff2", variable]
);
