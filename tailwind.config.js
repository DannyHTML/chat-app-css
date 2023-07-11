/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        subHeadingLeft: "hsl(276, 100%, 81%)",
        chatLeft: "hsl(276, 55%, 52%)",
        chatRight: "hsl(271, 15%, 43%)",
        mainHeadingSubmitBtn: "hsl(271, 36%, 24%)",
        textPage: "hsl(270, 7%, 64%)",
        lightMagenta: "hsl(293, 100%, 63%)",
        lightViolet: "hsl(264, 100%, 61%)",
        appBackground: "hsl(270, 20%, 96%)",
      },
    },
  },
  plugins: [],
};
