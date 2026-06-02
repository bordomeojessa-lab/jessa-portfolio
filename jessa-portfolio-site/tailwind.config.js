/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      colors: {
        navy: "#061B2C",
        deepNavy: "#03111D",
        gold: "#F5B84B",
        ink: "#071527",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(7, 21, 39, 0.12)",
      },
    },
  },
  plugins: [],
};
