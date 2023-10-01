/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['8BIT WONDER', defaultTheme.fontFamily.sans],
      },
    },
    plugins: [],
  }
}

