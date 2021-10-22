import instance from "../lib/axios";

export const apis = {
  //getListbyLocations: (location) => instance.post("/searches", location),
  //getListbyLocations: (location) => instance.get(`/searches/${location}`),
  getListbyLocations: (location) =>
    instance.get(`/searches?location=${location}`),
  // 검색하기(게시물 불러오기)
  createPost: (contents) => instance.post("/rooms", contents),
  // 게시물 작성하기
  postWishes: (roomId) => instance.post("/wishes", { roomId }),
  // 위시리스트 등록하기
  getWishes: () => instance.get("/wishes"),
  // 위시리스트 불러오기
  deleteWishes: (roomId) => instance.delete("/wishes", { roomId }),
  // 위시리스트 삭제
  createAccountAX: (signUpData) => instance.post("/users", signUpData),
  // 계정 생성하기
  loginAX: (loginData) => instance.post("/users/login", loginData),
  // 로그인하기
};
