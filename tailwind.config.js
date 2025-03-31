/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: "#6643c2",
        customGreen: "#32ad8a",
      },
      perspective: {
        500: "500px",
        600: "600px", 
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
      translate: {
        "z-16": "4rem",
        "-z-16": "-4rem",
        "z-20": "5rem",
        "-z-20": "-5rem",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "spin-cube": "spinCube 6s linear infinite", 
      },
      keyframes: {
        spinCube: {
          "0%": { transform: "rotateX(-30deg) rotateY(0deg)" },
          "100%": { transform: "rotateX(-30deg) rotateY(360deg)" },
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"], 
      },
    },
  },
  plugins: [],
};
