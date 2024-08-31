/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#E1B168",
        black: "#292E36",
        slate: "#555555",
        lightBlack: "#343942",
        lightCream: "#ff8f5",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        Cormorant: ["Cormorant Infant", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
