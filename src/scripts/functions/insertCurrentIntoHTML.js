import addSymbols from './addSymbols';

const insertIntoHtml = (attribute, obj) => {
  const dataSelector = document.getElementById(attribute);
  if (dataSelector !== null) {
    attribute === 'temp' ? dataSelector.textContent = (Math.round(obj[attribute]) + addSymbols(attribute))
      : dataSelector.textContent = (obj[attribute] + addSymbols(attribute));
  } else if (attribute === 'weather') {
    document.getElementById('currentDesc').textContent = obj[attribute][0].description;
  } else {
    return null;
  }
};

export default insertIntoHtml;
