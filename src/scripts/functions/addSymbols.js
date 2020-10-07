const addSymbols = (val) => {
  switch (val) {
    case 'feels_like':
      return ' °C';
    case 'humidity':
      return ' %';
    case 'visibility':
      return ' m';
    case 'pressure':
      return ' Pa';
  }
};

export default addSymbols;
