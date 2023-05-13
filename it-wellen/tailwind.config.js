/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  
    extend: {  
      backgroundImage: {
      'hero-bg': "url('/images/background.png')",
      // 'footer-texture': "url('/img/footer-texture.png')",
    }
    },
  },
  plugins: [],
}
