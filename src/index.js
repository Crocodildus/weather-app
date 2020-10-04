import searchDOM from './scripts/DOM/searchBtnDOM';
import './styles/style.css';
import getLocation from './scripts/functions/getLocation';
import searchAutoComplete from './scripts/DOM/autocomplete';
import icons from './scripts/var/icons';
import autocompleteScript from './scripts/DOM/autocompleteCDN';
import * as DOMVar from './scripts/var/DOMVar';

console.log(Object.keys(DOMVar));
autocompleteScript();
getLocation();
searchDOM();
searchAutoComplete();
