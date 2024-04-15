/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    colors: {
    },
    extend: {
      backgroundImage: {
        'loginback': "url('/src/images/loginback.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }

    },
  },
  
  plugins: [
     [require("daisyui")],
    require('flowbite/plugin')
]
}

