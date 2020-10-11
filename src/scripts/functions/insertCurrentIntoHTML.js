import addSymbols from './addSymbols';

const insertIntoHtml = (attribute, obj) => {
  const dataSelector = document.getElementById(attribute);
  if (dataSelector !== null) {
    attribute === 'feels_like' ? dataSelector.textContent = (Math.round(obj[attribute]) + addSymbols(attribute))
      : dataSelector.textContent = (obj[attribute] + addSymbols(attribute));
  } else if (typeof obj[attribute] === 'object') {
    document.getElementById('currentDesc').textContent = obj[attribute][0].description;
  } else {
    return null;
  }
};

export default insertIntoHtml;
