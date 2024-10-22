/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        yellow: {
          500: '#F59E0B',
          600: '#D97706',
        },
        gold: '#E1AD01',
        gold2:"#7B5F01"
      },
      fontFamily: {
        'figma-hand': ['"Figma Hand"', 'cursive'],
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ['focus'],
      ringColor: ['focus', 'dark'],
      ringOffsetColor: ['focus', 'dark'],
    },
  },
  plugins: [],
}