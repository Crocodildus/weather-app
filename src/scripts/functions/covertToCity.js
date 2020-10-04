import locationApi from '../var/locationApi';
import * as DOMVar from '../var/DOMVar';

let globCity;
let globCountry;
const convertToCity = (lat, lon) => {
  async function convert () {
    const response = await fetch(`${locationApi.base}${lat}+${lon}&key=${locationApi.key}`, {
      mode: 'cors'
    });
    const locationData = await response.json();
    globCity = locationData.results[0].components.city;
    globCountry = locationData.results[0].components.country;
  }

  convert().then(() => {
    DOMVar.city.textContent = (globCity + ', ' + globCountry);
  });
};

export default convertToCity;
