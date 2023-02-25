/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#2d897b",
      inActive: "#353535",
      textColor: "#2d897b",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
