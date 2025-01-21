/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors : {
        primary : {
          DEFAULT : "var(--primary)",
        },
        secondary : {
          DEFAULT : "var(--secondary)",
        }
      }
    },
  },
  plugins: [],
}

