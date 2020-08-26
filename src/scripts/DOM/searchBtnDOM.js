import * as DOMVar from '../var/DOMVar';
import convertToCord from '../functions/convertToCord';

const searchDOM = () => {
  DOMVar.searchbtn.addEventListener('click', ev => {
    ev.preventDefault();

    let str = DOMVar.search.value.trim();
    convertToCord(str);
  });
};

export default searchDOM;
