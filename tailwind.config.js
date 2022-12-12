/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "500px",
        md: "728px",
        lg: "984px",
        xl: "1225px",
      },
    },
    extend: {
      colors: {
        primary: {
          light: "#b6c689",
          DEFAULT: "#9aab6c",
          dark: "#667049",
          contrastText: "#fff",
        },
        secondary: {
          light: "#e3b36b",
          DEFAULT: "#d89328",
          dark: "#807158",
          contrastText: "#fff",
        },
      },
    },
  },
  plugins: [],
};
