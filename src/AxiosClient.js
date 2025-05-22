import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:1000",
});
export default axiosClient;
