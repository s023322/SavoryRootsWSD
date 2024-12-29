/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'gloock': ['Gloock', 'serif'],
      'albert': ['Albert Sans', 'serif']
    },
    colors: {
      'background': '#FFF9EE',
      'black': '#000000',
      'highlight': '#A4BD38',
    },
    extend: {},
  },
  plugins: [],
}

