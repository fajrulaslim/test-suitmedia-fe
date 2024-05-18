/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        primary: {
          80: "#002A48",
          500: "#003459",
        },
        neutral: {
          40: "#99A2A5"
        }
      }
    },
  },
  plugins: [],
};
