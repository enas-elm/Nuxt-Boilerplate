/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#027b80',
      primaryLight: '#B3ECEC',
      primaryDark: '#0f2827',

      secondary: '#c16161',
      secondaryLight: '#EBC6C6',
      secondaryDark: '#7D0000',

      tertiary: '#A2CF8C',
      tertiaryLight: '#e3fad8',
      tertiaryLight2: '#e3fad8',
      tertiaryDark: '#5C8149',

      greenGrayLight: '#bfd5b5',
      greenGrayDark: '#8aa18e',

      lightYellow: '#e1fd86',
    },
    screens: {
      xs: '480px',
    },
  },
  plugins: [],
};
