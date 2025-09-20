/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}" // adjust if your source folder is named differently
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
}