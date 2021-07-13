# React Native
먼저 본 예제를 작성하는 데 (이 글)[https://zeallat94.medium.com/reactnative에서-커스텀-폰트-사용하기-b4b221d6a731]을 참조했음을 밝힙니다.

## 디렉터리 구성
핵심적인 파일/폴더만 남기면 다음과 같습니다.
```
react_native_pretendard
├─ App.js
├─ assets
│  └─ fonts
│     ├─ Pretendard-Black.otf
│     ├─ Pretendard-Bold.otf
│     ├─ Pretendard-ExtraBold.otf
│     ├─ Pretendard-ExtraLight.otf
│     ├─ Pretendard-Light.otf
│     ├─ Pretendard-Medium.otf
│     ├─ Pretendard-Regular.otf
│     ├─ Pretendard-SemiBold.otf
│     └─ Pretendard-Thin.otf
└─ react-native.config.js
```
### react-native.config.js
파일이 없다면 새로이 생성해 주시고, assets node에 폰트 디렉터리를 등록해 주세요
```javascript
module.exports = {
  assets: ['./assets/fonts'],
};
```
후에 react-native link 명령을 사용해, android 및 ios 프로젝트에 위 에셋들을 링크하십시오

### App.js
React native에서 특정 폰트를 사용하는데는 매우 많은 방법이 있습니다. 해당 방법들을 모두 사용할 수 있으며, 기본적인 예제는 다음과 같습니다.
```javascript
<Text style={{fontFamily: 'Pretendard'}}>Pretendard 폰트가 적용되었습니다!</Text>
```