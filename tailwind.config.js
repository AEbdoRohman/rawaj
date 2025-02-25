/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#785f9a",
        secondary: "#b0807e",
        main_text: "#12192b",
      },
    },
  },
  plugins: [],
};
