import axios, { AxiosInstance } from "axios";

const BASE_URL = `${import.meta.env.VITE_APP_BACKEND_URL}api/`;

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("API call error:", error);
    return Promise.reject(error);
  }
);

export default apiClient;
