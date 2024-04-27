/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: { "50": "#ffffff", "100": "#ffffff", "200": "#ffffff", "300": "#ffffff", "400": "#ffffff", "500": "#ffffff", "600": "#ffffff", "700": "#ffffff", "800": "#ffffff", "900": "#ffffff" }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
