import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://lostandfoundapi.onrender.com",
});
export default axiosClient;
