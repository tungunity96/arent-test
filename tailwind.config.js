/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        xl: "960px",
        lg: "960px",
      },
    },
    extend: {
      colors: {
        light: "#ffffff",
        primary: {
          300: "#FFCC21",
          400: "#FF963C",
          500: "#EA6C00",
        },
        secondary: {
          300: "#EA6C00",
        },
        dark: {
          600: "#2E2E2E",
          500: "#414141",
        },
        gray: {
          400: "#777777",
        },
      },
    },
  },
  plugins: [],
};
