/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      divideColor: ['group-hover'],
      backgroundColor: ['group-focus'],
    }
  },
  plugins: [],
};
