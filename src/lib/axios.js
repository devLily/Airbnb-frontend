import axios from "axios";
import { Cookies } from "react-cookie";
// import { getCookie } from "../utils/cookie";

const cookies = new Cookies();
const instance = axios.create({
  baseURL: "http://13.124.241.254:8081/api/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    // Authorization: `X-AUTH-TOKEN: ${cookies.get("token")}`,
    "X-AUTH-TOKEN": `${cookies.get("token")}`,
  },
  withCredentials: true,
});
// instance.defaults.headers.common["Authorization"] = X - AUTH - TOKEN;

export default instance;
