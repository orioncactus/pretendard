[한국어](/packages/pretendard/README.md) | [**English**](/packages/pretendard/docs/en/README.md) | [日本語](/packages/pretendard/docs/ja/README.md)

# Pretendard

![Thumbnail](/thumbnail.svg#gh-light-mode-only)
![Thumbnail](/thumbnail-white.svg#gh-dark-mode-only)

Pretendard is a Neo-grotesque typeface suitable for cross-platform applications and multilingual typography. Pretendard is designed based on [Inter](https://github.com/rsms/inter), [Source Han Sans](https://fonts.adobe.com/fonts/source-han-sans-korean), and [M PLUS 1p](https://github.com/coz-m/MPLUS_FONTS). It provides enhanced text legibility without requiring further adjustments of scaling, letter-spacing, optical adjustments.

Pretendard is available in 9 weights, and also supports variable fonts.

## Background and story

You can read a detailed story about Pretendard’s background, features, and OpenType features [here(Korean)](https://cactus.tistory.com/306).

## Download

### [Download latest version](https://github.com/orioncactus/pretendard/releases/latest)

## Webfonts

You can use Pretendard via CDN, and in addition to the jsDelivr recommended by default, you can choose alternative CDNs you want, cdnjs or UNPKG by checking the toggle.

To use Pretendard webfonts for Japanese or Latin/Greek/Cyrillic-only, check below:

- [Pretendard JP](/packages/pretendard-jp/docs/en/)
- [Pretendard Std](/packages/pretendard-std/docs/en/)

---

Use the code below to use Pretendard as a web font with entire features. Provided font-family name is `Pretendard`.

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.4/dist/web/static/pretendard.css" />
```

<details>

<summary>cdnjs and UNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.4/static/pretendard.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.4/dist/web/static/pretendard.css" />
```

</details>

#### CSS

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.4/dist/web/static/pretendard.css");
```

<details>

<summary>cdnjs and UNPKG</summary>

###### cdnjs

```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.4/static/pretendard.css");
```

###### UNPKG

```css
@import url("https://unpkg.com/pretendard@1.3.4/dist/web/static/pretendard.css");
```

</details>

---

### Dynamic subset

Pretendard provides the dynamic subset same as Noto Sans Korean from Google Fonts to solve the webfonts capacity problem. Use the code below to use Pretendard faster by loads the font-slices required from the page. Provided font-family name is `Pretendard`.

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.4/dist/web/static/pretendard-dynamic-subset.css" />
```

<details>

<summary> cdnjs and UNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.4/static/pretendard-dynamic-subset.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.4/dist/web/static/pretendard-dynamic-subset.css" />
```

</details>

#### CSS

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.4/dist/web/static/pretendard-dynamic-subset.css");
```

<details>

<summary> cdnjs and UNPKG</summary>

###### cdnjs

```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.4/static/pretendard-dynamic-subset.css");
```

###### UNPKG

```css
@import url("https://unpkg.com/pretendard@1.3.4/dist/web/static/pretendard-dynamic-subset.css");
```

</details>

---

### Variable font

Use the code below to use the variable weight property. Provided font-family name is `"Pretendard Variable"`.

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.4/dist/web/variable/pretendardvariable.css" />
```

<details>

<summary> cdnjs and UNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.4/variable/pretendardvariable.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.4/dist/web/variable/pretendardvariable.css" />
```

</details>

#### CSS

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.4/dist/web/variable/pretendardvariable.css");
```

<details>

<summary> cdnjs and UNPKG</summary>

###### cdnjs

```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.4/variable/pretendardvariable.css");
```

###### UNPKG

```css
@import url("https://unpkg.com/pretendard@1.3.4/dist/web/variable/pretendardvariable.css");
```

</details>

---

### font-family

If you want to fit the system-font as much as possible, the following font-family are recommended:

```css
font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
```

If you want to provide the same environment anywhere, the following font-family are recommended:

```css
font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
```

## Package

Pretendard is available in the following package managers.

- [npm](https://www.npmjs.com/package/pretendard)

```bash
npm i pretendard
```

- [Yarn](https://yarnpkg.com/package/pretendard)

```bash
yarn add pretendard
```

## System font

Pretendard can be installed on the machine and used as a system font.

- [homebrew-cask-fonts](https://github.com/Homebrew/homebrew-cask-fonts)

```bash
brew tap homebrew/cask-fonts
brew install font-pretendard
```

- [nix](https://github.com/NixOS/nixpkgs)

```nix
# configuration.nix
{
  fonts.fonts = with pkgs; [
    pretendard
  ];
}
```

- [AUR](https://aur.archlinux.org/packages?K=pretendard)

```bash
yay -S otf-pretendard
yay -S ttf-pretendard
```

## License

Pretendard is distributed under the [SIL Open Fonts License](https://scripts.sil.org/OFL), which is allowed any commercial uses, modifications, and redistribution.

## Contributors

Thank you so much for your contribution to Pretendard.

[@hiddenest](https://github.com/hiddenest): Worked webfonts serving, created CDN assets purge automation, Provided webfonts subset, and dynamic subsets.

[@leejh10003](https://github.com/leejh10003): Worked making an [example](/examples) using Pretendard.

[@black7375](https://github.com/black7375): Worked automating all Webfont builds, automating release file creation, automating publish on npmjs and Yarn, improving versioning from CDN URLs, and setting monorepo.

[@victorrica](https://github.com/victorrica): Worked publishing npm and Yarn packages.

[@kms0219kms](https://github.com/kms0219kms): Worked webfonts CDN multiplexing, improving formatting from documentation, and readme localization.

[@Gamsake](https://github.com/Gamsake): Worked improving build automation.

[@quiple](https://github.com/quiple): Worked improving Japanese Readme translation.

## Issues

If you have a ploblem, please open an issue on [Issues](https://github.com/orioncactus/pretendard/issues).
