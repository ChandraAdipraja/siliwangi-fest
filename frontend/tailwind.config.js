/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#BE1558",
        secondary: "#FBCBC9",
        active: "#E8DEF8",
      },
    },
  },
  plugins: [],
};
