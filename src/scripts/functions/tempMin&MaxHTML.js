import addSymbols from './addSymbols';

const minMaxToHTML = (tempData) => {
  const keys = Object.keys(tempData);
  document.getElementById('tempMin').textContent = tempData.min + addSymbols(keys[1]);
  document.getElementById('tempMax').textContent = tempData.max + addSymbols(keys[2]);
};

export default minMaxToHTML;
