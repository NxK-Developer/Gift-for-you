
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { rose: { 500: '#E11D48', 600: '#BE123C' }, cream: '#FFF9F5', gold: '#F59E0B' },
      fontFamily: { serif: ['Playfair Display', 'serif'], sans: ['Inter', 'sans-serif'] }
    }
  },
  plugins: []
}
