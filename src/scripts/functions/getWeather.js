import weatherApi from '../var/weatherApi';
import createCards from './createCards';
import putDayNightTemp from './putDayNightTemp';

let cards = [];
async function getWeather (lat, lon) {
  let asyncArr;
  const response = await fetch(`${weatherApi.base}onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${weatherApi.key}`, {
    mode: 'cors'
  });
  const weatherData = await response.json();
  console.log(weatherData);
  const dailyData = weatherData.daily;
  console.log(dailyData);
  createCards(cards, asyncArr);
  cards.map(card => putDayNightTemp(dailyData, cards));
  console.table(cards);
}

export default getWeather;
