import React from 'react';

const ChatList = () => {
  const activeUsers: number[] = Array.from(Array(20).keys());
  const messages: number[] = Array.from(Array(40).keys());

  const randomAvatarGenerator = () => {
    let avatars = `https://avatars.dicebear.com/api/avataaars/${Math.random()}.svg`;
    return avatars;
  };

  //   const randomNameGenerator = () => {
  //     {
  //       fetch('https://api.name-fake.com/ukrainian-ukraine/male')
  //         .then((response) => response.json())
  //         .then((data) => console.log(data));
  //     }
  //   };

  return (
    <div>
      <div className='px-12 py-5 bg-slate-200'>
        <div className='p-8 bg-white font-workSans rounded-modalRadius shadow-lg'>
          <div className='flex flex-col justify-center items-center'>
            <h3 className='font-semibold text-3xl py-11 text-blue-500'>
              Message
            </h3>
            <form
              action=''
              className='w-full flex flex-col justify-center items-center'
            >
              <input
                className='w-[95%] px-8 py-4 rounded rounded-xl bg-gray-100 text-xl font-light shadow-md outline-none text-gray-700 placeholder-gray-700'
                type='text'
                placeholder='Search Your Contacts'
              />
            </form>
          </div>

          <div className='mt-6 w-[97%]'>
            <h3 className='pl-5 text-2xl mb-3 font-semibold text-blue-500'>
              Active
              <span
                className={
                  activeUsers.length > 0
                    ? 'ml-2 font-medium text-green-600'
                    : 'ml-2 text-black'
                }
              >
                ({activeUsers.length})
              </span>
            </h3>
            <div className='flex overflow-x-auto max-w-full'>
              {activeUsers.map((_, i: number) => (
                <div key={i}>
                  <div className='bg-white min-w-circle h-20 rounded-full flex justify-center items-center shadow-xl border-2 border-green-500 p-1 mx-3'>
                    <img
                      className='rounded-full bg-blue-100'
                      src={randomAvatarGenerator()}
                      alt=''
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-6'>
            <h3 className='pl-5 text-2xl mb-3 font-semibold text-blue-500'>
              Messages
              <span
                className={
                  messages.length > 0
                    ? 'ml-2 font-medium text-blue-500'
                    : 'ml-2 text-black'
                }
              >
                ({messages.length})
              </span>
            </h3>
            <div className='flex flex-col w-full overflow-y-auto h-128'>
              {messages.map((_, i: number) => (
                <div key={i}>
                  <div className='flex bg-blue-200 mx-4 rounded rounded-3xl items-center mb-4 shadow-lg'>
                    <div className='bg-white ml-4 min-w-circle h-20 rounded-full flex justify-center items-center border-2 border-blue-500 p-1'>
                      <img
                        className='rounded-full bg-lime-200'
                        src={randomAvatarGenerator()}
                        alt='avatar'
                      />
                    </div>
                    <div className='p-5'>
                      <h4>Armaani</h4>
                      <p className='font-light'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
