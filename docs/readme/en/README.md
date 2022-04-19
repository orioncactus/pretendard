| [KO](/README.md) | [**EN**](/docs/readme/en/README.md) | [JP](/docs/readme/en/README.md) |
|------------------|-------------------------------------|---------------------------------|

# Pretendard

![Thumbnail](/thumbnail.svg#gh-light-mode-only)
![Thumbnail](/thumbnail-white.svg#gh-dark-mode-only)

Pretendard is a modern font that looks natural when offering products cross-platform, and also in multilingual typography. [Inter](https://github.com/rsms/inter) and [Bongothic](https://fonts.adobe.com/fonts/source-han-sans-korean), and [M PLUS 1p]( Pretendard polished from https://github.com/coz-m/MPLUS_FONTS) requires no additional work to improve readability and visuals in a reading environment.

Pretendard is available in 9 weights and also supports variable fonts.

## Background and story

A detailed story explaining the background, features, and OpenType features of Pretendard can be found at [here] (https://cactus.tistory.com/306).

## Download

### [Download latest version] (https://github.com/orioncactus/pretendard/releases/latest)

## web font

You can use Pretendard using a CDN, and check the toggle to use the CDN of your choice, cdnjs or UNPKG, in addition to jsDelivr, which is recommended by default.

To use Pretendard webfonts for Japanese and Korean Hanja environments, or Latin environments only, go to:

- [Pretendard JP](/docs/webfonts/en/PretendardJP.md)
- [Pretendard Std](/docs/webfonts/en/PretendardStd.md)

---

Use the code below to use Pretendard as a web font with all features. The font-family name we use is `Pretendard`.

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
```

<details>

<summary>cdnjs and UNPKG</summary>

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

<details>

<summary>cdnjs and UNPKG</summary>

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

### Dynamic Subset

Pretendard provides dynamic subset in the same way as Noto Sans KR provided by Google Fonts as a way to solve the web font capacity problem. Use the code below to display Pretendard faster by selectively downloading only the text included on the page. The font-family name we use is `Pretendard`.

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css" />
```

<details>

<summary>cdnjs and UNPKG</summary>

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

<details>

<summary>cdnjs and UNPKG</summary>

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

### Variable Fonts

Use the code below to use the variable weight property. The font-family name we use is `'Pretendard Variable'`.

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css" />
```

<details>

<summary>cdnjs and UNPKG</summary>

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

<details>

<summary>cdnjs and UNPKG</summary>

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

If you want to adapt as much as possible to your system, the following font-family configuration is recommended.

```css
font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
```

If you want to have the same environment anywhere, the following font-family configuration is recommended.

```css
font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
```

## package

Pretendard is available in the following package managers.

- [npm](https://www.npmjs.com/package/pretendard)

```bash
npm i pretendard
```

- [Yarn](https://yarnpkg.com/package/pretendard)

```bash
yarn add pretendard
```

## License

Pretendard is distributed under the [SIL Open Font License] (https://scripts.sil.org/OFL). All commercial activities, modifications, and redistribution are allowed except for the sole sale of fonts.

## Contributors

Thank you very much for your contribution to Pretendard.

[@hiddenest](https://github.com/hiddenest): You have created webfont serving and CDN update automation, subset operations, and dynamic subsets.

[@leejh10003](https://github.com/leejh10003): Thank you for creating [examples](/examples) using Pretendard.

[@black7375](https://github.com/black7375): Automated subset and dynamic subset builds, and automated release file creation.

[@victorrica](https://github.com/victorrica): You worked on distributing the npm and Yarn packages.

[@kms0219kms](https://github.com/kms0219kms): You worked on webfont CDN distribution multiplexing.

[@Gamsake](https://github.com/Gamsake): Thanks for improving the build automation.

## Where to use Pretendard

<p align="center">
   <a href="https://pocketlesson.com">
      <img src="https://user-images.githubusercontent.com/7247848/148687957-9102924d-5282-4526-a8c6-baddd9f26c39.png" align="center" height="50" alt="PocketLesson" hspace= "16">
   </a>
   <a href="https://careerly.onelink.me/Gbs9/4ac8fc9d/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148687456-dfd8939e-0728-4551-9a79-cb434b389e82.png" align="center" height="50" alt="Careerly" hspace= "16">
   </a>
   <a href="https://careerly.onelink.me/Gbs9/4ac8fc9d/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148689872-466b0f53-5901-44c6-94c2-8c2775733b4b.png" align="center" height="50" alt="Careerly" hspace= "16">
   </a>
   <a href="https://pointing.life">
      <img src="https://user-images.githubusercontent.com/7247848/148687954-5ccb0a28-fcba-49e6-a76a-78e40afd21b8.png" align="center" height="50" alt="POINTING" hspace= "16">
   </a>
   <a href="https://flex.team/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/130081248-1369c43d-6226-4e62-a101-93365d1933b5.png" align="center" height="50" alt="flex" hspace= "16">
   </a>
   <a href="https://flex.team/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148690157-91a9459c-eaee-4a73-93af-62149bec1ba5.png" align="center" height="50" alt="flex" hspace= "16">
   </a>
   <a href="https://festa.io#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148687380-12385bea-bebf-4c33-b9e7-a08aeb64c6a8.png" align="center" height="50" alt="Festa" hspace= "16">
   </a>
   <a href="https://festa.io/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148690185-3b217e31-65f3-49fd-bdd7-af24b6a8299b.png" align="center" height="50" alt="Festa" hspace= "16">
   </a>
   <a href="https://www.sundaynamaste.com">
      <img src="https://user-images.githubusercontent.com/7247848/148688031-f868235e-f5d6-4157-a4e5-a1e2e0c1214d.png" align="center" height="50" alt="Sunday Maste" hspace ="16">
   </a>
   <a href="https://projectlion.io/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148688058-4d0dda62-b405-4002-a0b9-159c1f18afa6.png" align="center" height="50" alt="PROJECT LION" hspace ="16">
   </a>
   <a href="https://projectlion.io/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148690212-967f0c1e-c62d-460b-bd43-ba119e5b695a.png" align="center" height="50" alt="PROJECT LION" hspace ="16">
   </a>
   <a href="https://www.sandollcloud.com/font/16951.html">
      <img src="https://user-images.githubusercontent.com/7247848/148688131-a5a6f90b-2f78-4cfa-829b-ebd94d8a104c.png" align="center" height="58" alt="Sandoll Cloud" hspace ="16">
   </a>
   <a href="https://www.catchfashion.com/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/138128414-89253ebd-7e27-446f-ae3c-a4c573e69e12.png" align="center" height="50" alt="Catch Fashion" hspace ="16">
   </a>
   <a href="https://www.catchfashion.com/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148690254-4727dc6d-d049-4f4f-bbea-f11535dbfea6.png" align="center" height="50" alt="Catch Fashion" hspace ="16">
   </a>
   <a href="https://publy.co/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/161258250-353ebe73-d7e2-4a61-8e16-7c2ec8f724a9.png" align="center" height="50" alt="PUBLY" hspace= "16">
   </a>
   <a href="https://publy.co/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/161258327-e2cbfedf-a94a-49a8-8744-032fc194568f.png" align="center" height="50" alt="PUBLY" hspace= "16">
   </a>
   <a href="https://apps.apple.com/kr/app/laundry/id1049236217/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148689504-48c4e70d-4eaf-45cc-a941-d513dd1adaf2.png" align="center" height="50" alt="Laundry Commando" hspace ="16">
   </a>
   <a href="https://apps.apple.com/kr/app/laundry/id1049236217/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148690282-84892f7d-04dd-4d70-be37-ec7984e44c3e.png" align="center" height="50" alt="Laundry Commando" hspace ="16">
   </a>
   <a href="https://event.kakaobank.com/p/checkcard2021#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148688409-8d658514-cf4f-486b-bd81-c7f94dff9618.png" align="center" height="50" alt="kakaobank" hspace= "16">
   <a href="https://event.kakaobank.com/p/checkcard2021#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148690293-793bfc62-9708-4d26-9a73-8adc47bee2ca.png" align="center" height="50" alt="kakaobank" hspace= "16">
   </a>
   <a href="https://kakaostyle.com/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148689267-accacc26-3639-4b47-a7d8-9f0bbef94384.png" align="center" height="50" alt="kakaostyle" hspace= "16">
   </a>
   <a href="https://kakaostyle.com/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148689407-9d994b6d-d9b6-47d3-8d93-f7fa1836f160.png" align="center" height="50" alt="kakaostyle" hspace= "16">
   </a>
   <a href="https://solved.ac/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148689351-855d8c25-3a10-44a9-b7b0-651c353f7079.png" align="center" height="50" alt="solved.ac" hspace="16">
   </a>
   <a href="https://solved.ac/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148689350-ef59e5f6-5e27-4c58-9264-d2c04200ff17.png" align="center" height="50" alt="solved.ac" hspace="16">
   </a>
   <a href="https://rallit.com/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/154992360-026a3e7d-d6e6-4dee-88b5-18e91de28eba.png" align="center" height="50" alt="rallit" hspace= "16">
   </a>
   <a href="https://rallit.com/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/154992484-d9fc3d71-972d-4b00-a7de-8941eebe4c74.png" align="center" height="50" alt="rallit" hspace= "16">
   </a>
   <a href="https://fonts.adobe.com/fonts/pretendard/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/158649641-e7dfffab-058e-4b84-90ae-eef3ec7bf85e.png" align="center" height="50" alt="Adobe Fonts" hspace ="16">
   </a>
   <a href="https://fonts.adobe.com/fonts/pretendard/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/158649662-3242c2d3-ab0b-4c86-a702-51ffa66503fe.png" align="center" height="50" alt="Adobe Fonts" hspace ="16">
   </a>
   <a href="https://www.wantedlab.com/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/160057794-b4e1332b-fdcb-469d-8b8c-d9f23741d5c1.png" align="center" height="50" alt="Wantedlab" hspace= "16">
   </a>
   <a href="https://www.wantedlab.com/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/160057796-63bb66b4-efb9-4996-8241-eb2f0a74c8ab.png" align="center" height="50" alt="Wantedlab" hspace= "16">
   </a>
</p>

## Share your opinion

New improvements are always welcome. If you need resolution, please register an issue at [Issues] (https://github.com/orioncactus/pretendard/issues).
