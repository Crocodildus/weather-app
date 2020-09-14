import importAll from '../functions/importMultFiles';

export const images = importAll(require.context('../../icons', false, /\.(png|jpe?g|svg)$/));
