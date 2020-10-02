import searchDOM from './scripts/DOM/searchBtnDOM';
import './styles/style.css';
import getLocation from './scripts/functions/getLocation';
import searchAutoComplete from './scripts/DOM/autocomplete';
import icons from './scripts/var/icons';
import autocompleteScript from './scripts/DOM/autocompleteCDN';

autocompleteScript();
getLocation();
searchDOM();
searchAutoComplete();
