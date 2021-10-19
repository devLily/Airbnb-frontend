import instance from "../lib/axios";

export const apis = {
  getPosts: () => instance.post("/searches"),
  getPosts: () => instance.get("/searches/${location}"),
  // 검색하기
  getWishs: () => instance.get("/wish"),
  // 위시리스트 불러오기
  signUp: (user) => instance.post("/signup", user),
  // 회원가입 요청
};
