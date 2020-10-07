import * as futureDOM from '../var/futureDOMVar';
import * as currentDOM from '../var/currentDOMVar';
import insertIntoHtml from './insertIntoHTML';

const fetchedDataToHTML = (fetchedData) => {
  // const arrDOM = [convertVarToString({ futureDOM }), convertVarToString({ currentDOM })];
  // const arrFutureDOM = Object.entries(futureDOM);
  // const arrCurrentDOM = Object.entries(currentDOM);
  // const arrDOMEntries = [arrFutureDOM, arrCurrentDOM];
  const keyNames = Object.keys(fetchedData);
  keyNames.map(keyName => insertIntoHtml(keyName, fetchedData));
};
export default fetchedDataToHTML;
