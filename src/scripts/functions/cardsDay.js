const cardsDay = (n) => {
  const today = new Date();
  today.setDate(today.getDate() + n);
  const weekDay = today.toString().slice(0, 3);
  return weekDay;
};

export default cardsDay;
