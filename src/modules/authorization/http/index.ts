import axios from 'axios';

import Cookies from 'universal-cookie';
export const API_URL = 'http://backend.darklorian.ru/api/v1/token';

const cookies = new Cookies();

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('ob_')}`;
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originRequest._isRetry = true;
      try {
        const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
        localStorage.setItem('ob_', response.data.access);
        cookies.set('ob_', response.data.refresh);
        return api.request(originRequest);
      } catch (e) {
        console.log('Пользователь не авторизован');
      }
    }
    throw error;
  },
);

export default api;
