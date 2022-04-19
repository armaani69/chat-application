module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        workSans: "'Work Sans', sans-serif",
      },
      height: {
        128: '28.5rem',
        chatBody: '42rem',
      },
      minWidth: {
        circle: '5rem',
      },
      maxWidth: {
        activeUsersRow: '50rem',
      },
      minHeight: {
        circle: '5rem',
      },
      borderRadius: {
        modalRadius: '3.5rem',
      },
    },
  },
  plugins: [],
};
