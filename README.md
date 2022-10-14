# React18_Webpack_Babel

리엑트 18의 웹팩과 바벨 수동 설치 및 설정 공부 레파지토리입니다.

- reference
  - https://juni-official.tistory.com/248
  - https://mine-it-record.tistory.com/503

# Webpack의 개념

# 패키지 생성 및 설치

### 패키지 생성

```bash
npm init
```

### 리액트

```bash
npm i react react-dom
```

### 웹팩, 플러그인

```bash
npm i -D webpack webpack-cli webpack-dev-server
```

### 웹팩 플러그인

```bash
npm i -D babel-loader html-webpack-plugin clean-webpack-plugin css-loader style-loader cross-env dotenv dotenv-webpack
```

- babel-loader : 웹팩에서 바벨을 사용할 수 있도록 처리
- clean-webpack-plugin : 이전에 번들된 파일 자동 삭제
- html-webpack-plugin : html 템플릿 설정
- css-loader/style-loader : css 관련 파일 처리

### 바벨

```bash
npm i -D @babel/core @babel/preset-env @babel/preset-react
```

### devServer HMR 핫 리로딩

```bash
npm i -D @pmmmwh/react-refresh-webpack-plugin
```

### plugin-transform-runtime

바벨 폴리필 설정

```bash
npm i -D @babel/plugin-transform-runtime
npm i @babel/runtime-corejs3
```
