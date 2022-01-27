# Pretendard

![Thumbnail](thumbnail.svg#gh-light-mode-only)
![Thumbnail](thumbnail-white.svg#gh-dark-mode-only)

Pretendard는 마땅한 system-ui 글꼴이 없는 환경에서 발생하는 불편함을 해결합니다.

Pretendard는 9가지 굵기로 제공되며, 가변 글꼴 또한 지원합니다.

## 배경 및 이야기

Pretendard는 크로스 플랫폼으로 제품을 서비스하고자 할 때, 또는 다국어 타이포그래피 환경이 어색하거나, 한글에서 자간 문제 등으로 생기는 작업 환경에서의 추가적인 작업 소요를 줄이고자 시작된 글꼴 프로젝트입니다. 가능한 눈에 익숙한 모습으로 가져가기 위해 [Inter](https://github.com/rsms/inter)와 [본고딕](http://github.com/adobe-fonts/source-han-sans)을 바탕으로 Apple의 타이포그래피 환경과 맞췄습니다.

Pretendard의 배경과 특징, OpenType 기능 등을 설명하는 자세한 이야기는 [이곳](https://cactus.tistory.com/306)에서 확인하실 수 있습니다.

## 다운로드

### [최신 버전 다운로드](https://github.com/orioncactus/pretendard/releases/latest)

## 웹폰트

모든 OpenType 기능을 포함한 Pretendard를 웹폰트로 사용하려면 아래 코드를 사용하세요. 사용하는 font-family 이름은 `Pretendard` 입니다.

#### CSS

```css
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
```

#### HTML

```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
```

---

### 다이나믹 서브셋

Pretendard에서는 웹폰트 용량 문제를 해결하기 위한 방법으로 Google Fonts에서 제공하는 Noto Sans KR와 동일한 방식으로 동적 서브셋을 제공합니다. 페이지에 포함된 글자만 선택적으로 다운로드해 보다 빠르게 Pretendard를 표시하려면 아래 코드를 사용하세요. 사용하는 font-family 이름은 `Pretendard` 입니다.

#### CSS

```css
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css');
```

#### HTML

```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css" />
```

---

### 가변 글꼴

가변 weight 속성을 사용하려면 아래 코드를 사용하세요. 사용하는 font-family 이름은 `'Pretendard Variable'` 입니다.

#### CSS

```css
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
```

#### HTML

```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css" />
```

---

### font-family

시스템에 가능한 맞추고자 한다면 아래와 같은 font-family 구성을 추천합니다.

```css
font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', sans-serif;
```

어디서든 동일한 환경을 가지고자 한다면 아래와 같은 font-family 구성을 추천합니다.

```css
font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
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

## 라이선스

Pretendard는 [SIL 오픈 폰트 라이선스](https://scripts.sil.org/OFL)로 배포됩니다. 글꼴 단독 판매를 제외한 모든 상업적 행위 및 수정, 재배포가 가능합니다.

## 기여자

Pretendard에 기여해주셔서 진심으로 감사드립니다.

[@hiddenest](https://github.com/hiddenest): 웹폰트 서빙 및 CDN 업데이트 자동화, 서브셋 작업, 그리고 다이나믹 서브셋을 제작해주셨습니다.

[@leejh10003](https://github.com/leejh10003): Pretendard를 사용하는 [예시](/examples)를 제작해주셨습니다.

[@black7375](https://github.com/black7375): 서브셋 및 동적 서브셋 빌드 자동화, 릴리즈 파일 생성 자동화를 제작해주셨습니다.

[@victorrica](https://github.com/victorrica): npm 및 Yarn 패키지 배포를 작업해주셨습니다.

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
   <a href="https://www.sandollcloud.com/font/FREE/7427.html">
      <img src="https://user-images.githubusercontent.com/7247848/148688131-a5a6f90b-2f78-4cfa-829b-ebd94d8a104c.png" align="center" height="58" alt="Sandoll Cloud" hspace="16">
   </a>
   <a href="https://www.catchfashion.com/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/138128414-89253ebd-7e27-446f-ae3c-a4c573e69e12.png" align="center" height="50" alt="캐치패션" hspace="16">
   </a>
   <a href="https://www.catchfashion.com/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148690254-4727dc6d-d049-4f4f-bbea-f11535dbfea6.png" align="center" height="50" alt="캐치패션" hspace="16">
   </a>
   <a href="https://publy.co/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148688946-158cbc4c-b7ec-4fc0-90e9-fe1edf3ec38f.png" align="center" height="50" alt="PUBLY" hspace="16">
   </a>
   <a href="https://publy.co/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148690271-67ff2649-2e1f-4918-a18e-dd40ca53c76a.png" align="center" height="50" alt="PUBLY" hspace="16">
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
   <a href="https://moye.kr/#gh-light-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148689622-2f94e38f-5b13-4847-9513-0214d289e045.png" align="center" height="58" alt="moye" hspace="16">
   </a>
   <a href="https://moye.kr/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/7247848/148690308-f3119f85-0fe4-4457-827f-34c40d7d2b68.png" align="center" height="58" alt="moye" hspace="16">
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
      <img src="https://user-images.githubusercontent.com/76927618/151356487-9aa7d1f6-9677-47e6-9723-055e0e40aed4.png" align="center" height="50" alt="rallit" hspace="16">
   </a>
   <a href="https://rallit.com/#gh-dark-mode-only">
      <img src="https://user-images.githubusercontent.com/76927618/151355760-998bda56-ff32-47ee-991e-9709db173932.png" align="center" height="50" alt="rallit" hspace="16">
   </a>
</p>

## 의견 나누기

새로운 개선 의견은 언제나 환영입니다. 해결이 필요한 경우 Issues에서 이슈를 등록해주세요.
