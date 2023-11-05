[한국어](/packages/pretendard/README.md) | [English](/packages/pretendard/docs/en/README.md) | [**日本語**](/packages/pretendard/docs/ja/README.md)

# Pretendard

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/ed71995e50e97c34f92fbb33a46f44eb615d98e4/thumbnail-white.svg">
  <img src="https://raw.githubusercontent.com/orioncactus/pretendard/ed71995e50e97c34f92fbb33a46f44eb615d98e4/thumbnail.svg" alt="Thumbnail">
</picture>

Pretendardは、クロスプラットフォームで製品を提供するとき、そして多言語タイポグラフィでも自然な現代的なフォントです。[Inter](https://github.com/rsms/inter)と[源ノ角ゴシック](https://fonts.adobe.com/fonts/source-han-sans-japanese)、そして[M PLUS 1p](https://github.com/coz-m/MPLUS_FONTS)に基づいて整えられたPretendardは、読み込み環境で可読性と視覚補正のために追加の作業をする必要はありません。

Pretendardは9種類の太さで提供され、可変フォントにも対応しています。

## 背景と概要

Pretendardの背景や特徴、OpenType機能などを説明する詳細な話は[こちら(韓国語)](https://cactus.tistory.com/306)で確認できます。

## ダウンロード

### [最新バージョンをダウンロード](https://github.com/orioncactus/pretendard/releases/latest)

## ファミリー

特定の環境に適したPretendardを使用するには、以下をご覧ください

-   [Pretendard JP](/packages/pretendard-jp/docs/ja/)：日本の環境に適しており、韓国の漢字環境に対応するOpenType機能があります。
-   [Pretendard Std(英語)](/packages/pretendard-std/docs/en/)：ラテン環境に適しています。
-   [Pretendard GOV(韓国語)](/packages/pretendard-gov/)：韓国の公共サービス環境に適しています。

## Webフォント

CDNを利用してPretendardを使用することができ、トグルをチェックして基本的に推奨するjsDelivr以外にもcdnjsとUNPKGの中でお好みのCDNを使用することができます。

---

すべての機能を含むPretendardをWebフォントとして使用するには、下記のコードを使用してください。使用するfont-family名は`Pretendard`です。

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
```

<details>

<summary>cdnjsおよびUNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.min.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.9/dist/web/static/pretendard.css" />
```

</details>

#### CSS

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
```

<details>

<summary>cdnjsおよびUNPKG</summary>

###### cdnjs

```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.min.css");
```

###### UNPKG

```css
@import url("https://unpkg.com/pretendard@1.3.9/dist/web/static/pretendard.css");
```

</details>

---

### ダイナミックサブセット

Pretendardは、Webフォントの容量の問題を解決するための方法として、Google Fontsで提供されるNoto Sans JPと同じ方法で動的サブセットを提供します。ページに含まれている文字のみを選択的にダウンロードしてより早くPretendardを表示するには、下記のコードを使用してください。使用するfont-family名は`Pretendard`です。

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" />
```

<details>

<summary>cdnjsおよびUNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard-dynamic-subset.min.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.9/dist/web/static/pretendard-dynamic-subset.css" />
```

</details>

#### CSS

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css");
```

<details>

<summary>cdnjsおよびUNPKG</summary>

###### cdnjs

```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard-dynamic-subset.min.css");
```

###### UNPKG

```css
@import url("https://unpkg.com/pretendard@1.3.9/dist/web/static/pretendard-dynamic-subset.css");
```

</details>

---

### 可変ダイナミックサブセット

従来のダイナミックサブセットより著しく少ない容量で可変Weight属性と共にPretendardを使用できます。 モダンブラウザでより快適にPretendardを使用するには、以下のコードを使用してください。 使用するfont-familyの名前は`"Pretendard Variable"`です。


#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
```

<details>

<summary>cdnjsおよびUNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/variable/pretendardvariable-dynamic-subset.min.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css" />
```

</details>

#### CSS

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");
```

<details>

<summary>cdnjsおよびUNPKG</summary>

###### cdnjs

```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/variable/pretendardvariable-dynamic-subset.min.css");
```

###### UNPKG

```css
@import url("https://unpkg.com/pretendard@1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css");
```

</details>

### 可変フォント

可変weightプロパティを使用するには、下記のコードを使用してください。使用するfont-family名は`"Pretendard Variable"`です。

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
```

<details>

<summary>cdnjsおよびUNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/variable/pretendardvariable.min.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.9/dist/web/variable/pretendardvariable.css" />
```

</details>

#### CSS

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css");
```

<details>

<summary>cdnjsおよびUNPKG</summary>

###### cdnjs

```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/variable/pretendardvariable.min.css");
```

###### UNPKG

```css
@import url("https://unpkg.com/pretendard@1.3.9/dist/web/variable/pretendardvariable.css");
```

</details>

---

### font-family

システムにできるだけ合わせたいなら、下記のようなfont-family構成をおすすめします。

```css
font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
```

どこでも同じ環境を持ちたければ下記のようなfont-family構成をおすすめします。

```css
font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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

## システムフォント

Pretendardはデバイスにインストールしてシステムフォントとして使用できます。

-   [homebrew-cask-fonts](https://github.com/Homebrew/homebrew-cask-fonts)

```bash
brew tap homebrew/cask-fonts
brew install font-pretendard
```

-   [nix](https://github.com/NixOS/nixpkgs)

```nix
# configuration.nix
{
  fonts.fonts = with pkgs; [
    pretendard
  ];
}
```

-   [AUR](https://aur.archlinux.org/packages?K=pretendard)

```bash
yay -S otf-pretendard
yay -S ttf-pretendard
```

## クレジット

#### ベース

[Inter](https://github.com/rsms/inter): Rasmus Andersson

#### ハングルグリフ

[Source Han Sans](https://github.com/adobe-fonts/source-han-sans): Adobe, Google, Sandoll Communications; Jang Soo-young and Kang Joo-yeon

#### 仮名グリフ

[M PLUS 1p](https://github.com/coz-m/MPLUS_FONTS): UNDERFOREST DESIGN; 森下浩司

#### リデザインと制作

Kil Hyung-jin

## ライセンス

Pretendardは[SIL Open Font License](https://scripts.sil.org/OFL)として配布されています。フォントの単独販売を除くすべての商業行為、修正、再配布が可能です。

## コントリビューター

Pretendardにコントリビュートしていただきありがとうございます。

[@hiddenest](https://github.com/hiddenest): WebフォントサービングとCDNアップデートの自動化、サブセットとダイナミックサブセットの作業、そして可変ダイナミックサブセットの自動化を作業してくださいました。

[@leejh10003](https://github.com/leejh10003): Pretendardが使用された[例](/examples)を作成しました。

[@black7375](https://github.com/black7375): すべてのWebフォントビルド自動化、npmjsおよびYarnにPublishおよびリリースファイル生成自動化、CDN URLでブザーニング改善、monorepo対応、ビルドパフォーマンスの向上、そしてPretendard GOV CDNのドキュメンテーション作業を行ってくださいました。

[@victorrica](https://github.com/victorrica): npmとYarn パッケージの配布を作業しました。

[@kms0219kms](https://github.com/kms0219kms): すべてのWebフォントCDN配布多重化、ReadmeでのFormattingの改善、Readmeの英語及び日本語文書化を作業してくださいました。

[@Gamsake](https://github.com/Gamsake): ビルド自動化を改善しました。

[@quiple](https://github.com/quiple): 日本語Readme翻訳を改善してくださいました。

[@sudosubin](https://github.com/sudosubin): homebrew-cask-fontsとnixにPretendardを追加しました。

## Issues

解決が必要な場合は、[Issues](https://github.com/orioncactus/pretendard/issues)でIssueを登録してください。
