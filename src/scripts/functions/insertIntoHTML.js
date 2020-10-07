
const insertIntoHtml = (attribute, obj) => {
  const dataSelector = document.getElementById(attribute);
  dataSelector !== null ? dataSelector.textContent = obj[attribute]
    : console.error('not there');
};

export default insertIntoHtml;
