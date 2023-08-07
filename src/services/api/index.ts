import axios from 'axios';

export const apiWeather = axios.create({
   baseURL: 'https://api.openweathermap.org/data/2.5',
   timeout: 10000,
});

export const apiGeocoding = axios.create({
   baseURL: 'http://api.openweathermap.org/geo/1.0',
   timeout: 10000,
});