/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  plugins: [],
  theme: {
    colors: {
      primary: '#027b80',
      primaryDark: '#0f2827',
      primaryLight: '#B3ECEC',

      secondary: '#c16161',
      secondaryDark: '#7D0000',
      secondaryLight: '#EBC6C6',

      tertiary: '#A2CF8C',
      tertiaryDark: '#5C8149',
      tertiaryLight: '#e3fad8',

      greenGrayDark: '#8aa18e',
      greenGrayLight: '#bfd5b5',

      lightYellow: '#e1fd86',
    },
    extend: {},
    screens: {
      xs: '480px',
    },
  },
}
