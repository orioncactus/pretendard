# Pretendard

![Thumbnail](thumbnail.png)

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

Pretendard에서는 웹폰트 용량 문제를 해결하기 위한 방법으로 Google Fonts에서 제공하는 Noto Sans KR와 동일한 방식으로 동적 서브셋을 제공합니다. 페이지에 포함된 글자만 선택적으로 다운로드해 보다 빠르게 Pretendard를 표시하려면 아래 코드를 사용하세요.

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

가변 글꼴을 사용하려면 아래 코드를 사용하세요. 사용하는 font-family 이름은 `'Pretendard Variable'` 입니다.

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

## 라이선스

Pretendard는 [SIL 오픈 폰트 라이선스](https://scripts.sil.org/OFL)로 배포됩니다. 글꼴 단독 판매를 제외한 모든 상업적 행위 및 수정, 재배포가 가능합니다.

## 기여자

Pretendard에 기여해주셔서 진심으로 감사드립니다.

[@hiddenest](https://github.com/hiddenest): 웹폰트에서 서브셋 작업 및 다이나믹 서브셋을 제작해주셨습니다.

## 의견 나누기

새로운 개선 의견은 언제나 환영입니다. 해결이 필요한 경우 Issues에서 이슈를 등록해주세요.
