[한국어](/README.md) | [English](/docs/readme/en/README.md) | [**日本語**](/docs/readme/ja/README.md)

# Pretendard

![Thumbnail](/thumbnail.svg#gh-light-mode-only)
![Thumbnail](/thumbnail-white.svg#gh-dark-mode-only)

Pretendardは、クロスプラットフォームで製品を提供するとき、そして多言語タイポグラフィでも自然な現代的なフォントです。[Inter](https://github.com/rsms/inter)と[源ノ角ゴシック](https://fonts.adobe.com/fonts/source-han-sans-japanese)、そして[M PLUS 1p](https://github.com/coz-m/MPLUS_FONTS)に基づいて整えられたPretendardは、読み込み環境で可読性と視覚補正のために追加の作業をする必要はありません。

Pretendardは9種類の太さで提供され、可変フォントにも対応しています。

## 背景と概要

Pretendardの背景や特徴、OpenType機能などを説明する詳細な話は[こちら(韓国語)](https://cactus.tistory.com/306)で確認できます。

## ダウンロード

### [最新バージョンをダウンロード](https://github.com/orioncactus/pretendard/releases/latest)

## Webフォント

CDNを利用してPretendardを使用することができ、トグルをチェックして基本的に推奨するjsDelivr以外にもcdnjsとUNPKGの中でお好みのCDNを使用することができます。

日本語およびKS漢字環境、またはラテン環境専用のPretendardのWebフォントを使用するには、以下をご覧ください。

-   [Pretendard JP](/docs/webfonts/ja/PretendardJP.md)
-   [Pretendard Std(英語)](/docs/webfonts/en/PretendardStd.md)

---

すべての機能を含むPretendardをWebフォントとして使用するには、下記のコードを使用してください。使用するfont-family名は`Pretendard`です。

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
```

<details/>

<summary>cdnjsおよびUNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.0/static/pretendard.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.0/dist/web/static/pretendard.css" />
```

</details>

#### CSS

```css
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
```

<details/>

<summary>cdnjsおよびUNPKG</summary>

###### cdnjs

```css
@import url('https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.0/static/pretendard.css');
```

###### UNPKG

```css
@import url('https://unpkg.com/pretendard@1.3.0/dist/web/static/pretendard.css');
```

</details>

---

### ダイナミックサブセット

Pretendardは、Webフォントの容量の問題を解決するための方法として、Google Fontsで提供されるNoto Sans JPと同じ方法で動的サブセットを提供します。ページに含まれている文字のみを選択的にダウンロードしてより早くPretendardを表示するには、下記のコードを使用してください。使用するfont-family名は`Pretendard`です。

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css" />
```

<details/>

<summary>cdnjsおよびUNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.0/static/pretendard-dynamic-subset.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.0/dist/web/static/pretendard-dynamic-subset.css" />
```

</details>

#### CSS

```css
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css');
```

<details/>

<summary>cdnjsおよびUNPKG</summary>

###### cdnjs

```css
@import url('https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.0/static/pretendard-dynamic-subset.css');
```

###### UNPKG

```css
@import url('https://unpkg.com/pretendard@1.3.0/dist/web/static/pretendard-dynamic-subset.css');
```

</details>

---

### 可変フォント

可変weightプロパティを使用するには、下記のコードを使用してください。使用するfont-family名は`'Pretendard Variable'`です。

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css" />
```

<details/>

<summary>cdnjsおよびUNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.0/variable/pretendardvariable.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.0/dist/web/variable/pretendardvariable.css" />
```

</details>

#### CSS

```css
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
```

<details/>

<summary>cdnjsおよびUNPKG</summary>

###### cdnjs

```css
@import url('https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.0/variable/pretendardvariable.css');
```

###### UNPKG

```css
@import url('https://unpkg.com/pretendard@1.3.0/dist/web/variable/pretendardvariable.css');
```

</details>

---

### font-family

システムにできるだけ合わせたいなら、下記のようなfont-family構成をおすすめします。

```css
font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
```

どこでも同じ環境を持ちたければ下記のようなfont-family構成をおすすめします。

```css
font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
```

## パッケージ

Pretendardは以下のパッケージマネージャで利用できます。

-   [npm](https://www.npmjs.com/package/pretendard)

```bash
npm i pretendard
```

-   [Yarn](https://yarnpkg.com/package/pretendard)

```bash
yarn add pretendard
```

## ライセンス

Pretendardは[SIL Open Font License](https://scripts.sil.org/OFL)として配布されています。フォントの単独販売を除くすべての商業行為、修正、再配布が可能です。

## コントリビューター

Pretendardにコントリビュートしていただきありがとうございます。

[@hiddenest](https://github.com/hiddenest): WebフォントサービングとCDNアップデートの自動化、サブセット作業、そしてダイナミックサブセットを作成しました。

[@ leejh10003](https://github.com/leejh10003): Pretendardが使用された[例](/examples)を作成しました。

[@black7375](https://github.com/black7375): サブセットとダイナミックサブセットビルドオートメーション、リリースファイル生成オートメーションを作成しました。

[@victorrica](https://github.com/victorrica): npmとYarnパッケージの配布に取り組んできました。

[@ kms0219kms](https://github.com/kms0219kms): WebフォントのCDN配布多重化に取り組んできました。

[@Gamsake](https://github.com/Gamsake): ビルドの自動化を改善しました。


## Issues

解決が必要な場合は、 [Issues](https://github.com/orioncactus/pretendard/issues)でIssueを登録してください。
