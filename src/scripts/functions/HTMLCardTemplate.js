import * as DOMVar from '../var/DOMVar';
import HTMLCreateEl from './HTMLCreateEl';

const cardTempl = (element) => {
  HTMLCreateEl('div', '', ('.card' + element.day), DOMVar.weatherDisplay);
  HTMLCreateEl('h3', element.day, '.weatherWeek', document.getElementsByClassName('card' + element.day)[0]);
  HTMLCreateEl('img', element.icon, '.weatherIcon', document.getElementsByClassName('card' + element.day)[0]);
  HTMLCreateEl('h5', element.dayTemp, '.weatherDay', document.getElementsByClassName('card' + element.day)[0]);
  HTMLCreateEl('h5', element.nightTemp, '.weatherNight', document.getElementsByClassName('card' + element.day)[0]);
};

export default cardTempl;
