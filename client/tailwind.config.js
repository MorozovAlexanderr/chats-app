/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFF',
        primary: '#0C2D48',
        secondary: '#145DA0',
        accent: '#2E8BC0',
        neutral: '#B1D4E0',
      },
    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
