#!/bin/bash
ROOT_DIR="$PWD"
PACKAGE_LIST=("pretendard" "pretendard-jp" "pretendard-std" "pretendard-gov")
KIND_LIST=("static" "variable")

rm -rf ./dist
for packageDir in "${PACKAGE_LIST[@]}"; do
  srcDir="packages/${packageDir}/dist"

  for kind in "${KIND_LIST[@]}"; do
    kindDir="${srcDir}/web/${kind}/"
    distDir="${ROOT_DIR}/dist/web/${kind}/"
    faceURL_SRC="\./"
    faceURL_DIST="../../../${kindDir}"

    cd "${ROOT_DIR}/${kindDir}"
    sed -i "s/${faceURL_SRC//\//\\\/}/${faceURL_DIST//\//\\\/}/g" *.css
    mkdir -p "${distDir}" && cp *.css "${distDir}"
  done
done

cd "${ROOT_DIR}"
git checkout HEAD -- packages/
