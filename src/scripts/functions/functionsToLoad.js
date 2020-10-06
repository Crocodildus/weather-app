import currentWeatherToHTML from './fetchedDataToHTML';
import getLocation from './getLocation';
import searchDOM from '../DOM/searchBtnDOM';
import searchAutoComplete from '../DOM/autocomplete';

const functionsToLoad = () => {
  currentWeatherToHTML();
  getLocation();
  searchDOM();
  searchAutoComplete();
};

export default functionsToLoad;