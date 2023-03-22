/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        doctorTheme: {
          primary: "#0FCFEC",

          accent: "#3A3256",

          secondary: "#19D3AE",


          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#570DF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
