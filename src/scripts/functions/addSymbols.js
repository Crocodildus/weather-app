const addSymbols = (val) => {
  switch (val) {
    case 'temp':
    case 'dayTemp':
    case 'nightTemp':
    case 'min':
    case 'max':
      return '°C';
    case 'humidity':
      return ' %';
    case 'visibility':
      return ' m.';
    case 'pressure':
      return ' Pa';
  }
};

export default addSymbols;
