const addSymbols = (val) => {
  switch (val) {
    case 'feels_like':
    case 'dayTemp':
    case 'nightTemp':
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
