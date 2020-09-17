import icons from '../var/icons';

const setIcon = (fetchedData, arr) => {
  const iconsArr = Object.keys(icons);

  for (let i = 0; i < arr.length; i++) {
    let desc = fetchedData[i + 1].weather[0].description;
    let descPng = desc.concat('.png')
    let main = fetchedData[i + 1].weather[0].main;
    let mainPng = main.concat('.png').toLowerCase();
    iconsArr.includes(descPng) === true ? arr[i].icon = icons[descPng] 
      : iconsArr.includes(mainPng) === true ? arr[i].icon = icons[mainPng] 
        : arr[i].icon = icons['unknown.png'];
  }
};

export default setIcon;