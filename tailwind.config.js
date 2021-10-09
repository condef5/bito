const MAX_SPACING_NUMBER = 216;
const numberToSpacing = (number) => ({ [`${number}`]: `${number * 0.25}rem` });
const spacingSizes = Array.from({ length: MAX_SPACING_NUMBER }).reduce(
  (acc, _, index) => ({ ...acc, ...numberToSpacing(index) }),
  {}
);

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        px: "1px",
        ...spacingSizes,
      },
      margin: {
        px: "1px",
        ...spacingSizes,
      },
      width: {
        px: "1px",
        ...spacingSizes,
      },
      height: {
        px: "1px",
        ...spacingSizes,
      },
      colors: {
        neutral: {
          700: "#6B7280",
          600: "#C4C4C4",
          500: "#F6F7FB",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
