import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            // Clear local storage on any 401 response
            localStorage.removeItem('token');
            // Redirect to login if not already there
            if (!window.location.pathname.includes('/sign-in')) {
                window.location.href = '/sign-in';
            }
        }
        return Promise.reject(error);
    }
);

export default api;