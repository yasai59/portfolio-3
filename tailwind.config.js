const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["fira-code", "m-plus-1p"],
      title: ["fira-mono", "m-plus-1p"],
      opensans: ["open-sans", "m-plus-1p"],
    },
    extend: {
      colors: {
        white: "#FFFAFA",
        black: "#000000",
        mygray: "#6F6F6F",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
