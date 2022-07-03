[한국어](/packages/pretendard/README.md) | [English](/packages/pretendard/docs/en/README.md) | [**日本語**](/packages/pretendard/docs/ja/README.md)

# Pretendard

![Thumbnail](/thumbnail.svg#gh-light-mode-only)
![Thumbnail](/thumbnail-white.svg#gh-dark-mode-only)

Pretendard は、クロスプラットフォームで製品を提供するとき、そして多言語タイポグラフィでも自然な現代的なフォントです。[Inter](https://github.com/rsms/inter)と[源ノ角ゴシック](https://fonts.adobe.com/fonts/source-han-sans-japanese)、そして[M PLUS 1p](https://github.com/coz-m/MPLUS_FONTS)に基づいて整えられた Pretendard は、読み込み環境で可読性と視覚補正のために追加の作業をする必要はありません。

Pretendard は 9 種類の太さで提供され、可変フォントにも対応しています。

## 背景と概要

Pretendard の背景や特徴、OpenType 機能などを説明する詳細な話は[こちら(韓国語)](https://cactus.tistory.com/306)で確認できます。

## ダウンロード

### [最新バージョンをダウンロード](https://github.com/orioncactus/pretendard/releases/latest)

## Web フォント

CDN を利用して Pretendard を使用することができ、トグルをチェックして基本的に推奨する jsDelivr 以外にも cdnjs と UNPKG の中でお好みの CDN を使用することができます。

日本語および KS 漢字環境、またはラテン環境専用の Pretendard の Web フォントを使用するには、以下をご覧ください。

- [Pretendard JP](/packages/pretendard-jp/docs/ja/)
- [Pretendard Std(英語)](/packages/pretendard-std/docs/en/)

---

すべての機能を含む Pretendard を Web フォントとして使用するには、下記のコードを使用してください。使用する font-family 名は`Pretendard`です。

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.4/dist/web/static/pretendard.css" />
```

<details>

<summary>cdnjsおよびUNPKG</summary>

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

<summary>cdnjsおよびUNPKG</summary>

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

### ダイナミックサブセット

Pretendard は、Web フォントの容量の問題を解決するための方法として、Google Fonts で提供される Noto Sans JP と同じ方法で動的サブセットを提供します。ページに含まれている文字のみを選択的にダウンロードしてより早く Pretendard を表示するには、下記のコードを使用してください。使用する font-family 名は`Pretendard`です。

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.4/dist/web/static/pretendard-dynamic-subset.css" />
```

<details>

<summary>cdnjsおよびUNPKG</summary>

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

<summary>cdnjsおよびUNPKG</summary>

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

### 可変フォント

可変 weight プロパティを使用するには、下記のコードを使用してください。使用する font-family 名は`'Pretendard Variable'`です。

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.4/dist/web/variable/pretendardvariable.css" />
```

<details>

<summary>cdnjsおよびUNPKG</summary>

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

<summary>cdnjsおよびUNPKG</summary>

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

システムにできるだけ合わせたいなら、下記のような font-family 構成をおすすめします。

```css
font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
```

どこでも同じ環境を持ちたければ下記のような font-family 構成をおすすめします。

```css
font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
```

## パッケージ

Pretendard は以下のパッケージマネージャで利用できます。

- [npm](https://www.npmjs.com/package/pretendard)

```bash
npm i pretendard
```

- [Yarn](https://yarnpkg.com/package/pretendard)

```bash
yarn add pretendard
```

## ライセンス

Pretendard は[SIL Open Font License](https://scripts.sil.org/OFL)として配布されています。フォントの単独販売を除くすべての商業行為、修正、再配布が可能です。

## コントリビューター

Pretendard にコントリビュートしていただきありがとうございます。

[@hiddenest](https://github.com/hiddenest): Web フォントサービングと CDN アップデートの自動化、サブセット作業、そしてダイナミックサブセットを作成しました。

[@leejh10003](https://github.com/leejh10003): Pretendard が使用された[例](/examples)を作成しました。

[@black7375](https://github.com/black7375): サブセットとダイナミックサブセットビルド自動化、リリースファイル作成を自動化しました。

[@victorrica](https://github.com/victorrica): npm と Yarn パッケージの配布を作業しました。

[@kms0219kms](https://github.com/kms0219kms): Web フォント CDN 配布多重化、Readme 英語及び日本語文書化を作業してくださいました。

[@Gamsake](https://github.com/Gamsake): ビルド自動化を改善しました。

[@quiple](https://github.com/quiple): 日本語 Readme 翻訳を改善してくださいました。

## Issues

解決が必要な場合は、 [Issues](https://github.com/orioncactus/pretendard/issues)で Issue を登録してください。
