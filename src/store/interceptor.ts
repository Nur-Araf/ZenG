import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true, // Send cookies automatically
});

// Handle 401 errors and attempt token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Retrieve refresh token from localStorage
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
          throw new Error("No refresh token available");
        }

        // Send refresh request with refresh token in body
        const refreshResponse = await axios.post(
          "http://localhost:8000/refresh",
          { refresh_token: refreshToken },
          { withCredentials: true }
        );

        // Store new refresh token
        const newRefreshToken = refreshResponse.data.refresh_token;
        localStorage.setItem("refreshToken", newRefreshToken);

        // Retry original request (cookie with new access token is sent automatically)
        return api(originalRequest);
      } catch (refreshError) {
        // Clear auth state and redirect to login
        localStorage.removeItem("refreshToken");
        // Note: This should ideally be handled in a component with useNavigate
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export { api };
