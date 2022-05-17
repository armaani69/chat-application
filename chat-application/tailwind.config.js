module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        workSans: "'Work Sans', sans-serif",
      },
      height: {
        128: '28.5rem',
        chatBody: '41.5rem',
      },
      minWidth: {
        circle: '5rem',
      },
      maxWidth: {
        activeUsersRow: '50rem',
      },
      minHeight: {
        circle: '5rem',
        chatList: '7rem',
      },
      borderRadius: {
        modalRadius: '3.5rem',
        chatMessageRadius: '3rem',
      },
    },
  },
  plugins: [],
};
