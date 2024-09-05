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
        gray: "#9F9F9F",
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
