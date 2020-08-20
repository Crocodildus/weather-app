import locationApi from '../var/locationApi';
import getWeather from './getWeather';

const convertToCord = (cityName) => {
  async function convert () {
    const response = await fetch(`${locationApi.base}${cityName}&key=${locationApi.key}`, {
      mode: 'cors'
    });
    const locationData = await response.json();
    const lat = locationData.results[0].geometry.lat;
    const lon = locationData.results[0].geometry.lng;
    console.log(lat, lon);
    getWeather(lat, lon);
  }

  convert();
  console.log(`${locationApi.base}${cityName}&key=${locationApi.key}`);
};

export default convertToCord;
