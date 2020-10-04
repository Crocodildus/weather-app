import * as DOMVar from '../var/DOMVar';
import * as futureDOM from '../var/futureDOMVar';
import * as currentDOM from '../var/currentDOMVar';

const fetchedDataToHtml = () => {
  const arrDOMVar = Object.entries(DOMVar);
  const arrFutureDOM = Object.entries(futureDOM);
  const arrCurrentDOM = Object.entries(currentDOM);
};
export default fetchedDataToHtml;
