// File: src/utils/api.js
import axios from "axios";

// Create an instance of axios with default config
const api = axios.create({
  baseURL: "http://localhost:5000/api", // Hardcoded to avoid process.env error
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

// Set token on application startup
const token = localStorage.getItem("token");
if (token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default api;
