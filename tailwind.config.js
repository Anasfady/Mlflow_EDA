/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', '"Iowan Old Style"', '"Times New Roman"', "serif"],
        mono: [
          "ui-monospace",
          '"SFMono-Regular"',
          '"Cascadia Code"',
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
