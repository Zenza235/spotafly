/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'title': '#FFFFFF',
      'header': '#AAAAAA',
      'purple': {
        100: '#18122B',
        200: '#443C68',
        300: '#393053',
        400: '#18122B',
      },
    }
  },
  plugins: [],
}
