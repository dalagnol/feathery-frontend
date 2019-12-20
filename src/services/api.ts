import axios from "axios";

declare const process: any;

const {
  env: { REACT_APP_API_HOST, REACT_APP_API_PORT },
} = process;

const instance = axios.create({
  baseURL: `${REACT_APP_API_HOST}:${REACT_APP_API_PORT}`,
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  request => {
    const token = localStorage.getItem("token");
    request.headers = {
      Authorization: token || "",
    };
    return request;
  },
  error => Promise.reject(error)
);

export default instance;
