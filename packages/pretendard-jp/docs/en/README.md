[한국어](/packages/pretendard-jp/README.md) | [**English**](/packages/pretendard-jp/docs/en/README.md) | [日本語](/packages/pretendard-jp/docs/ja/README.md)

## Pretendard JP

Use the code below to use Pretendard as a webfonts which is suitable for the Japanese environment and also supports all features. Provided font-family name is `"Pretendard JP"`.

To use Korea-localized glyphs, add this code to stylesheets: `font-feature-settings: "ss05";`

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard-jp.css" />
```

<details>

<summary>cdnjs and UNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.5/static/pretendard-jp.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.5/dist/web/static/pretendard-jp.css" />
```

</details>

#### CSS

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard-jp.css");
```

<details>

<summary>cdnjs and UNPKG</summary>

###### cdnjs

```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.5/static/pretendard-jp.css");
```

###### UNPKG

```css
@import url("https://unpkg.com/pretendard@1.3.5/dist/web/static/pretendard-jp.css");
```

</details>

---

### Dynamic subset

Use the code below to use Pretendard faster by loads the font-slices required from the page in a Japanese environment. Provided font-family name is `"Pretendard JP"`.

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard-jp-dynamic-subset.css" />
```

<details>

<summary>cdnjs and UNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.5/static/pretendard-jp-dynamic-subset.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.5/dist/web/static/pretendard-jp-dynamic-subset.css" />
```

</details>

#### CSS

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard-jp-dynamic-subset.css");
```

<details>

<summary>cdnjs and UNPKG</summary>

###### cdnjs

```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.5/static/pretendard-jp-dynamic-subset.css");
```

###### UNPKG

```css
@import url("https://unpkg.com/pretendard@1.3.5/dist/web/static/pretendard-jp-dynamic-subset.css");
```

</details>

---

### Variable font

Use the code below to use the variable weight property. Provided font-family name is `"Pretendard JP Variable"`.

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/variable/pretendardvariable-jp.css" />
```

<details>

<summary>cdnjs and UNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.5/variable/pretendardvariable-jp.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.5/dist/web/variable/pretendardvariable-jp.css" />
```

</details>

#### CSS

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/variable/pretendardvariable-jp.css");
```

<details>

<summary>cdnjs and UNPKG</summary>

###### cdnjs

```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.5/variable/pretendardvariable-jp.css");
```

###### UNPKG

```css
@import url("https://unpkg.com/pretendard@1.3.5/dist/web/variable/pretendardvariable-jp.css");
```

</details>

---

### font-family

If you want to provide a comfortable environment anywhere, the following font-family are recommended:

```css
font-family: "Pretendard JP", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Hiragino Sans", "Apple SD Gothic Neo", Meiryo,   "Noto Sans JP", "Noto Sans KR", "Malgun Gothic", Osaka, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
```

## System font

Pretendard JP can be installed on the machine and used as a system font.

- [homebrew-cask-fonts](https://github.com/Homebrew/homebrew-cask-fonts)

```bash
brew tap homebrew/cask-fonts
brew install font-pretendard-jp
```

- [nix](https://github.com/NixOS/nixpkgs)

```nix
# configuration.nix
{
  fonts.fonts = with pkgs; [
    pretendard-jp
  ];
}
```
