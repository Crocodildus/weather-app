import Card from '../var/cardContructor';
import cardsDay from '../functions/cardsDay';

const createCards = (arr) => {
  let days = [];

  cardsDay(days);

  for (let i = 0; i < 7; i++) {
    arr[i] = new Card();
    arr[i].day = days[i];
  }
};

export default createCards;
