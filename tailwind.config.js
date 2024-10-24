/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Rubik': ["Rubik", "sans-serif"],

    },
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [],
}