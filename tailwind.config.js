/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['gilroy'],
      },
      colors: {
        'c1': '#202328',
        'c2': '#FE3B42',
        'c3': '#0A0D14',
      },
    },
  },
  plugins: [],
}
