const cardsDay = (array) => {
  for (let i = 1; i <= 7; i++) {
    const today = new Date();
    today.setDate(today.getDate() + i);
    let weekDay = today.toString().slice(0, 3);
    array.push(weekDay);
  }
};

export default cardsDay;
