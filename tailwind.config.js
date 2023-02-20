/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#077707",
      inActive: "#353535",
      textColor: "#077707",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
