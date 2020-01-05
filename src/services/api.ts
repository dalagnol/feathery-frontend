import axios from "axios";
import { API_HOST, API_PORT } from "config.json";

const instance = axios.create({
  baseURL: `${API_HOST}:${API_PORT}`,
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
