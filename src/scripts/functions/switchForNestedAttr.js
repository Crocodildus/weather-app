const switchForNestedAtrr = (attr, obj) => {
  switch (attr || obj) {
    case 'weather' || '':
      document.getElementById('desc') = obj[attr][0].description;
    case 'temp':
      return obj[attr][]
  }
}