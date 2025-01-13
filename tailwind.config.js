// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   plugins: [require("daisyui")],
// };
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        systemui: ["system-ui", "sans-serif"],
        rubikSans: ["Rubik Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
  daisyui: {
    themes: ["light"], // Set default theme to light
  },
};
