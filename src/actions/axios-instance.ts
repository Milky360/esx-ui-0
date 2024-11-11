import axios from "axios";

axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
