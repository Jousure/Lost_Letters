/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        fontFamily: {
        script: ['"Dancing Script"', 'cursive'],
        typewriter: ['"Special Elite"', 'monospace'],
      },
      colors: {
        parchment: '#f9f5ec',
        brownLight: '#d4c4a8',
        brownDark: '#5c4b3c',
        textBrown: '#3b2f2f',
      },
    },
  },
  plugins: [],
}

