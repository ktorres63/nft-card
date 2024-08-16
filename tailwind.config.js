/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "system-ui"],
      },
      colors: {
        "soft-blue": "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        "blue-main": "hsl(217, 54%, 11%)",
        "blue-card": "hsl(216, 50%, 16%)",
        "blue-line": "hsl(215, 32%, 27%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
