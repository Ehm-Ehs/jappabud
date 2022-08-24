const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      colors:{
        gray:'#676767',
        greenLight:'#5fc544'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
     },
    },
  },
  plugins: [],
}
