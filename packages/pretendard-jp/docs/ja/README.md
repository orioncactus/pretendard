[한국어](/packages/pretendard-jp/README.md) | [English](/packages/pretendard-jp/docs/en/README.md) | [**日本語**](/packages/pretendard-jp/docs/ja/README.md)

## Pretendard JP

日本語環境に適しており、すべての機能に対応する Pretendard を Web フォントとして使用するには、下記のコードを使用してください。使用する font-family 名は`'Pretendard JP'`です。

韓国語環境に合った外観を使用するには、stylesheet に次のコードを追加してください。`font-feature-settings: 'ss05';`

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.3/dist/web/static/pretendard-jp.css" />
```

<details>

<summary>cdnjsおよびUNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.3/static/pretendard-jp.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.3/dist/web/static/pretendard-jp.css" />
```

</details>

#### CSS

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.3/dist/web/static/pretendard-jp.css");
```

<details>

<summary>cdnjsおよびUNPKG</summary>

###### cdnjs

```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.3/static/pretendard-jp.css");
```

###### UNPKG

```css
@import url("https://unpkg.com/pretendard@1.3.3/dist/web/static/pretendard-jp.css");
```

</details>

---

### ダイナミックサブセット

日本語環境でページに含まれている文字のみを選択的にダウンロードしてより早く Pretendard を表示するには、下記のコードを使用してください。使用する font-family 名は`'Pretendard JP'`です。

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.3/dist/web/static/pretendard-jp-dynamic-subset.css" />
```

<details>

<summary>cdnjsおよびUNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.3/static/pretendard-jp-dynamic-subset.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.3/dist/web/static/pretendard-jp-dynamic-subset.css" />
```

</details>

#### CSS

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.3/dist/web/static/pretendard-jp-dynamic-subset.css");
```

<details>

<summary>cdnjsおよびUNPKG</summary>

###### cdnjs

```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.3/static/pretendard-jp-dynamic-subset.css");
```

###### UNPKG

```css
@import url("https://unpkg.com/pretendard@1.3.3/dist/web/static/pretendard-jp-dynamic-subset.css");
```

</details>

---

### 可変フォント

可変 weight プロパティを使用するには、下記のコードを使用してください。使用する font-family 名は`'Pretendard JP Variable'` です。

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.3/dist/web/variable/pretendardvariable-jp.css" />
```

<details>

<summary>cdnjsおよびUNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.3/variable/pretendardvariable-jp.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.3/dist/web/variable/pretendardvariable-jp.css" />
```

</details>

#### CSS

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.3/dist/web/variable/pretendardvariable-jp.css");
```

<details>

<summary>cdnjsおよびUNPKG</summary>

###### cdnjs

```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.3/variable/pretendardvariable-jp.css");
```

###### UNPKG

```css
@import url("https://unpkg.com/pretendard@1.3.3/dist/web/variable/pretendardvariable-jp.css");
```

</details>

---

### font-family

どこでも快適な環境を提供したい場合は、下記のような font-family 構成をお勧めします。

```css
font-family: "Pretendard JP", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Hiragino Sans", "Apple SD Gothic Neo", Meiryo, "Noto Sans JP", "Noto Sans KR", "Malgun Gothic", Osaka, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
```
