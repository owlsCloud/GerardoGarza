/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#004000",
      inActive: "#353535",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
