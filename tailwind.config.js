/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        "feedback-design": "url('/icons/feedback-design.png')"
      },
      colors: {
        primary: '#DE0B0B',
        body: '#777777',
        bodyDark: '#141414',
      },

      boxShadow: {
        main: '0px 10px 13px rgba(17, 38, 146, 0.05)',
      },
      minWidth: {
        '500': '500px',
      },
      screens: {
        'lg-max': {'max': '1024px'},
      }
    },
  },
  plugins: [],
};
