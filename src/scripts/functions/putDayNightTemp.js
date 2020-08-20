
const putDayNightTemp = (fetchedData, arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].dayTemp = fetchedData[i + 1].temp.day;
    arr[i].nightTemp = fetchedData[i + 1].temp.night;
  }
};

export default putDayNightTemp;
