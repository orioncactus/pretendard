## Pretendard JP

일본어 환경에 적합하며, 모든 기능을 지원하는 Pretendard를 웹폰트로 사용하려면 아래 코드를 사용하세요. 사용하는 font-family 이름은 `'Pretendard JP'` 입니다.

한국에 맞는 모양을 사용하려면 스타일에 다음과 같은 코드를 추가하세요: `font-feature-settings: 'ss05';`

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-jp.css" />
```

<details>

<summary>cdnjs 및 UNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.1/static/pretendard-jp.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.1/dist/web/static/pretendard-jp.css" />
```

</details>

#### CSS

```css
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-jp.css');
```

<details>

<summary>cdnjs 및 UNPKG</summary>

###### cdnjs

```css
@import url('https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.1/static/pretendard-jp.css');
```

###### UNPKG

```css
@import url('https://unpkg.com/pretendard@1.3.1/dist/web/static/pretendard-jp.css');
```

</details>

---

### 다이나믹 서브셋

일본어 환경에서 페이지에 포함된 글자만 선택적으로 다운로드해 보다 빠르게 Pretendard를 표시하려면 아래 코드를 사용하세요. 사용하는 font-family 이름은 `'Pretendard JP'` 입니다.

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-jp-dynamic-subset.css" />
```

<details>

<summary>cdnjs 및 UNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.1/static/pretendard-jp-dynamic-subset.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.1/dist/web/static/pretendard-jp-dynamic-subset.css" />
```

</details>

#### CSS

```css
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-jp-dynamic-subset.css');
```

<details>

<summary>cdnjs 및 UNPKG</summary>

###### cdnjs

```css
@import url('https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.1/static/pretendard-jp-dynamic-subset.css');
```

###### UNPKG

```css
@import url('https://unpkg.com/pretendard@1.3.1/dist/web/static/pretendard-jp-dynamic-subset.css');
```

</details>

---

### 가변 글꼴

가변 weight 속성을 사용하려면 아래 코드를 사용하세요. 사용하는 font-family 이름은 `'Pretendard JP Variable'` 입니다.

#### HTML

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable-jp.css" />
```

<details>

<summary>cdnjs 및 UNPKG</summary>

###### cdnjs

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.1/variable/pretendardvariable-jp.css" />
```

###### UNPKG

```html
<link rel="stylesheet" as="style" crossorigin href="https://unpkg.com/pretendard@1.3.1/dist/web/variable/pretendardvariable-jp.css" />
```

</details>

#### CSS

```css
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable-jp.css');
```

<details>

<summary>cdnjs 및 UNPKG</summary>

###### cdnjs

```css
@import url('https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.1/variable/pretendardvariable-jp.css');
```

###### UNPKG

```css
@import url('https://unpkg.com/pretendard@1.3.1/dist/web/variable/pretendardvariable-jp.css');
```

</details>

---

### font-family

어디서든 쾌적한 환경을 제공하고자 한다면 아래와 같은 font-family 구성을 추천합니다.

```css
font-family: 'Pretendard JP', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Hiragino Sans', 'Apple SD Gothic Neo', Meiryo, 'Noto Sans JP', 'Noto Sans KR', 'Malgun Gothic', Osaka, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
```
