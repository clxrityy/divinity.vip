/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary-black': {
        light: '#4d4d4d',
        DEFAULT: '#3B3B3B',
        dark: '#1C1C1C'
      },
      'primary-gold': {
        light: '#FFE002',
        DEFAULT: '#FFB606',
        dark: '#B28228'
      },
      'ash-white': {
        light: '#f8f8f8',
        DEFAULT: '#dcdcdc',
        dark: '#cccccc'
      }
    },
    extend: {},
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('optional', '&:optional')
      addVariant('hocus', ['&:hover', '&:focus'])
      addVariant('inverted-colors', '@media (inverted-colors: inverted)')
    })
  ],
}
