/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '.625rem', // 10px
        tiny: '.75rem', // 12px
        sm: '.875rem', // 14px
        normal: '1rem', // 16px
        base: '1.25rem', // 20px
        md: '1.5rem', // 24px
        lg: '2rem', // 32px
        xl: '2.5rem', // 40px
      },
    },
  },
  plugins: [],
}