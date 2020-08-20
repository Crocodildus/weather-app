import convertToCord from './convertToCord';
import getWeather from './getWeather.js';

const getLocation = () => {
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);
    getWeather(lat, lon);
  });
};

export default getLocation;
