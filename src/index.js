import searchDOM from './scripts/DOM/searchBtnDOM';
import './styles/style.css';
import getLocation from './scripts/functions/getLocation';
import searchAutoComplete from './scripts/DOM/autocomplete';
import icons from './scripts/var/icons';
import autocompleteScript from './scripts/DOM/autocompleteCDN';
import currentWeatherToHTML from './scripts/functions/fetchedDataToHTML';
import convertVarToString from './scripts/functions/convertVarToString';

currentWeatherToHTML();
autocompleteScript();
getLocation();
searchDOM();
searchAutoComplete();
