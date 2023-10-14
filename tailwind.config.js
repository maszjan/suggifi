/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        "darkMotive": "rgb(34, 34, 59)",
        "lightGrayMotive": "rgb(74, 78, 105)",
        "yellowMotive": "rgb(233, 196, 106)"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
    plugins: [],
  },
};
