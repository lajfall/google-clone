/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#202124",
      button: "#F8F9FA",
      footer: "#F2F2F2",
    },
    fontFamily: {
      primary: ["Roboto", "Arial", "sans-serif"],
    },
    screens: {
      medium: "720px",
      large: "1200px",
    },
    boxShadow: {
      around: "0 0.5px 1.5px 1.5px rgba(0, 0, 0, 0.1)",
    },
  },
  plugins: [],
};
