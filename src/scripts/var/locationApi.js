import apiKeys from './apiKeys';

const locationApi = {
  key: apiKeys.LOCATION_KEY,
  base: 'https://api.opencagedata.com/geocode/v1/json?q='
};

export default locationApi;
