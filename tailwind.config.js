module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pmiddle': '#7069f5',
        'pdark' : '#4339F2',
        'plight' : '#DAD7FE',
        'somone' : '#FFE5D3',
        'apple' : '#CCF8FE',
        'glight' : '#E2FBD7',
        'cred': '#FF3A29',
        'cblue' : '#02A0FC',
        'cyellow' : '#FFB200',
        'cyellowl' : '#FFF5CC',
        'gdark' : '#34B53A',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
