/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        anton: ['"Anton SC"', 'sans-serif'], // Add Anton SC
        poppins: ['Poppins', 'sans-serif'], 
        neonderthow: ["Neonderthaw" , 'sans-serif']// Add Poppins
      },
    },
  },
  plugins: [],
};
