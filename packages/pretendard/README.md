[**한국어**](/packages/pretendard/README.md) | [English](/packages/pretendard/docs/en/README.md) | [日本語](/packages/pretendard/docs/ja/README.md)

# Pretendard

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/orioncactus/pretendard/blob/HEAD/docs/images/thumbnail/dark/thumbnail.svg">
  <img src="https://github.com/orioncactus/pretendard/blob/HEAD/docs/images/thumbnail/light/thumbnail.svg" alt="Thumbnail">
</picture>

Pretendard는 크로스 플랫폼으로 제품을 제공할 때, 그리고 다국어 타이포그래피에서도 자연스러운 현대적인 글꼴입니다. [Inter](https://github.com/rsms/inter)와 [본고딕](https://fonts.adobe.com/fonts/source-han-sans-korean), 그리고 [M PLUS 1p](https://github.com/coz-m/MPLUS_FONTS)을 바탕으로 다듬어진 Pretendard는 읽기 환경에서 가독성과 시각 보정을 위해 추가적인 작업을 하지 않아도 됩니다.

Pretendard는 9가지 굵기로 제공되며, 가변 글꼴 또한 지원합니다.

## 배경 및 이야기

Pretendard의 배경과 특징, OpenType 기능 등을 설명하는 자세한 이야기는 [이곳](https://cactus.tistory.com/306)에서 확인하실 수 있습니다.

## 다운로드

### [최신 버전 다운로드](https://github.com/orioncactus/pretendard/releases/latest)

## 패밀리

특정 환경에 적합한 Pretendard를 사용하려면 아래로 이동하세요:

-   [Pretendard JP](/packages/pretendard-jp/): 일본 환경에 적합하며, 추가 기능으로 한국 한자 환경에 맞춰 쓸 수 있습니다.
-   [Pretendard Std](/packages/pretendard-std/): 라틴 환경에 적합합니다.
-   [Pretendard GOV](/packages/pretendard-gov/): 대한민국 공공 서비스 환경에 적합합니다.

## 웹폰트

CDN을 이용해 Pretendard를 사용할 수 있으며, 토글을 확인해 기본적으로 추천하는 jsDelivr 외에도 cdnjs와 UNPKG 중에 원하는 CDN을 사용하실 수 있습니다.

---

모든 기능을 포함한 Pretendard를 웹폰트로 사용하려면 아래 코드를 사용하세요. 사용하는 font-family 이름은 `Pretendard` 입니다.

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
```

<details>

<summary>cdnjs 및 UNPKG</summary>

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

<summary>cdnjs 및 UNPKG</summary>

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

### 다이나믹 서브셋

Pretendard에서는 웹폰트 용량 문제를 해결하기 위한 방법으로 Google Fonts에서 제공하는 한글 글꼴과 동일한 방식으로 동적 서브셋을 제공합니다. 페이지에 포함된 글자만 선택적으로 다운로드해 보다 빠르게 Pretendard를 사용하려면 아래 코드를 사용하세요. 사용하는 font-family 이름은 `Pretendard` 입니다.

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" />
```

<details>

<summary>cdnjs 및 UNPKG</summary>

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

<summary>cdnjs 및 UNPKG</summary>

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

### 가변 다이나믹 서브셋

가변 다이나믹 서브셋으로 가변 Weight 속성과 함께 기존 다이나믹 서브셋보다 현저히 적은 용량으로 Pretendard를 사용할 수 있습니다. 모던 브라우저에서 더욱 쾌적하게 Pretendard를 사용하려면 아래 코드를 사용하세요. 사용하는 font-family 이름은 `"Pretendard Variable"` 입니다.

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
```

<details>

<summary>cdnjs 및 UNPKG</summary>

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

<summary>cdnjs 및 UNPKG</summary>

###### cdnjs

```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/variable/pretendardvariable-dynamic-subset.min.css");
```

###### UNPKG

```css
@import url("https://unpkg.com/pretendard@1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css");
```

</details>

---

### 가변 글꼴

가변 weight 속성을 사용하려면 아래 코드를 사용하세요. 사용하는 font-family 이름은 `"Pretendard Variable"` 입니다.

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
```

<details>

<summary>cdnjs 및 UNPKG</summary>

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

<summary>cdnjs 및 UNPKG</summary>

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

-   [Homebrew Cask](https://formulae.brew.sh/cask/font-pretendard)

```bash
brew install --cask font-pretendard
```

-   [NixOS](https://nixos.org)

```nix
# configuration.nix
{
  fonts.packages = with pkgs; [
    pretendard
  ];
}
```

-   [AUR](https://aur.archlinux.org/packages?K=pretendard)

```bash
yay -S otf-pretendard
yay -S ttf-pretendard
```

## Next.js

Next.js에서 로컬 폰트 기능을 활용하여 Pretendard를 사용할 수 있습니다.

```ts
import localFont from 'next/font/local'

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
})
```

`weight` 옵션을 지정하지 않으면 WebKit 기반의 브라우저에서 굵기가 잘못 렌더링 될 수 있으니 주의해 주세요.

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

## 후원자

Pretendard 프로젝트를 더욱 원활히 이어나갈 수 있도록 지원해주셔서 진심으로 감사드립니다.

<p align="center">
   <a href="https://2023.feconf.kr" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://github.com/orioncactus/pretendard/assets/7247848/68bdd6d6-54f1-4f80-af6e-e76454d1e5dd">
         <img src="https://github.com/orioncactus/pretendard/assets/7247848/798743e6-2774-4d4c-ade6-6acc1c90b48d" align="center" height="50" alt="FEConf" hspace="16">
      </picture>
   </a>
</p>

## 기여자

Pretendard에 기여해주셔서 진심으로 감사드립니다.

[@hiddenest](https://github.com/hiddenest): 웹폰트 서빙 및 CDN 업데이트 자동화, 서브셋 및 다이나믹 서브셋 제작, 그리고 가변 다이나믹 서브셋 자동화를 작업해주셨습니다.

[@leejh10003](https://github.com/leejh10003): Pretendard를 사용하는 [예시](/examples)를 제작해주셨습니다.

[@black7375](https://github.com/black7375): 모든 웹폰트 빌드 자동화, npmjs 및 Yarn에 Publish 및 릴리즈 파일 생성 자동화, CDN URL에서 버저닝 개선, 모노레포 대응, 빌드 성능 개선, 그리고 Pretendard GOV CDN 문서화를 작업해주셨습니다.

[@victorrica](https://github.com/victorrica): npm 및 Yarn 패키지 배포를 작업해주셨습니다.

[@kms0219kms](https://github.com/kms0219kms): 모든 웹폰트 CDN 배포 다중화, 문서 포매팅 개선, 영어 및 일본어 문서화를 작업해주셨습니다.

[@Gamsake](https://github.com/Gamsake): 빌드 자동화를 개선해주셨습니다.

[@quiple](https://github.com/quiple): 일본어 Readme 번역을 개선해주셨습니다.

[@sudosubin](https://github.com/sudosubin): homebrew-cask-fonts 및 nix에 Pretendard를 추가해주셨습니다.

## Pretendard를 사용하는 곳

<p align="center">
   <a href="https://pocketlesson.com" target="_blank">
      <picture>
         <img align="center" alt="PocketLesson" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/PocketLesson.png"/>
      </picture>
   </a>
   <a href="https://careerly.co.kr" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/Careerly.png"/>
         <img align="center" alt="Careerly" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/Careerly.png"/>
      </picture>
   </a>
   <a href="https://pointing.life" target="_blank">
      <picture>
         <img align="center" alt="POINTING" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/POINTING.png"/>
      </picture>
   </a>
   <a href="https://flex.team" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/flex.png"/>
         <img align="center" alt="flex" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/flex.png"/>
      </picture>
   </a>
   <a href="https://festa.io" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/Festa.png"/>
         <img align="center" alt="Festa" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/Festa.png"/>
      </picture>
   </a>
   <a href="https://www.sundaynamaste.com" target="_blank">
      <picture>
         <img align="center" alt="썬데이나마스떼" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%EC%8D%AC%EB%8D%B0%EC%9D%B4%EB%82%98%EB%A7%88%EC%8A%A4%EB%96%BC.png"/>
      </picture>
   </a>
   <a href="https://projectlion.io" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/TECHIT.png"/>
         <img align="center" alt="TECHIT" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/TECHIT.png"/>
      </picture>
   </a>
   <a href="https://www.sandollcloud.com/font/16951.html" target="_blank">
      <picture>
         <img align="center" alt="Sandoll Cloud" height="58" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/Sandoll%20Cloud.png"/>
      </picture>
   </a>
   <a href="https://www.catchfashion.com" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/%EC%BA%90%EC%B9%98%ED%8C%A8%EC%85%98.png"/>
         <img align="center" alt="캐치패션" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%EC%BA%90%EC%B9%98%ED%8C%A8%EC%85%98.png"/>
      </picture>
   </a>
   <a href="https://publy.co" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/PUBLY.png"/>
         <img align="center" alt="PUBLY" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/PUBLY.png"/>
      </picture>
   </a>
   <a href="https://apps.apple.com/kr/app/세탁특공대/id1049236217" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/%EC%84%B8%ED%83%81%ED%8A%B9%EA%B3%B5%EB%8C%80.png"/>
         <img align="center" alt="세탁특공대" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%EC%84%B8%ED%83%81%ED%8A%B9%EA%B3%B5%EB%8C%80.png"/>
      </picture>
   </a>
   <a href="https://event.kakaobank.com/p/checkcard2021" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/kakaobank.png"/>
         <img align="center" alt="kakaobank" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/kakaobank.png"/>
      </picture>
   </a>
   <a href="https://zigzag.kr" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/ZIGZAG.png"/>
         <img align="center" alt="ZIGZAG" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/ZIGZAG.png"/>
      </picture>
   </a>
   <a href="https://solved.ac" target="_blank">
      <picture>
         <source alig="" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/solved.ac.png"/>
         <img align="center" alt="solved.ac" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/solved.ac.png"/>
      </picture>
   </a>
   <a href="https://rallit.com" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/rallit.png"/>
         <img align="center" alt="rallit" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/rallit.png"/>
      </picture>
   </a>
   <a href="https://fonts.adobe.com/fonts/pretendard" target="_blank">
      <picture>
         <source alig="" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/Adobe%20Fonts.png"/>
         <img align="center" alt="Adobe Fonts" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/Adobe%20Fonts.png"/>
      </picture>
   </a>
   <a href="https://www.wanted.co.kr" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/Wanted.png"/>
         <img align="center" alt="Wanted" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/Wanted.png"/>
      </picture>
   </a>
   <a href="https://www.opencheongwadae.kr" target="_blank">
      <picture>
         <source align="" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/%EC%B2%AD%EC%99%80%EB%8C%80%2C%20%EA%B5%AD%EB%AF%BC%20%ED%92%88%EC%9C%BC%EB%A1%9C.png"/>
         <img align="center" alt="청와대, 국민 품으로" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%EC%B2%AD%EC%99%80%EB%8C%80%2C%20%EA%B5%AD%EB%AF%BC%20%ED%92%88%EC%9C%BC%EB%A1%9C.png"/>
      </picture>
   </a>
   <a href="https://holix.com" target="_blank">
      <picture>
         <img align="center" alt="HOLIX" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/HOLIX.png"/>
      </picture>
   </a>
   <a href="https://zep.us" target="_blank">
      <picture>
         <img align="center" alt="ZEP" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/ZEP.png"/>
      </picture>
   </a>
   <a href="https://class101.net" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/CLASS101.png"/>
         <img align="center" alt="CLASS101" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/CLASS101.png"/>
      </picture>
   </a>
   <a href="https://www.goodchoice.kr" target="_blank">
      <picture>
         <img align="center" alt="여기어때" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%EC%97%AC%EA%B8%B0%EC%96%B4%EB%95%8C.png"/>
      </picture>
   </a>
   <a href="https://www.kbanknow.com" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/Kbank.png"/>
         <img align="center" alt="Kbank" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/Kbank.png"/>
      </picture>
   </a>
   <a href="https://blimp.space" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/BLIMP.png"/>
         <img align="center" alt="BLIMP" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/BLIMP.png"/>
      </picture>
   </a>
   <a href="https://www.lunit.io" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/Lunit.png"/>
         <img align="center" alt="Lunit" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/Lunit.png"/>
      </picture>
   </a>
   <a href="https://portone.io" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/portone.svg"/>
         <img align="center" alt="portone" height="35" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/portone.svg"/>
      </picture>
   </a>
   <a href="https://www.hancomdocs.com" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/%ED%95%9C%EC%BB%B4%EB%8F%85%EC%8A%A4.png"/>
         <img align="center" alt="한컴독스" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%ED%95%9C%EC%BB%B4%EB%8F%85%EC%8A%A4.png"/>
      </picture>
   </a>
   <a href="https://apps.apple.com/kr/app/오늘학교-초중고-자동-시간표/id1529825567" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/%EC%98%A4%EB%8A%98%ED%95%99%EA%B5%90.png"/>
         <img align="center" alt="오늘학교" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%EC%98%A4%EB%8A%98%ED%95%99%EA%B5%90.png"/>
      </picture>
   </a>
   <a href="https://inflearn.com" target="_blank">
      <picture>
         <img align="center" alt="인프런" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%EC%9D%B8%ED%94%84%EB%9F%B0.png"/>
      </picture>
   </a>
   <a href="https://airbridge.io/ko" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/Airbridge.png"/>
         <img align="center" alt="Airbridge" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/Airbridge.png"/>
      </picture>
   </a>
   <a href="https://rememberapp.co.kr" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/Remember.png"/>
         <img align="center" alt="Remember" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/Remember.png"/>
      </picture>
   </a>
   <a href="https://www.ag.co.kr" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/AG.png"/>
         <img align="center" alt="AG" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/AG.png"/>
      </picture>
   </a>
   <a href="https://sema.seoul.go.kr" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/SeMA.png"/>
         <img align="center" alt="SeMA" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/SeMA.png"/>
      </picture>
   </a>
   <a href="https://gamramstone.com" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/%EA%B0%90%EB%9E%8C%EC%8A%A4%ED%86%A4.png"/>
         <img align="center" alt="감람스톤" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%EA%B0%90%EB%9E%8C%EC%8A%A4%ED%86%A4.png"/>
      </picture>
   </a>
   <a href="https://www.miricanvas.com" target="_blank">
   <img align="center" alt="미리캔버스" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%EB%AF%B8%EB%A6%AC%EC%BA%94%EB%B2%84%EC%8A%A4%0A.png"/>
   </a>
   <a href="https://www.ssfshop.com" target="_blank">
      <picture>
         <img align="center" alt="SSF SHOP" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/SSF%20SHOP.png"/>
      </picture>
   </a>
   <a href="https://apps.apple.com/us/app/직방-아파트-원룸-오피스텔-빌라/id503098735" target="_blank">
      <picture>
         <img align="center" alt="Zigbang" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/Zigbang.png"/>
      </picture>
   </a>
   <a href="https://agbook.co.kr" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/%EC%95%88%EA%B7%B8%EB%9D%BC%ED%94%BD%EC%8A%A4.png"/>
         <img align="center" alt="안그라픽스" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%EC%95%88%EA%B7%B8%EB%9D%BC%ED%94%BD%EC%8A%A4.png"/>
      </picture>
   </a>
   <a href="https://comic.naver.com" target="_blank">
      <picture>
         <img align="center" alt="Naver Webtoon" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/Naver%20Webtoon.png"/>
      </picture>
   </a>
   <a href="https://bbq.co.kr" target="_blank">
      <picture>
         <img align="center" alt="BBQ 치킨" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/BBQ%20%EC%B9%98%ED%82%A8.png"/>
      </picture>
   </a>
   <a href="https://apps.apple.com/kr/app/번개장터/id395672275" target="_blank">
      <picture>
         <img align="center" alt="번개장터" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%EB%B2%88%EA%B0%9C%EC%9E%A5%ED%84%B0.png"/>
      </picture>
   </a>
   <a href="https://hankookilbo.com" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/%ED%95%9C%EA%B5%AD%EC%9D%BC%EB%B3%B4.png"/>
         <img align="center" alt="한국일보" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%ED%95%9C%EA%B5%AD%EC%9D%BC%EB%B3%B4.png"/>
      </picture>
   </a>
   <a href="https://vogue.co.kr" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/Vogue%20Korea.png"/>
         <img align="center" alt="Vogue Korea" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/Vogue%20Korea.png"/>
      </picture>
   </a>
   <a href="https://apps.apple.com/us/app/네이버-블로그-naver-blog/id328813873" target="_blank">
      <picture>
         <img align="center" alt="Naver Blog" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/Naver%20Blog.png"/>
      </picture>
   </a>
   <a href="https://wadiz.kr" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/wadiz.png"/>
         <img align="center" alt="wadiz" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/wadiz.png"/>
      </picture>
   </a>
   <a href="https://apps.apple.com/kr/app/id1599450372" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/%EB%AA%A8%EB%B0%94%EC%9D%BC%20%EC%8B%A0%EB%B6%84%EC%A6%9D.png"/>
         <img align="center" alt="모바일 신분증" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%EB%AA%A8%EB%B0%94%EC%9D%BC%20%EC%8B%A0%EB%B6%84%EC%A6%9D.png"/>
      </picture>
   </a>
   <a href="https://www.musinsa.com/" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/%EB%AC%B4%EC%8B%A0%EC%82%AC.png"/>
         <img align="center" alt="무신사" height="50" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%EB%AC%B4%EC%8B%A0%EC%82%AC.png"/>
      </picture>
   </a>
   <a href="https://wakmusic.xyz/" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/%EC%99%81%ED%83%80%EB%B2%84%EC%8A%A4%20%EB%AE%A4%EC%A7%81.png"/>
         <img align="center" alt="왁타버스 뮤직" height="45" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%EC%99%81%ED%83%80%EB%B2%84%EC%8A%A4%20%EB%AE%A4%EC%A7%81.png"/>
      </picture>
   </a>
   <a href="https://pagecall.com/" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/%ED%8E%98%EC%9D%B4%EC%A7%80%EC%BD%9C.png"/>
         <img align="center" alt="페이지콜" height="32" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%ED%8E%98%EC%9D%B4%EC%A7%80%EC%BD%9C.png"/>
      </picture>
   </a>
   <a href="https://elice.io" target="_blank">
      <picture>
         <img align="center" alt="elice" height="32" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/elice.png"/>
      </picture>
   </a>
   <a href="https://weolbu.com" target="_blank">
      <picture>
         <img align="center" alt="월급쟁이부자들" height="32" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%EC%9B%94%EA%B8%89%EC%9F%81%EC%9D%B4%EB%B6%80%EC%9E%90%EB%93%A4.png"/>
      </picture>
   </a>
   <a href="https://play.google.com/store/apps/details?id=com.mgrv.community.app">
      <picture>
         <source align="center" height="24" hspace="16" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/%EB%A7%B9%EA%B7%B8%EB%A1%9C%EB%B8%8C.png"/>
         <img align="center" alt="맹그로브" height="24" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%EB%A7%B9%EA%B7%B8%EB%A1%9C%EB%B8%8C.png"/>
      </picture>
   </a>
   <a href="https://qanda.ai" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/QANDA.png"/>
         <img align="center" alt="QANDA" height="24" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/QANDA.png"/>
      </picture>
   </a>
   <a href="https://tutor.qanda.ai" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/%EC%BD%B4%EB%8B%A4%EA%B3%BC%EC%99%B8.png"/>
         <img align="center" alt="콴다과외" height="80" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%EC%BD%B4%EB%8B%A4%EA%B3%BC%EC%99%B8.png"/>
      </picture>
   </a>
   <a href="https://penxle.com" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/%ED%8E%9C%EC%8A%AC.png"/>
         <img align="center" alt="펜슬" height="32" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%ED%8E%9C%EC%8A%AC.png"/>
      </picture>
   </a>
   <a href="https://kcp.co.kr/brand/#/sub/typography" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/NHN%20KCP.png"/>
         <img align="center" alt="NHN KCP" height="24" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/NHN%20KCP.png"/>
      </picture>
   </a>
   <a href="https://comento.kr" target="_blank">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/dark/%EC%BD%94%EB%A9%98%ED%86%A0.png"/>
         <img align="center" alt="코멘토" height="24" hspace="16" src="https://raw.githubusercontent.com/orioncactus/pretendard/main/docs/images/logo/light/%EC%BD%94%EB%A9%98%ED%86%A0.png"/>
      </picture>
   </a>
</p>

## 의견 나누기

새로운 개선 의견은 언제나 환영입니다. 해결이 필요한 경우 [Issues](https://github.com/orioncactus/pretendard/issues)에서 이슈를 등록해주세요.
