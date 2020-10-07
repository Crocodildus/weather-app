import getLocation from './getLocation';
import searchDOM from '../DOM/searchBtnDOM';
import searchAutoComplete from '../DOM/autocomplete';

const functionsToLoad = () => {
  getLocation();
  searchDOM();
  searchAutoComplete();
};

export default functionsToLoad;