module.exports = {
  env: {
    // 사전 정의된 전역 변수 사용 정의
    browser: true, // console 같은 사전 정의된 전역변수 환경에 있는 정적 메서드를 인식 X
    es2021: true,
  },
  // 추가한 플러그인에서 사용할 규칙을 설정
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // eslint 사용을 위해 지원하려는 javascript 언어 옵션 지정
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"], // 서드파티 플러그인 사용을 지원
  rules: {
    // 프로젝트에서 사용하는 규칙을 수정
    "react/react-in-jsx-scope": "off", // 태그 사용시 line 떨어졌을 경우 오류 발생 방지
    "react/prop-types": "off", // props 타입 명시 off
    "no-unused-vars": "off", // 임시 변수명 미사용 에러 off
    "react/display-name": "off", //
  },
};
