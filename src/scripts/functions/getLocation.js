import getWeather from './getWeather.js';
import convertToCity from './covertToCity';

const getLocation = () => {
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWeather(lat, lon);
    convertToCity(lat, lon);
  });
};

export default getLocation;
