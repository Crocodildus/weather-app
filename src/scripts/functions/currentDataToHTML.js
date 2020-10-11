import insertCurrentIntoHtml from './insertCurrentIntoHTML';
import setIcon from './setIcon';

const fetchedDataToHTML = (fetchedData) => {
  // const arrDOM = [convertVarToString({ futureDOM }), convertVarToString({ currentDOM })];
  // const arrFutureDOM = Object.entries(futureDOM);
  // const arrCurrentDOM = Object.entries(currentDOM);
  // const arrDOMEntries = [arrFutureDOM, arrCurrentDOM];
  const keyNames = Object.keys(fetchedData);
  const currentIcon = document.getElementById('currentIcon');
  keyNames.map(keyName => insertCurrentIntoHtml(keyName, fetchedData));
  setIcon(fetchedData, currentIcon);
};
export default fetchedDataToHTML;
