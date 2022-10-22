/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'kitchen': "url('../src/imgs/kitchen-christian-mackie-unsplash.jpg')",
        'crystalClassic': "url('..src/imgs/crystal-classic.JPG')",
        'crystalComfort': "url('..src/imgs/crystal-comfort.JPG')",
        'crystalMaxx': "url('..src/imgs/crystal-maxx.JPG')",
        'crystalPerform': "url('..src/imgs/crystal-perform.JPG')",
        'crystalPro': "url('..src/imgs/crystal-pro.JPG')",
        'crystalUltra': "url('..src/imgs/crystal-ultra.JPG')",
        'crystalVision': "url('..src/imgs/crystal-vision.JPG')",
      }
    },
    screens: {
      '2xs': '320px',
      'xs' :'500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
