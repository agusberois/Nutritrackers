/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'green-mint': '#00B894',
        'blue-petrol': '#1B4965',
        'gray-light': '#F7F9F9',
        'orange-soft': '#F39C12',
        'white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        header: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}