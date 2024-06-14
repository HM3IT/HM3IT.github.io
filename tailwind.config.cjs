/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        customGray: 'rgb(53, 53, 53)',
      }
    },
  },
  plugins: [],
  darkMode: "class"
}
