#learn_webpack
+ 캡틴 판교 <프론트엔드 개발자를 위한 웹팩>
## Content
### [Node.js와 NPM]
#### npm 초기화 명령어(package.json 생성)
     npm init
#### npm 기본 값으로 바로 생성
    npm init -y
#### npm 설치 명령어
    npm install
#### jquery 라이브러리 생성(node_modules/jquery 생성)
    npm install jquery
#### npm 제거 명령어
    npm uninstall 라이브러리명
#### npm 장점
+ package.json에서 프로젝트에 사용한 라이브러리 목록과 각각의 버전을 확인 할 수 있다.
+ 해당 페이지에 가서 cdn을 불러오지 않아도 install로 설치했을 때 내 컴퓨터 환경에 프로젝트에 필요한 라이브러리가 설치되어 바로 사용할 수 있다.
#### dependencies 와 devDependencies의 차이점
dependencies
+ 애플리케이션의 로직을 구현하는데 연관
+ 화면의 로직과 직접적인 연관
+ ex) jquery, jquery-ui, react, vue, angular

devDependencies
+ 개발을 할 때 도움을 주는 개발용 라이브러리(개발 보조 라이브러리)
+ webpack, js-compression, sass

=> 배포용 라이브러리(dependencies)는 npm run build로 빌드하면 최종 애플리케이션 코드 안에 포함된다.

### [웹팩]
#### 웹팩이란?
+ 최신 프런트엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러
#### 모듈 번들링이란?
+ 웹 애플리케이션을 구성하는 몇십, 몇백개의 자원들을 하나의 파일로 병합 및 압축해주는 동작을 의미
### [웹팩의 주요 속성 4가지]
##### [Webpack Dev Server]
+ 웹팩의 빌드 대상 파일이 변경되었을 때 매번 웹팩 명령어를 실행하지 않아도 코드만 저장하면 웹팩으로 빌드한 후 브라우저를 새로고침 해준다.
+ 매번 명령어를 치는 시간과 브러우저를 새로 고침하는 시간 뿐만 아니라 웹팩 빌드 시간도 줄여주기 때문에 웹팩 기반의 웹 애플리케이션 개발에 필수로 사용된다. 
#### Entry
+ 웹팩에서 웹 자원을 변환하기 위해 필요한 최초의 진입점이자 자바스크립트의 파일 경로
#### Output
+ 웹책을 돌리고 난 결과물의 파일 경로
#### Loader
+ 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML, CSS, Image, 폰트)들을 변환할 수 있도록 도와주는 속성
#### Plugin
+ 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성
+ 로더는 파일을 해석하고 변환하는 과정에 관여하는 반면, 플러그인은 해당 결과물의 형태를 바꾸는 역할을 한다.
