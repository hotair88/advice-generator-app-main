/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}", "./*{html, js}"],
  theme: {
    colors : {
      ...colors, 
      cyann: 'hsl(var(--color-cyann) / <alpha-value>)',
      neonn: 'hsl(var(--color-neonn) / <alpha-value>)',
      grayish_blue: 'hsl(var(--color-grayish-blue) / <alpha-value>)',
      dark_grayish_blue: 'hsl(var(--color-dark-grayish-blue) / <alpha-value>)',
      dark_blue: 'hsl(var(--color-dark-blue) / <alpha-value>)',
    },
  },
    extend: {},
  plugins: [],
}

