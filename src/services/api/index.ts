import axios from 'axios';

export const api = axios.create({
   baseURL: 'https://api.openweathermap.org/data/3.0/',
   timeout: 10000,
});
