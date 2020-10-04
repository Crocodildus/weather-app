import * as DOMVar from '../var/DOMVar';
import * as futureDOM from '../var/futureDOMVar';
import * as currentDOM from '../var/currentDOMVar';
import convertVarToString from '../functions/convertVarToString';

const fetchedDataToHtml = () => {
  const arrDOM = [convertVarToString({ DOMVar }), convertVarToString({ futureDOM }), convertVarToString({ currentDOM })];
  const arrDOMVar = Object.entries(DOMVar);
  const arrFutureDOM = Object.entries(futureDOM);
  const arrCurrentDOM = Object.entries(currentDOM);
  const arrDOMEntries = [arrDOMVar, arrFutureDOM, arrCurrentDOM];
  console.log(arrDOM);
};
export default fetchedDataToHtml;
