interface ISubsets<T> {
    (kinds: TSubsetKinds, format: Tformat, fontList: IFontInfo): T;
}
interface IFontInfo {
    family: FONTFAMILY;
    fontList: string[];
    options: TFontListOptions;
}
declare type Tformat = "woff" | "woff2";
declare type TSubsetKinds = "static" | "glyph" | "variable" | "dynamic";
declare type TFontListOptions = {
    ext?: "ttf";
    variable?: boolean;
};
declare enum FONTFAMILY {
    Pretendard = "Pretendard",
    PretendardJP = "PretendardJP",
    PretendardStd = "PretendardStd"
}
declare function getFontList(family?: FONTFAMILY, options?: TFontListOptions): {
    family: FONTFAMILY;
    fontList: string[];
    options: TFontListOptions | undefined;
};
declare function subsets<T>(...subsetList: Parameters<ISubsets<T>>[]): Promise<void>;

export { FONTFAMILY, IFontInfo, ISubsets, getFontList, subsets };
