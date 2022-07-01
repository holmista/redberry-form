/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myViolet: "#7025FB",
        myOrange: "#FD5334",
        myBlack: "#212529",
        myPurple: "rgba(194, 165, 249, 0.8)",
      },
      fontSize: {
        eighty: "80px",
        twenty: "20px",
      },
      fontFamily: {
        nunito: ["nunito"],
        openSans: ["Open Sans"],
      },
    },

  },
  plugins: [],
};
