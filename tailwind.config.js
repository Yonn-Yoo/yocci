const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 400ms cubic-bezier(0.1, 0.7, 1, 1) forwards',
        dropFilter: 'dropFilter 400ms cubic-bezier(0.1, 0.7, 1, 1) forwards',
        toastBar: 'toastBar 5s linear forwards',
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        dropFilter: {
          from: {
            opacity: '0',
            backdropFilter: 'blur(0)',
          },
          to: {
            opacity: '1',
            backdropFilter: 'blur(16px)',
          },
        },
        toastBar: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(-100%)',
          },
        },
      },
    },
  },
  plugins: [],
};
