/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: "#ecfdf5",
          500: "#10b981",
          600: "#059669",
        },
        orange: {
          50: "#fff7ed",
          500: "#f59e0b",
          600: "#d97706",
        }
      }
    },
  },
  plugins: [],
};