/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "pixelify": ["Pixelify Sans", "sans-serif"],
        "Inter": ["Inter"],
        "Poppins": ["Poppins", "serif"],
        "Metrophobic": ["Metrophobic", "serif"],
        "Montserrat": ["Montserrat", 'serif'],
      },
      colors: {
        "darkblue": "#1B4965",
      }
    },
  },
  plugins: [],
}
