/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Alan Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f7ffe6',
          100: '#efffcc',
          200: '#e6ff99',
          300: '#dcff66',
          400: '#d4ff33',
          500: '#ccff11',  // LingoSec brand color
          600: '#88bb00',  // LingoSec secondary
          700: '#668800',
          800: '#445500',
          900: '#223300',
        }
      }
    },
  },
  plugins: [],
}
