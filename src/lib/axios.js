import axios from "axios";
// import { getCookie } from "../utils/cookie";

const instance = axios.create({
  baseURL: "http://13.124.241.254:8081/api/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
});
// instance.defaults.headers.common["Authorization"] = X - AUTH - TOKEN;

export default instance;
