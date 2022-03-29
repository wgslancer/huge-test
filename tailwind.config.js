module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'nikko-teal': '#00A4B8',
        grey: '#474747',
      },
      backgroundImage: {
        'background-illustration': "url('images/illustration-background.svg')",
      },
      animation: {
        appear: 'appear 0.3s linear',
      },
      keyframes: {
        appear: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
