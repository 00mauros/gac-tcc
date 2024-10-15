import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3022/",
  headers: { Accept: "application/json" },
});

api.interceptors.request.use(async (config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;