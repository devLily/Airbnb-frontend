import instance from "../lib/axios";

export const apis = {
  getListbyLocations: (location) => instance.post("/searches", location),
  getListbyLocations: (location) => instance.get("/searches", { location }),
  // 검색하기
  createPost: (contents) => instance.post("/rooms", contents),
  // 게시물 작성하기
  createAccountAX: (signUpData) => instance.post("/api/users", signUpData),
};
