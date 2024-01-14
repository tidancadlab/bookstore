const plugin = require("tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {}
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      const color = theme("color")
      console.log(color)
    })
  ],
};
