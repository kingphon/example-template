module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'elsa': "url('/assets/elsa.jpg')",
        'gwen': "url('/assets/gwen.jpg')",
        'horn-girl': "url('/assets/horn girl.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
