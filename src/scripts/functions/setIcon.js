import icons from '../var/icons';

const setIcon = (fetchedData, arr) => {
  const iconsArr = Object.keys(icons);

  for (let i = 0; i < arr.length; i++) {
    let desc = fetchedData[i + 1].weather[0].description
    console.log(desc);
    iconsArr.includes(desc) === 'true' ? arr[i].icon = icons[desc]
      : console.log('xd');
  }
};

export default setIcon;
