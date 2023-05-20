/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e1d2a",
        secondary: "#ff751a",
      },
      screens: {
        mi: { max: "639px" },
        mh: { max: "425px" },
        ms: { max: "310px" },
      },
      height: {
        card: "700px",
        cardlg: "500px",
      },
      width: {
        contanerxl: "1170px",
        contanerlg: "970px",
        contanermd: "750px",
      },
    },
  },
  plugins: [],
};
        