module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "primary": '#0AAD0A',
        "bg" : 'rgb(222, 237, 214)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
