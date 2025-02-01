import axios from 'axios';

const api = axios.create({
  baseURL: '/mock',
  //   headers: {
  //     'Content-type': 'application/json',
  //   },
});

export default api;
