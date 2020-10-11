import cardsDay from './cardsDay';
import setIcon from './setIcon';
import addSymbols from './addSymbols';

const switchFuture = (nameOfSelectorVar, selector, fetchedData) => {
  const numInArr = Number(selector[0]) + 1;
  const dataForDay = fetchedData[numInArr];
  const selectorElement = selector[1];
  switch (nameOfSelectorVar) {
    case 'weekDay':
      selectorElement.textContent = cardsDay(numInArr);
      break;
    case 'weekIcon':
      setIcon(dataForDay, selectorElement);
      break;
    case 'weekDesc':
      selectorElement.textContent = dataForDay.weather[0].description;
      break;
    case 'dayTemp':
      selectorElement.textContent = Math.round(dataForDay.temp.day) + addSymbols(nameOfSelectorVar);
      break;
    case 'nightTemp':
      selectorElement.textContent = Math.round(dataForDay.temp.night) + addSymbols(nameOfSelectorVar);
      break;
    default:
      return null;
  }
};

export default switchFuture;
