import icons from '../var/icons';

const setIcon = (data, element) => {
  const iconsArr = Object.keys(icons);

  const desc = data.weather[0].description;
  const descPng = desc.concat('.png');
  const main = data.weather[0].main;
  console.log(main, desc);
  const mainPng = main.concat('.png').toLowerCase();
  iconsArr.includes(descPng) === true ? element.src = icons[descPng].default
    : iconsArr.includes(mainPng) === true ? element.src = icons[mainPng].default
      : element.src = icons['unknown.png'];
};

export default setIcon;
