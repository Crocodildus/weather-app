import functionsToLoad from './functionsToLoad';
const condForLoad = () => {
  const mapWaitCount = 0;
  const mapWaitMax = 5;

  typeof google !== 'undefined' ? functionsToLoad()
    : mapWaitCount < mapWaitMax ? setTimeout(function () { condForLoad(); }, 1000)
      : console.log('Failed to load googleapi');
};

export default condForLoad;
