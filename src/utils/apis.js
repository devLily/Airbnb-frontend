import instance from "../lib/axios";

export const apis = {
  getListbyLocations: (location) =>
    instance.get(`/searches?location=${location}`),

  createPost: (contents) => instance.post("/rooms", contents),

  postWishes: (roomId) => instance.post("/wishes", { roomId }),

  getWishes: () => instance.get("/wishes"),

  deleteWishes: (roomId) => instance.delete("/wishes", { roomId }),

  createAccountAX: (signUpData) => instance.post("/users", signUpData),

  loginAX: (loginData) => instance.post("/users/login", loginData),

};
