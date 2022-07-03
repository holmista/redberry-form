/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myViolet: "#7025FB",
        myOrange: "#FD5334",
        myBlack: "#212529",
        myPurple: "rgba(194, 165, 249, 0.8)"
      },
      fontSize: {
        eighty: "80px",
        twenty: "20px",
        twentySix: "26px"
      },
      fontFamily: {
        nunito: ["nunito"],
        openSans: ["Open Sans"]
      },
      boxShadow: {
        customShadow: "0 0px 8px 16px rgba(0, 0, 0, 0.15)"
      }
    }
  },
  plugins: []
};
