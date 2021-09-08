const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      trueGray: colors.trueGray,
      red: colors.red,
      lime: colors.lime,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
