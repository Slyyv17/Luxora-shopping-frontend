/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pryClr: '#000000',
        secClr: '#ffffff',
        navBg: '#202123',
        btnClr: '#555D50',
        footerBg: '#7F848A',
        iconClr: '#2E302F',
        otherBg: '#DDE1E2',
        closeBtnClr: '#FF0000',
        removeBtn: '#CC3333',
      },

      fontFamily: {
        headingFF: ['Cormorant Garamond', 'sans-serif'],
        bodyFF: ['Lato', 'sans-serif'],
        btnFF: ['Montserrat', 'sans-serif'],
      },

      backgroundImage: {
        'heroImage': "url('./src/assets/images/close-up-stylish-adult-male-with-sunglasses.webp')",
        'secondImage': "url('./src/assets/images/front-view-adult-male-posing-with-stylish-hat.webp')",
        'acctImage': "url('./src/assets/images/wardrobe.jpeg')",
      },

      height: {
        screen: '100vh',
      }
    },
  },
  plugins: [],
}

