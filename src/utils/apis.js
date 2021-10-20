import instance from "../lib/axios";

export const apis = {
    // 계정생성
  createAccountAX: (signUpData) => instance.post("/api/users", signUpData),
};
