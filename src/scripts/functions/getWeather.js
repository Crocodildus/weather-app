import weatherApi from '../var/weatherApi';
import createCards from './createCards';
import putDayNightTemp from './putDayNightTemp';
import cardTempl from './HTMLCardTemplate';
import setIcon from './setIcon';

const cards = [];
const getWeather = (lat, lon) => {
  async function fetchWeather () {
    const response = await fetch(`${weatherApi.base}onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${weatherApi.key}`, {
      mode: 'cors'
    });
    const weatherData = await response.json();
    console.log(weatherData);
    const dailyData = weatherData.daily;
    const currentData = weatherData.current;
    console.log(Object.keys(currentData));
    // createCards(cards);
    // cards.map(card => putDayNightTemp(dailyData, cards));
    // setIcon(dailyData, cards);
    // return weatherData;
  }

  fetchWeather().then(() => {
    // cards.forEach(card => cardTempl(card));
  });
};
export default getWeather;
