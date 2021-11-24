# Pretendard

![Thumbnail](thumbnail.svg)

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
   <a href="https://pocketlesson.com"><img src="https://user-images.githubusercontent.com/7247848/130080465-1f0bb3c0-0ef2-4610-a601-49d8d3421ccd.png" align="center" height="40" alt="PocketLesson" hspace="16"></a>
   <a href="https://careerly.onelink.me/Gbs9/4ac8fc9d"><img src="https://user-images.githubusercontent.com/7247848/130080557-18af3ddd-24b6-40e5-bb75-39f8ef8a9d5b.png" align="center" height="72" alt="Careerly" hspace="16"></a>
   <a href="https://pointing.life"><img src="https://user-images.githubusercontent.com/7247848/130080469-778c1010-e781-4442-9430-960d527c35a9.png" align="center" height="44" alt="POINTING" hspace="16"></a>
   <a href="https://flex.team"><img src="https://user-images.githubusercontent.com/7247848/130081248-1369c43d-6226-4e62-a101-93365d1933b5.png" align="center" height="56" alt="flex" hspace="16"></a>
   <a href="https://festa.io"><img src="https://user-images.githubusercontent.com/7247848/133427527-bb2a7104-8f05-437c-91db-6c68b43cbd34.png" align="center" height="68" alt="Festa" hspace="16"></a>
   <a href="https://www.sundaynamaste.com"><img src="https://user-images.githubusercontent.com/7247848/136211910-c1f672b1-12e7-4f06-a8e3-83225788d85c.png" align="center" height="80" alt="썬데이나마스떼" hspace="16"></a>
   <a href="https://projectlion.io"><img src="https://user-images.githubusercontent.com/7247848/136211912-0b86dcc6-caed-4240-9182-4c3d929c9900.png" align="center" height="40" alt="PROJECT LION" hspace="16"></a>
   <a href="https://www.sandollcloud.com/font/FREE/7427.html"><img src="https://user-images.githubusercontent.com/7247848/138128673-87665cb6-485d-4dae-a1a2-89e8e7b0f2d9.png" align="center" height="100" alt="Sandoll Cloud" hspace="16"></a>
   <a href="https://www.catchfashion.com"><img src="https://user-images.githubusercontent.com/7247848/138128414-89253ebd-7e27-446f-ae3c-a4c573e69e12.png" align="center" height="52" alt="캐치패션" hspace="16"></a>
   <a href="https://apps.apple.com/kr/app/퍼블리-publy/id1440756899"><img src="https://user-images.githubusercontent.com/7247848/143039841-ae397d57-fd21-470a-817c-f44aef828c5c.png" align="center" height="48" alt="PUBLY" hspace="16"></a>
   <a href="https://apps.apple.com/kr/app/세탁특공대/id1049236217"><img src="https://user-images.githubusercontent.com/7247848/143039257-54dbbfc3-2633-4f5b-954d-bb851861bb2d.png" align="center" height="56" alt="세탁특공대" hspace="16"></a>
   <a href="https://event.kakaobank.com/p/checkcard2021"><img src="https://user-images.githubusercontent.com/7247848/143246270-d9b71383-7b31-44bf-9251-7bf4f4c23008.png" align="center" height="64" alt="kakaobank" hspace="16"></a>
</p>

## 의견 나누기

새로운 개선 의견은 언제나 환영입니다. 해결이 필요한 경우 Issues에서 이슈를 등록해주세요.
