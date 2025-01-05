module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        slice: 'slice 2s ease-in-out forwards',
        bgSlideLeft: 'bgSlideLeft 2s ease-in-out forwards',
        bgSlideRight: 'bgSlideRight 2s ease-in-out forwards',
        reveal: 'reveal 2s ease-in-out 2.5s forwards',
      },
      keyframes: {
        slice: {
          '0%': { transform: 'translateY(-200px) translateX(-50%)', opacity: '1' },
          '50%': { transform: 'translateY(50vh) translateX(-50%)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) translateX(-50%)', opacity: '0' },
        },
        bgSlideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        bgSlideRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        reveal: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
