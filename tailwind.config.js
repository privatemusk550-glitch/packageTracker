/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",           // root files
    "./index.html",
    "./details.html",
    "./public/**/*.html", // HTML files in public folder
    "./public/**/*.js",   // JS files in public folder
    "./src/**/*.js",      // if you have JS in src
    "./docs/**/*.html",   // (optional) docs folder 
    "./docs/**/*.js"
  ],
  theme: {
    extend: {
      height: {
        '20':'4.5rem',
        'small': '585px',
        'banner':'300px',
        'deskt': '1285px'
      },
      width: {
        'name':'170px',
        'reply':'419px',
        'small': '780px',
        'input':'385px',
        'flex':'510px',
        'desktop':'1110px'
      },
      screens: {
        'larg':'708px',
        'larger':'908px',
      },
      colors: {
        aramexRed: '#DC291E',
      },
       fontFamily: {
        redHat : ['Space Grotesk']
      }
    },
  },
  plugins: [],
}

