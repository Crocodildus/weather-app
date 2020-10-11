import weatherApi from '../var/weatherApi';
import * as futureDOM from '../var/futureDOMVar.js';
import currentDataToHTML from './currentDataToHTML';
import futureDataToHTML from './futureDataToHTML';

const futureDOMArr = Object.entries(futureDOM);
const getWeather = (lat, lon) => {
  async function fetchWeather () {
    const response = await fetch(`${weatherApi.base}onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${weatherApi.key}`, {
      mode: 'cors'
    });
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  }

  fetchWeather().then((weatherData) => {
    currentDataToHTML(weatherData.current);
    futureDOMArr.map(arr => futureDataToHTML(arr, weatherData.daily));
  });
};
export default getWeather;
