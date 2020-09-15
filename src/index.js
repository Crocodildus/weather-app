import searchDOM from './scripts/DOM/searchBtnDOM';
import './styles/style.css';
import img from './img/city-skyline.jpg';
import getLocation from './scripts/functions/getLocation';
import searchAutoComplete from './scripts/DOM/autocomplete';
import icons from './scripts/var/icons';

console.log(Object.keys(icons));

searchAutoComplete();
getLocation();
searchDOM();
