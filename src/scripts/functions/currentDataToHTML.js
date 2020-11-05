import insertCurrentIntoHtml from './insertCurrentIntoHTML';
import setIcon from './setIcon';

const fetchedDataToHTML = (fetchedData) => {
  const keyNames = Object.keys(fetchedData);
  const currentIcon = document.getElementById('currentIcon');
  keyNames.map(keyName => insertCurrentIntoHtml(keyName, fetchedData));
  setIcon(fetchedData, currentIcon);
};
export default fetchedDataToHTML;
