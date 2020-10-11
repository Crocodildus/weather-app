import switchFuture from './switchForFutureData';

const futureDataToHTML = (arr, weatherData) => {
  const name = arr[0];
  const HTMLCollection = arr[1];
  const allSelect = Object.entries(HTMLCollection);
  allSelect.map(el => switchFuture(name, el, weatherData));
};

export default futureDataToHTML;
