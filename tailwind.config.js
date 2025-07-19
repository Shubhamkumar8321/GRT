/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ts, tsx bhi add kar do future-proof ke liye
  ],
  theme: {
    extend: {
      fontFamily: {
        webspecia: ['Webspecia', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
