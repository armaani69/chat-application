export const randomAvatarGenerator = () => {
  let avatars: string = `https://avatars.dicebear.com/api/avataaars/${Math.random()}.svg`;
  return avatars;
};

// export const randomNameGenerator = () => {
//   {
//     fetch('https://api.name-fake.com/ukrainian-ukraine/male')
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   }
// };

export const modalStyles: object = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    width: '40%',
    bottom: 'auto',
    borderRadius: '1rem',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: 'auto',
    backgroundColor: 'white',
    boxShadow: '5px 8px 16px #99999999',
  },
};
