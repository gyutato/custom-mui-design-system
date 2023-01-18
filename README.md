# storybook-mui-playground

Storybook의 여러 기능들을 실제 사용해보기 위한 playground repo입니다.

ready-to-use 컴포넌트인 MUI를 기반으로 하여 작성되어 있습니다.

---

## blog

Storybook을 사용하며 학습한 내용을 blog에 공유하고 있습니다.

- [[Storybook] 스토리북 간단하게 시동걸기](https://velog.io/@gyutato/Storybook-%EC%8A%A4%ED%86%A0%EB%A6%AC%EB%B6%81-%EA%B0%84%EB%8B%A8%ED%95%98%EA%B2%8C-%ED%8C%8C%EC%95%85%ED%95%98%EA%B8%B0)
- [[Storybook][MUI] 스토리북 실무에서 사용하기](https://velog.io/@gyutato/StorybookMUI-%EC%8A%A4%ED%86%A0%EB%A6%AC%EB%B6%81-%EC%8B%A4%EB%AC%B4%EC%97%90%EC%84%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)

### related articles

- [Storybook official guide](https://storybook.js.org/docs/react/get-started/install/)
- [Component Story Format 3 is here](https://storybook.js.org/blog/storybook-csf3-is-here/)
- [Storybook MUI integration recipe](https://storybook.js.org/recipes/@mui/material/)

## 사용해 본 기능들

본 repo에 구현되어 있는 기능들은 실무에서 직접 사용해 본 사항들입니다.

```bash
yarn storybook
```

### 기본 - 설치 및 configuration

- storybook 및 MUI 설치 및 초기 세팅
- preview.ts의 decorators에 ThemeProvider 설정

### 활용 - 커스텀 및 모됼화 관련 사항

- globalTypes를 활용한 mode(light / dark) 제어 버튼 추가 (toolbar)
- render function에서 globals 값을 사용해 dynamic UI 리턴
- propType을 사용한 Controls 패널 자동 활성화
- 불필요한 prop 제거 및 prop 제어 타입 변경
- CSF v3 기반의 재사용 가능한 story 작성
- Doc Blocks를 활용한 MDX 문서 작성
- autodocs를 통한 Docs 자동 생성 및 template 설정
