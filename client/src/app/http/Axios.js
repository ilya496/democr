import axios from "axios";

const API_URL = "http://localhost:5000/api";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$api.interceptors.response.use(
  (config) => config,
  async (err) => {
    const origRequest = err.config;
    if (
      err.response &&
      err.response.status === 401 &&
      origRequest &&
      !origRequest._isRetry
    ) {
      origRequest._isRetry = true;
      try {
        const response = await $api.get("/auth/refresh");
        localStorage.setItem("token", response.data.accessToken);
        return $api.request(origRequest);
      } catch (e) {
        console.log("Unexpected UNAUTHORIZED");
      }
    }
    throw err;
  }
);

export default $api;
