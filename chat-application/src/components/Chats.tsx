import React from 'react';

const Chats = () => {
  const sentMessages: number[] = Array.from(Array(5).keys());
  const receivedMessages: number[] = Array.from(Array(5).keys());

  const randomAvatarGenerator = () => {
    let avatars = `https://avatars.dicebear.com/api/avataaars/${Math.random()}.svg`;
    return avatars;
  };

  return (
    <div>
      <div className='pl-4 pr-12 py-5 bg-slate-200'>
        <div className='p-8 bg-white font-workSans rounded-modalRadius shadow-lg'>
          <div className='flex flex-col justify-center bg-green-100  rounded-modalRadius mb-6'>
            <div className='flex mx-4 rounded rounded-3xl items-center text-gray-700'>
              <div className='bg-white ml-4 w-16 h-16 rounded-full flex justify-center items-center border-2 border-green-500 p-1'>
                <img
                  className='rounded-full bg-blue-100'
                  src={randomAvatarGenerator()}
                  alt='avatar'
                />
              </div>
              <div className='p-5'>
                <h4 className='text-2xl'>Armaani</h4>
                <p className='text-green-600 '>Online</p>
              </div>
            </div>
          </div>

          <div className='h-chatBody overflow-x-auto'>
            <div className='mt-4'>
              {sentMessages.map((_, i: number) => (
                <div key={i}>
                  <div className='mb-6'>
                    <div className='flex mx-4 items-end mb-4'>
                      <div className='bg-white ml-4 w-12 h-12 rounded-full flex justify-center items-center border-2 border-blue-500 p-1 shadow-xl'>
                        <img
                          className='rounded-full bg-blue-100'
                          src={randomAvatarGenerator()}
                          alt='avatar'
                        />
                      </div>
                      <div className=' bg-blue-400 rounded-full w-[65%] text-lg shadow-xl'>
                        <p className='ml-5 text-white font-medium p-6'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Tempore amet incidunt libero ratione ut ab
                          nostrum veritatis ex at. Voluptatum, quis ratione iure
                          natus, et, saepe sed at repellendus ad voluptates
                          perspiciatis. Cupiditate non, maxime explicabo dolores
                          debitis porro ad vitae eveniet sint adipisci error
                        </p>
                      </div>
                      <div className='ml-5'>
                        <h4 className='text-gray-700 text-xl'>
                          {new Date().getHours()}:{new Date().getMinutes()}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className='mb-6'>
                    <div className='flex flex-row-reverse mx-4 items-end mb-5'>
                      <div className='bg-white ml-4 w-12 h-12 rounded-full flex justify-center items-center border-2 border-gray-500 p-1 shadow-xl'>
                        <img
                          className='rounded-full bg-blue-100'
                          src={randomAvatarGenerator()}
                          alt='avatar'
                        />
                      </div>
                      <div className='bg-gray-300 rounded-full w-[65%] text-lg shadow-lg'>
                        <p className='ml-5 font-medium p-6'>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Placeat quasi cum, ut omnis est magni
                          necessitatibus fugiat hic provident perferendis!
                          dolor, sit amet consectetur adipisicing elit. Placeat
                          quasi cum, ut omnis est magni necessitatibus fugiat
                          hic provident perferendis! dolor, sit amet consectetur
                          adipisicing elit. Placeat quasi cum, ut omnis est
                          magni necessitatibus fugiat hic provident perferendis!
                        </p>
                      </div>
                      <div className='mr-5'>
                        <h4 className='text-gray-700 text-xl'>
                          {new Date().getHours()}:{new Date().getMinutes()}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className='mt-12'>
              {receivedMessages.map((_, i: number) => (
                <div key={i}>
                  <div className='mb-6'>
                    <div className='flex flex-row-reverse mx-4 items-end mb-5'>
                      <div className='bg-white ml-4 w-12 h-12 rounded-full flex justify-center items-center border-2 border-gray-500 p-1 shadow-xl'>
                        <img
                          className='rounded-full bg-blue-100'
                          src={randomAvatarGenerator()}
                          alt='avatar'
                        />
                      </div>
                      <div className='p-5 bg-gray-300 rounded-full w-[65%] text-lg shadow-lg'>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Placeat quasi cum, ut omnis est magni
                          necessitatibus fugiat hic provident perferendis!
                        </p>
                      </div>
                      <div className='mr-5'>
                        <h4 className='text-gray-700 text-xl'>
                          {new Date().getHours()}:{new Date().getMinutes()}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          <div className='mt-6 text-white'>
            <form
              action=''
              className='w-full flex flex-col justify-center items-center'
            >
              <input
                className='w-[95%] px-8 py-4 rounded rounded-xl  text-xl shadow-2xl outline-none bg-violet-600 text-white placeholder-white'
                type='text'
                placeholder='Type Your Message Here '
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
