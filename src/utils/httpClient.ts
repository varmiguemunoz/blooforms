import axios, { AxiosInstance } from "axios";

const baseURL = import.meta.env.API_BASE_URL as string;

const httpClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const publicHttpClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const expiredToken = localStorage.getItem("accessToken");
        const response = await axios.post(
          "/auth/refresh-token",
          {
            refreshToken,
          },
          {
            baseURL,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${expiredToken}`,
            },
          }
        );
        const { accessToken } = response.data;

        localStorage.setItem("accessToken", accessToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axios(originalRequest);
      } catch (error) {
        console.log("Error on refresh token", error);
        const currentUrl = window.location.pathname;

        window.location.href = `/?redirect=${currentUrl}`;
      }
    }
    return Promise.reject(error);
  }
);

const fetcher = (url: string, params?: any) =>
  httpClient.get(url, { params }).then((res) => res.data);

export { httpClient, publicHttpClient, fetcher };
