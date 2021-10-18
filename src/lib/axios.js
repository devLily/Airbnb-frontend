import axios from "axios";
import { getCookie } from "../utils/cookie";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
});

export default instance;
