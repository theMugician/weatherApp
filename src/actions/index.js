import axios from 'axios';

const API_KEY = '7db69fa6b83de13788af055feaca93ac';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const SWITCH_TEMP_UNITS = 'SWITCH_TEMP_UNITS';

export function fetchWeather(coord, units='metric') {
	let latitude = coord.lat || coord.latitude;
	let longitude = coord.lng || coord.longitude;
  const url = `${ROOT_URL}?lat=${latitude}&lon=${longitude}&units={units}&appid=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export function switchTempUnits(temp_unit) {
  return {
    type: SWITCH_TEMP_UNITS,
    payload: { temp_unit: temp_unit }
  }
}
