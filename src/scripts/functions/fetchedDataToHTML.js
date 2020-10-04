import * as futureDOM from '../var/futureDOMVar';
import * as currentDOM from '../var/currentDOMVar';
import convertVarToString from '../functions/convertVarToString';

const fetchedDataToHtml = () => {
  const arrDOM = [convertVarToString({ futureDOM }), convertVarToString({ currentDOM })];
  const arrFutureDOM = Object.entries(futureDOM);
  const arrCurrentDOM = Object.entries(currentDOM);
  const arrDOMEntries = [arrFutureDOM, arrCurrentDOM];
};
export default fetchedDataToHtml;
