const API_KEY = '482e0009eb15a40ed30f683c40f6da6e';

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log('Request', request);

  return{
    type: FETCH_WEATHER,
    payload: request
  }
}
