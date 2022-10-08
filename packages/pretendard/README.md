[**한국어**](/packages/pretendard/README.md) | [English](/packages/pretendard/docs/en/README.md) | [日本語](/packages/pretendard/docs/ja/README.md)

# Pretendard

![Thumbnail](/thumbnail.svg#gh-light-mode-only)
![Thumbnail](/thumbnail-white.svg#gh-dark-mode-only)

Pretendard는 크로스 플랫폼으로 제품을 제공할 때, 그리고 다국어 타이포그래피에서도 자연스러운 현대적인 글꼴입니다. [Inter](https://github.com/rsms/inter)와 [본고딕](https://fonts.adobe.com/fonts/source-han-sans-korean), 그리고 [M PLUS 1p](https://github.com/coz-m/MPLUS_FONTS)을 바탕으로 다듬어진 Pretendard는 읽기 환경에서 가독성과 시각 보정을 위해 추가적인 작업을 하지 않아도 됩니다.

Pretendard는 9가지 굵기로 제공되며, 가변 글꼴 또한 지원합니다.

## 배경 및 이야기

Pretendard의 배경과 특징, OpenType 기능 등을 설명하는 자세한 이야기는 [이곳](https://cactus.tistory.com/306)에서 확인하실 수 있습니다.

## 다운로드

### [최신 버전 다운로드](https://github.com/orioncactus/pretendard/releases/latest)

## 웹폰트

CDN을 이용해 Pretendard를 사용할 수 있으며, 토글을 확인해 기본적으로 추천하는 jsDelivr 외에도 cdnjs와 UNPKG 중에 원하는 CDN을 사용하실 수 있습니다.

일본어 및 한국 한자 환경, 또는 라틴 환경 전용 Pretendard 웹폰트를 사용하려면 아래로 이동하세요:

-   [Pretendard JP](/packages/pretendard-jp/)
-   [Pretendard Std](/packages/pretendard-std/)

---

모든 기능을 포함한 Pretendard를 웹폰트로 사용하려면 아래 코드를 사용하세요. 사용하는 font-family 이름은 `Pretendard` 입니다.

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css" />
```

<details>

<summary>cdnjs 및 UNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.6/static/pretendard.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.6/dist/web/static/pretendard.css" />
```

</details>

#### CSS

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css");
```

<details>

<summary>cdnjs 및 UNPKG</summary>

###### cdnjs

```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.6/static/pretendard.css");
```

###### UNPKG

```css
@import url("https://unpkg.com/pretendard@1.3.6/dist/web/static/pretendard.css");
```

</details>

---

### 다이나믹 서브셋

Pretendard에서는 웹폰트 용량 문제를 해결하기 위한 방법으로 Google Fonts에서 제공하는 한글 글꼴과 동일한 방식으로 동적 서브셋을 제공합니다. 페이지에 포함된 글자만 선택적으로 다운로드해 보다 빠르게 Pretendard를 사용하려면 아래 코드를 사용하세요. 사용하는 font-family 이름은 `Pretendard` 입니다.

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css" />
```

<details>

<summary>cdnjs 및 UNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.6/static/pretendard-dynamic-subset.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.6/dist/web/static/pretendard-dynamic-subset.css" />
```

</details>

#### CSS

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css");
```

<details>

<summary>cdnjs 및 UNPKG</summary>

###### cdnjs

```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.6/static/pretendard-dynamic-subset.css");
```

###### UNPKG

```css
@import url("https://unpkg.com/pretendard@1.3.6/dist/web/static/pretendard-dynamic-subset.css");
```

</details>

---

### 가변 다이나믹 서브셋

가변 다이나믹 서브셋으로 가변 Weight 속성과 함께 기존 다이나믹 서브셋보다 현저히 적은 용량으로 Pretendard를 사용할 수 있습니다. 모던 브라우저에서 더욱 쾌적하게 Pretendard를 사용하려면 아래 코드를 사용하세요. 사용하는 font-family 이름은 `"Pretendard Variable"` 입니다.

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css" />
```

<details>

<summary>cdnjs 및 UNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.6/variable/pretendardvariable-dynamic-subset.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css" />
```

</details>

#### CSS

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css");
```

<details>

<summary>cdnjs 및 UNPKG</summary>

###### cdnjs

```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.6/variable/pretendardvariable-dynamic-subset.css");
```

###### UNPKG

```css
@import url("https://unpkg.com/pretendard@1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css");
```

</details>

---

### 가변 글꼴

가변 weight 속성을 사용하려면 아래 코드를 사용하세요. 사용하는 font-family 이름은 `"Pretendard Variable"` 입니다.

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css" />
```

<details>

<summary>cdnjs 및 UNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.6/variable/pretendardvariable.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.6/dist/web/variable/pretendardvariable.css" />
```

</details>

#### CSS

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css");
```

<details>

<summary>cdnjs 및 UNPKG</summary>

###### cdnjs

```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.6/variable/pretendardvariable.css");
```

###### UNPKG

```css
@import url("https://unpkg.com/pretendard@1.3.6/dist/web/variable/pretendardvariable.css");
```

</details>

---

### font-family

시스템에 가능한 맞추고자 한다면 아래와 같은 font-family 구성을 추천합니다.

```css
font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
```

어디서든 동일한 환경을 가지고자 한다면 아래와 같은 font-family 구성을 추천합니다.

```css
font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
```

## 패키지

Pretendard는 아래와 같은 패키지 매니저에서 사용할 수 있습니다.

-   [npm](https://www.npmjs.com/package/pretendard)

```bash
npm i pretendard
```

-   [Yarn](https://yarnpkg.com/package/pretendard)

```bash
yarn add pretendard
```

## 시스템 폰트

Pretendard를 기기에 설치해 시스템 폰트로 사용할 수 있습니다.

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

## 크레딧

#### 바탕

[Inter](https://github.com/rsms/inter): Rasmus Andersson

#### 한글 바탕

[Source Han Sans](https://github.com/adobe-fonts/source-han-sans): Adobe, Google, 산돌커뮤니케이션; 장수영, 강주연

#### 가나 바탕

[M PLUS 1p](https://github.com/coz-m/MPLUS_FONTS): UNDERFOREST DESIGN; Coji Morishita

#### 리디자인 및 제작

길형진

## 라이선스

Pretendard는 [SIL 오픈 폰트 라이선스](https://scripts.sil.org/OFL)로 배포됩니다. 글꼴 단독 판매를 제외한 모든 상업적 행위 및 수정, 재배포가 가능합니다.

## 기여자

Pretendard에 기여해주셔서 진심으로 감사드립니다.

[@hiddenest](https://github.com/hiddenest): 웹폰트 서빙 및 CDN 업데이트 자동화, 서브셋 및 다이나믹 서브셋 제작, 그리고 가변 다이나믹 서브셋 자동화를 작업해주셨습니다.

[@leejh10003](https://github.com/leejh10003): Pretendard를 사용하는 [예시](/examples)를 제작해주셨습니다.

[@black7375](https://github.com/black7375): 모든 웹폰트 빌드 자동화, npmjs 및 Yarn에 Publish 및 릴리즈 파일 생성 자동화, CDN URL에서 버저닝 개선, 그리고 모노레포 대응을 작업해주셨습니다.

[@victorrica](https://github.com/victorrica): npm 및 Yarn 패키지 배포를 작업해주셨습니다.

[@kms0219kms](https://github.com/kms0219kms): 웹폰트 CDN 배포 다중화, 문서 포매팅 개선, 그리고 영어 및 일본어 문서화를 작업해주셨습니다.

[@Gamsake](https://github.com/Gamsake): 빌드 자동화를 개선해주셨습니다.

[@quiple](https://github.com/quiple): 일본어 Readme 번역을 개선해주셨습니다.

[@sudosubin](https://github.com/sudosubin): homebrew-cask-fonts 및 nix에 Pretendard를 추가해주셨습니다.

## Pretendard를 사용하는 곳

<p align="center">
   <a href="https://pocketlesson.com">
      <img src="https://user-images.githubusercontent.com/7247848/148687957-9102924d-5282-4526-a8c6-baddd9f26c39.png" align="center" height="50" alt="PocketLesson" hspace="16">
   </a>
   <a href="https://careerly.onelink.me/Gbs9/4ac8fc9d/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148687456-dfd8939e-0728-4551-9a79-cb434b389e82.png" align="center" height="50" alt="Careerly" hspace="16">
   </a>
   <a href="https://careerly.onelink.me/Gbs9/4ac8fc9d/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148689872-466b0f53-5901-44c6-94c2-8c2775733b4b.png" align="center" height="50" alt="Careerly" hspace="16">
   </a>
   <a href="https://pointing.life">
      <img src="https://user-images.githubusercontent.com/7247848/148687954-5ccb0a28-fcba-49e6-a76a-78e40afd21b8.png" align="center" height="50" alt="POINTING" hspace="16">
   </a>
   <a href="https://flex.team/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/130081248-1369c43d-6226-4e62-a101-93365d1933b5.png" align="center" height="50" alt="flex" hspace="16">
   </a>
   <a href="https://flex.team/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148690157-91a9459c-eaee-4a73-93af-62149bec1ba5.png" align="center" height="50" alt="flex" hspace="16">
   </a>
   <a href="https://festa.io#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148687380-12385bea-bebf-4c33-b9e7-a08aeb64c6a8.png" align="center" height="50" alt="Festa" hspace="16">
   </a>
   <a href="https://festa.io/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148690185-3b217e31-65f3-49fd-bdd7-af24b6a8299b.png" align="center" height="50" alt="Festa" hspace="16">
   </a>
   <a href="https://www.sundaynamaste.com">
      <img src="https://user-images.githubusercontent.com/7247848/148688031-f868235e-f5d6-4157-a4e5-a1e2e0c1214d.png" align="center" height="50" alt="썬데이나마스떼" hspace="16">
   </a>
   <a href="https://projectlion.io/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148688058-4d0dda62-b405-4002-a0b9-159c1f18afa6.png" align="center" height="50" alt="PROJECT LION" hspace="16">
   </a>
   <a href="https://projectlion.io/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148690212-967f0c1e-c62d-460b-bd43-ba119e5b695a.png" align="center" height="50" alt="PROJECT LION" hspace="16">
   </a>
   <a href="https://www.sandollcloud.com/font/16951.html">
      <img src="https://user-images.githubusercontent.com/7247848/148688131-a5a6f90b-2f78-4cfa-829b-ebd94d8a104c.png" align="center" height="58" alt="Sandoll Cloud" hspace="16">
   </a>
   <a href="https://www.catchfashion.com/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/138128414-89253ebd-7e27-446f-ae3c-a4c573e69e12.png" align="center" height="50" alt="캐치패션" hspace="16">
   </a>
   <a href="https://www.catchfashion.com/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148690254-4727dc6d-d049-4f4f-bbea-f11535dbfea6.png" align="center" height="50" alt="캐치패션" hspace="16">
   </a>
   <a href="https://publy.co/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/161258250-353ebe73-d7e2-4a61-8e16-7c2ec8f724a9.png" align="center" height="50" alt="PUBLY" hspace="16">
   </a>
   <a href="https://publy.co/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/161258327-e2cbfedf-a94a-49a8-8744-032fc194568f.png" align="center" height="50" alt="PUBLY" hspace="16">
   </a>
   <a href="https://apps.apple.com/kr/app/세탁특공대/id1049236217/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148689504-48c4e70d-4eaf-45cc-a941-d513dd1adaf2.png" align="center" height="50" alt="세탁특공대" hspace="16">
   </a>
   <a href="https://apps.apple.com/kr/app/세탁특공대/id1049236217/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148690282-84892f7d-04dd-4d70-be37-ec7984e44c3e.png" align="center" height="50" alt="세탁특공대" hspace="16">
   </a>
   <a href="https://event.kakaobank.com/p/checkcard2021#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148688409-8d658514-cf4f-486b-bd81-c7f94dff9618.png" align="center" height="50" alt="kakaobank" hspace="16">
   <a href="https://event.kakaobank.com/p/checkcard2021#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148690293-793bfc62-9708-4d26-9a73-8adc47bee2ca.png" align="center" height="50" alt="kakaobank" hspace="16">
   </a>
   <a href="https://kakaostyle.com/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148689267-accacc26-3639-4b47-a7d8-9f0bbef94384.png" align="center" height="50" alt="kakaostyle" hspace="16">
   </a>
   <a href="https://kakaostyle.com/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148689407-9d994b6d-d9b6-47d3-8d93-f7fa1836f160.png" align="center" height="50" alt="kakaostyle" hspace="16">
   </a>
   <a href="https://solved.ac/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148689351-855d8c25-3a10-44a9-b7b0-651c353f7079.png" align="center" height="50" alt="solved.ac" hspace="16">
   </a>
   <a href="https://solved.ac/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148689350-ef59e5f6-5e27-4c58-9264-d2c04200ff17.png" align="center" height="50" alt="solved.ac" hspace="16">
   </a>
   <a href="https://rallit.com/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/154992360-026a3e7d-d6e6-4dee-88b5-18e91de28eba.png" align="center" height="50" alt="rallit" hspace="16">
   </a>
   <a href="https://rallit.com/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/154992484-d9fc3d71-972d-4b00-a7de-8941eebe4c74.png" align="center" height="50" alt="rallit" hspace="16">
   </a>
   <a href="https://fonts.adobe.com/fonts/pretendard/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/158649641-e7dfffab-058e-4b84-90ae-eef3ec7bf85e.png" align="center" height="50" alt="Adobe Fonts" hspace="16">
   </a>
   <a href="https://fonts.adobe.com/fonts/pretendard/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/158649662-3242c2d3-ab0b-4c86-a702-51ffa66503fe.png" align="center" height="50" alt="Adobe Fonts" hspace="16">
   </a>
   <a href="https://www.wanted.co.kr/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/160057794-b4e1332b-fdcb-469d-8b8c-d9f23741d5c1.png" align="center" height="50" alt="Wanted" hspace="16">
   </a>
   <a href="https://www.wanted.co.kr/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/160057796-63bb66b4-efb9-4996-8241-eb2f0a74c8ab.png" align="center" height="50" alt="Wanted" hspace="16">
   </a>
   <a href="https://www.opencheongwadae.kr/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/179357995-d7cced8a-d7e5-4590-80d4-c04dc9940a95.png" align="center" height="50" alt="청와대, 국민 품으로" hspace="16">
   </a>
   <a href="https://www.opencheongwadae.kr/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/179357994-aa1597b7-44f5-495f-a5c2-0536f345a44f.png" align="center" height="50" alt="청와대, 국민 품으로" hspace="16">
   </a>
   <a href="https://holix.com">
      <img src="https://user-images.githubusercontent.com/7759511/178255186-32d8403d-cc25-4b63-b96e-1fd1c707957f.png" align="center" height="50" alt="HOLIX" hspace="16">
   </a>
   <a href="https://zep.us">
      <img src="https://user-images.githubusercontent.com/7247848/179358150-d4feb129-1122-450c-9eb7-0226aaeac0b6.png" align="center" height="50" alt="ZEP" hspace="16">
   </a>
   <a href="https://class101.net/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/179528001-724fbbcf-eee8-4911-b75a-4ba29e1ba19b.png" align="center" height="50" alt="CLASS101" hspace="16">
   </a>
   <a href="https://class101.net/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/179528009-b98bb489-090e-401a-ab02-568d10d33bca.png" align="center" height="50" alt="CLASS101" hspace="16">
   </a>
   <a href="https://www.goodchoice.kr">
      <img src="https://user-images.githubusercontent.com/7247848/179527313-a7ada75c-3dfb-4f65-a3c0-713ba4c5f7e1.png" align="center" height="50" alt="여기어때" hspace="16">
   </a>
   <a href="https://www.kbanknow.com/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/179527319-7431801e-a3c9-4260-858f-57c328cb9514.png" align="center" height="50" alt="Kbank" hspace="16">
   </a>
   <a href="https://www.kbanknow.com/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/179527318-82e966fa-8601-405a-a114-869f22669ccc.png" align="center" height="50" alt="Kbank" hspace="16">
   </a>
   <a href="https://blimp.space/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/179531911-d7b74140-c855-4280-b2f6-099937fe3345.png" align="center" height="50" alt="BLIMP" hspace="16">
   </a>
   <a href="https://blimp.space/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/179531916-faa0edc1-0356-4ac3-a167-d94a3691c061.png" align="center" height="50" alt="BLIMP" hspace="16">
   </a>
   <a href="https://www.lunit.io/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/36615680/191430516-ad2f7efa-a6e7-4719-a01d-f9471ce9b6d5.png" align="center" height="50" alt="Lunit" hspace="16">
   </a>
   <a href="https://www.lunit.io/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/36615680/191430575-704d18d9-95d9-41d6-836e-5fa400b51971.png" align="center" height="50" alt="Lunit" hspace="16">
   </a>
   <a href="https://www.iamport.kr/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/67222970/191770669-4eefe0f5-8c61-45db-8d49-c39b1c34e9c0.png" align="center" height="30" alt="iamport" hspace="16">
   </a>
   <a href="https://www.iamport.kr/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/67222970/191770855-499e4268-42b8-4fd0-9aeb-1468928240e2.png" align="center" height="30" alt="iamport" hspace="16">
   </a>
   <a href="https://www.hancomdocs.com/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/67222970/193015090-2988de41-a3f8-410c-9067-771725328ecd.png" align="center" height="30" alt="한컴독스" hspace="16">
   </a>
   <a href="https://www.hancomdocs.com/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/67222970/193015153-66ed803c-cf26-43fc-8f2e-dab8673e0774.png" align="center" height="30" alt="한컴독스" hspace="16">
   </a>
</p>

## 의견 나누기

새로운 개선 의견은 언제나 환영입니다. 해결이 필요한 경우 [Issues](https://github.com/orioncactus/pretendard/issues)에서 이슈를 등록해주세요.
