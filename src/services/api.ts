import axios from "axios";
import { API_HOST, API_PORT } from "config.json";

const instance = axios.create({
  baseURL: `${API_HOST}:${API_PORT}/api/v1`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  request => {
    const token = localStorage.getItem("token");
    request.headers = {
      Authorization: token ? `Bearer ${token}` : "",
    };
    return request;
  },
  error => Promise.reject(error)
);

export default instance;
