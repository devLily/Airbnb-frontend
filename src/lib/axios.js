import axios from "axios";
// import { getCookie } from "../utils/cookie";

const instance = axios.create({
  // baseURL: "http://localhost:4000/",
  baseURL: "http://13.124.241.254:8081",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
});

export default instance;
