/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#353535',
          100: '#E5E5E5',
          200: '#D0D0D0',
          300: '#BBBBBB',
          400: '#A3A3A3',
          500: '#8A8A8A',
          600: '#707070',
          700: '#585858',
          800: '#464646',
          900: '#2B2B2B'
        },
        secondary: {
          DEFAULT: '#8EC22E',
          100: '#D3FF80',
          200: '#BEEF66',
          300: '#ADDF51',
          400: '#9FD340',
          500: '#5C8D00',
          600: '#7BAD1F',
          700: '#6C9C14',
          800: '#5D8A09',
          900: '#4E7800'
        }
      },
      fontFamily: {
        sans: [...fontFamily.sans],
        titulo: ['var(--font-raleway)']
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
