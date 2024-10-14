const {
  iconsPlugin,
  dynamicIconsPlugin,
} = require("@egoist/tailwindcss-icons");
const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["fira-mono", "m-plus-1p"],
      title: ["fira-code", "m-plus-1p"],
      opensans: ["open-sans", "m-plus-1p"],
    },
    extend: {
      colors: {
        white: "#FFFAFA",
        black: "#000000",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
