import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://torii-gate-uthy.onrender.com/api",
});
