## 📙 Section 5: 페이지 사전 렌더링 & 데이터 페칭

### 🔖 89. 기존 React 앱의 문제점

- 처음 렌더링 될 때 아무 데이터도 포함되어 있지 않은 HTML콘텐츠를 로딩한다. (DOM 렌더링 후 데이터 페칭)
- 데이터가 실질적으로 페이지에 로딩될 때까지 기다려야 한다. => 사용자 경험 최적화에 불리
- 빈 HTML코드를 구글 검색엔진이 보게 된다. => 검색 엔진 최적화에 불리

### 🔖 90. Next.js가 페이지를 준비하고 사전 렌더링을 하는 방식

1. 사용자가 페이지에 접속하면, 완성된 HTML페이지를 렌더링한다.
2. 사전렌더링(첫번째 렌더링)이 끝나면, 다시 SPA로 돌아간다.
3. 사전렌더링 되는 페이지는 첫번째 페이지뿐이다.
4. 사전렌더링하는 첫번째 방법은 정적 생성, 두번째 방법은 서버 사이드 렌더링이다.
5. 정적 생성은 빌드되는 동안 모든 페이지가 사전 생성된다.
6. 서버 사이드 렌더링은 배포 후 요청이 서버에 올때 페이지가 생성된다.
