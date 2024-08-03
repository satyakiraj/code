/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "./img/background.jpg",
      },
    },
  },
  plugins: [],
}

