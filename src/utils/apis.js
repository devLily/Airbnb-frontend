import instance from "../lib/axios";

export const apis = {
    // 계정생성
  createAccountAX: (signUpData) => instance.post("/users", signUpData),
    // 로그인
  loginAX: (loginData) => instance.post("/users/login", loginData),
};
