module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './src/templates/index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'Tinos': ['Tinos', 'sans-serif'],
        'Asap': ['Asap', 'sans-serif'],
      },
      spacing: {
        '128': '40rem'
      }
    },
  },
  variants: {},
  plugins: [],
}