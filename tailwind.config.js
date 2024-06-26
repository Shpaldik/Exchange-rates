/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan': '#66cbf9',
        'btnGray': 'rgba(38, 49, 78, 1)',
        'textGray': 'rgba(70, 78, 98, 1)',
        'bgGray': 'rgba(18, 23, 31, 1)',
      },
      screens: {
        lg:{'max': '1350px'},
        lgmenu:{'min': '1350px'},
        md:{'max': '750px'},
      }
    },
  },
  plugins: [],
}
