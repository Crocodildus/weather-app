const chartData = (hourData) => {
  const arr = [];
  hourData.map(el => { arr.push(el.temp); });
  const arr2 = arr.filter(el => arr.indexOf(el) % 4 === 0);
  console.log(arr);
  console.log(arr2);
  return arr2;
};

export default chartData;
