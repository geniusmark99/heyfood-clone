// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const fetchRestaurants = async (params) => {
  const response = await api.get('/restaurants', { params });
  return response.data;
};

export const fetchTags = async () => {
  const response = await api.get('/tags');
  return response.data;
};

export default api;
