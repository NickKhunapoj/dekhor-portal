/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      '092F88' : '#092F88',
      'D9D9D9' : '#D9D9D9',
      '000000' : '#000000',
      'f6f6fb' : '#f6f6fb',
    },

    extend: {
      fontFamily: {
        'Poppins': ["Poppins", "sans-serif"],
        'Paytone One': ["Paytone One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
