/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#fdfbf7',
        pencil: {
          DEFAULT: '#2c3e50',
          light: '#7f8c8d',
        },
        marker: {
          yellow: '#fff9c4',
          pink: '#ffcdd2',
          green: '#c8e6c9',
          blue: '#bbdefb',
        },
      },
      fontFamily: {
        hand: ['"Patrick Hand"', 'cursive'],
      },
      boxShadow: {
        'sketch': '2px 2px 0px #2c3e50',
        'sketch-hover': '4px 4px 0px #2c3e50',
      },
    },
  },
  plugins: [],
}