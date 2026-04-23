import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    "x-cmx-client": "cmxph-careers-site"
  }
});

export default api;