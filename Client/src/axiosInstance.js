import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL || 'https://pawfect-match-b8jp.onrender.com/';

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;