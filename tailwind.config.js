const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "geist-bold": ["Geist-Bold"],
        "geist-regular": ["Geist-Regular"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
