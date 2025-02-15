import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// // Response Interceptor (401 Unauthorized 처리)
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true; // API 요청 재시도 Flag

//       try {
//         // 토큰 재발급 요청 로직 수정 필요
//         const newToken = await api.post('/auth/refresh-token');
//         console.log(newToken);

//         localStorage.setItem('accessToken', newToken.data.accessToken);
//         localStorage.setItem('refreshToken', newToken.data.refreshToken);

//         originalRequest.headers.Authorization = `Bearer ${newToken.data.accessToken}`;
//         return api(originalRequest); // 실패한 요청 재시도
//       } catch (error) {
//         console.error('Error refreshing token:', error);
//         localStorage.removeItem('accessToken');
//         localStorage.removeItem('refreshToken');
//         window.location.href = '/login';
//       }

//       return Promise.reject(error);
//     }
//   }
// );

export default api;
