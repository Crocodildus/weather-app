import icons from '../var/icons';

const setIcon = (fetchedData, arr) => {
  const iconsArr = Object.keys(icons);

  for (let i = 0; i < arr.length; i++) {
    const desc = fetchedData[i + 1].weather[0].description;
    const descPng = desc.concat('.png');
    const main = fetchedData[i + 1].weather[0].main;
    const mainPng = main.concat('.png').toLowerCase();
    iconsArr.includes(descPng) === true ? arr[i].icon = icons[descPng].default
      : iconsArr.includes(mainPng) === true ? arr[i].icon = icons[mainPng].default
        : arr[i].icon = icons['unknown.png'];
  }
};

export default setIcon;
