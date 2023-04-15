/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        "10vh": "10vh",
      },
      fontFamily: {
        "ROBOTO": ['Roboto', 'sans-serif'],
        "POPPINS": ['Poppins', 'sans-serif']
      },
      screens: {
        "preHp": "280px",
        "preTablet": "420px",
        "tablet": "577px",
        "desktop": "960px"
      },
      colors: {
        "dark": "black",
        "light": "white"
      }
    },
  },
  plugins: [],
}

