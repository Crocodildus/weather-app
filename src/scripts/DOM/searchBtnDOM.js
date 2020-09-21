import * as DOMVar from '../var/DOMVar';
import convertToCord from '../functions/convertToCord';
import resetDisplay from '../functions/resetDisplay.js';

const searchDOM = () => {
  DOMVar.searchbtn.addEventListener('click', ev => {
    ev.preventDefault();
    resetDisplay();
    let str = DOMVar.search.value.trim();
    convertToCord(str);
    DOMVar.search.value = '';
  });
};

export default searchDOM;
