import * as DOMVar from '../var/DOMVar';

// limit suggestions to cities
const options = {
  types: ['(cities)']
};
const searchAutoComplete = () => {
  let autocomplete = new google.maps.places.Autocomplete(DOMVar.search, options);
};

export default searchAutoComplete;
