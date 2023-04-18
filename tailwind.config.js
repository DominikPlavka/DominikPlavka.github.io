/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    boxShadow:{
      myShadow: "6px 6px 20px -6px rgba(0,0,0,0.75)",
      bottomShadow: "1px 5px 13px -5px rgba(0,0,0,0.75)"
    },
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
  },
  plugins: [],
}
