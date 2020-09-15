import importAll from '../functions/importMultFiles';

const icons = importAll(require.context('../../icons', false, /\.(png|jpe?g|svg)$/));

export default icons;
