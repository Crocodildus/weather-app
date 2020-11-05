module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './src/templates/index.html'
  ],
  theme: {
    screens: {
      'sm': '425px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1454px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {

      },
      spacing: {
        '128': '40rem'
      }
    },
  },
  variants: {},
  plugins: [],
}