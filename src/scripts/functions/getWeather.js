import weatherApi from '../var/weatherApi';
import * as futureDOM from '../var/futureDOMVar.js';
import currentDataToHTML from './currentDataToHTML';
import futureDataToHTML from './futureDataToHTML';
import minMaxToHTML from './tempMin&MaxHTML';
import generateChart from './generateHourGraph';

const futureDOMArr = Object.entries(futureDOM);
const getWeather = (lat, lon) => {
  async function fetchWeather () {
    const response = await fetch(`${weatherApi.base}onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${weatherApi.key}`, {
      mode: 'cors'
    });
    const weatherData = await response.json();
    const hourly = weatherData.hourly;
    return weatherData;
  }

  fetchWeather().then((weatherData) => {
    currentDataToHTML(weatherData.current);
    minMaxToHTML(weatherData.daily[0].temp);
    futureDOMArr.map(arr => futureDataToHTML(arr, weatherData.daily));
    generateChart(weatherData.hourly);
  });
};
export default getWeather;
