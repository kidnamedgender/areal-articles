/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        mainDarkBlue: '#15202B',
        mainOrange: '#C3672A',
        mainWhite: '#9FBAC2',
        mainBlockBlue: '#192734',
        mainStrokeGray: '#27333E',
      },
      fontFamily: {
        raleway: '"Raleway", sans-serif',
        mons: '"Montserrat", sans-serif',
      },
    },
  },
  plugins: [],
};
