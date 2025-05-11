import axios from "axios";
import { useAuthStore } from "./authStore";

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
        // Send refresh request (no body needed if backend handles refresh token)
        await axios.post(
          "http://localhost:8000/refresh",
          {},
          { withCredentials: true }
        );

        // Retry original request (cookie will be updated automatically)
        return api(originalRequest);
      } catch (refreshError) {
        // Clear auth state and redirect to login
        useAuthStore.getState().clearAuth();
        // Note: This should ideally be handled in a component with useNavigate
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export { api };
