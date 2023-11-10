/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-elements/dist/js/**/*.js"
],
theme: {
  extend: {
    backgroundImage:{
        "lady": "url(../../assets/lady trader.png)"
    },
    fontFamily: {
      'bodoni-moda': ['"Bodoni Moda"', 'sans-serif'],
       'inter': ['Inter', 'sans-serif'],
    },
    spacing: {
      'landing_nav-padding': '0px 130px 0px 120px',
    },
  
    Color:{
      primary: "#088AB2"
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  // borderRadius: {
  //   'md': '0.75rem',
  //   'lg': '1.0rem'
  // }
},

// eslint-disable-next-line no-undef
plugins: [require("tw-elements/dist/plugin.cjs")],
}
