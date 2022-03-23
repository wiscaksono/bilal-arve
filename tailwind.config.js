module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "purple-wave": "url('/purple-wave.svg')",
        "white-wave": "url('/white-wave.svg')",
        btm: "url('/bg-btm.svg')",
      },
    },
  },
  plugins: [],
};
