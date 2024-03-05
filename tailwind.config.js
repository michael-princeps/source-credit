/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#f56b2a',
        'secondary': '#003366',
        'source-blue': '#21C0FC;',
        'source-black': '#1c2541',
        'source-yellow': '#FAF3DD',
        'source-navy': '#29EDFD',
        'source-gray': '#626262',
        'source-green': '#3AD301'
      },
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
      },
    },

  },
  plugins: [],
}

