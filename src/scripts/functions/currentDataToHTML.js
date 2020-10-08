import insertCurrentIntoHtml from './insertCurrentIntoHTML';

const fetchedDataToHTML = (fetchedData) => {
  // const arrDOM = [convertVarToString({ futureDOM }), convertVarToString({ currentDOM })];
  // const arrFutureDOM = Object.entries(futureDOM);
  // const arrCurrentDOM = Object.entries(currentDOM);
  // const arrDOMEntries = [arrFutureDOM, arrCurrentDOM];
  const keyNames = Object.keys(fetchedData);
  keyNames.map(keyName => insertCurrentIntoHtml(keyName, fetchedData));
};
export default fetchedDataToHTML;
