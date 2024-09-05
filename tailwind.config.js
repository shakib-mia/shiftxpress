/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F3A93",
        secondary: "#FF9C00",
        black: "#2B2B2B",
        white: "#FFFFFF",
        gray: {
          DEFAULT: "#9F9F9F",
          light: "#F9FAF9",
        },
      },

      fontFamily: {
        "segoe-ui": ["Segoe UI", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "768px",
          lg: "1000px",
          xl: "1200px",
        },
      },
    },
  },
  plugins: [],
};
