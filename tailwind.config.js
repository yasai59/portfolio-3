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
      sans: ["fira-mono"],
      title: ["fira-code", "m-plus-1p"],
    },
    extend: {},
  },
  plugins: [addDynamicIconSelectors()],
};
