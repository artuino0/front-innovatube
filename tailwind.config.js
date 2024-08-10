/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    screens: {
      phone: "100px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      "high-monitor": "1600px",
    },
  },
  plugins: [],
};
