/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
    textColor: theme => theme('colors'),
     textColor: {
       'primary': '#19C27D',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
     },
     colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'chatGPT': '#19C27D',
    },
  },
  plugins: [],
}