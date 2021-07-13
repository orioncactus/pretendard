## Flutter
플러터에서는 다음과 같은 환경설정이 필요합니다. 아래 예시 코드는 [FontWeight class에 대한 문서](https://api.flutter.dev/flutter/dart-ui/FontWeight-class.html)와 [Use a custom font](https://flutter.dev/docs/cookbook/design/fonts)를 참조하였으며, Flutter 2.2.2 환경에서 정상 동작이 확인되었습니다:
### 디렉터리 구성
핵심적인 파일/폴더만 남기면 다음과 같습니다.
```
poc_app
├─ fonts
│  ├─ Pretendard-Black.otf
│  ├─ Pretendard-Bold.otf
│  ├─ Pretendard-ExtraBold.otf
│  ├─ Pretendard-ExtraLight.otf
│  ├─ Pretendard-Light.otf
│  ├─ Pretendard-Medium.otf
│  ├─ Pretendard-Regular.otf
│  ├─ Pretendard-SemiBold.otf
│  └─ Pretendard-Thin.otf
├─ pubspec.yaml
```
### pubspec.yaml
```yaml
flutter:
  fonts:
    - family: Pretendard
      fonts:
        - asset: fonts/Pretendard-Black.otf
          weight: 900
        - asset: fonts/Pretendard-ExtraBold.otf
          weight: 800
        - asset: fonts/Pretendard-Bold.otf
          weight: 700
        - asset: fonts/Pretendard-SemiBold.otf
          weight: 600
        - asset: fonts/Pretendard-Medium.otf
          weight: 500
        - asset: fonts/Pretendard-Regular.otf
          weight: 400
        - asset: fonts/Pretendard-Light.otf
          weight: 300
        - asset: fonts/Pretendard-Light.otf
          weight: 200
        - asset: fonts/Pretendard-Thin.otf
          weight: 100
```
### 사용 예시 코드
Text widget에 대한 예시 코드입니다. `Hello, World!` 텍스트를 Pretendard 글꼴로 표시합니다.
```dart
Text(
  'You have pushed the button this many times:',
  style: TextStyle(
    fontFamily: 'Pretendard'
  ),
),
```
혹은 다음과 같이 ThemeData에서 기본 Font family를 설정하는 것도 가능합니다.
```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        fontFamily: 'Pretendard'
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}
```