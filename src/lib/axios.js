import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();
const instance = axios.create({
  baseURL: "http://13.124.241.254:8081/api/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "X-AUTH-TOKEN": `${cookies.get("token")}`,
  },
  withCredentials: true,
});

export default instance;
