/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage :{
        bgImg: "url('/image-bg/bg-img.webp')"
      }
    },
  },
  plugins: [],
}