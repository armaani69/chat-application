import React, { useEffect, useState } from 'react';
// import { randomAvatarGenerator } from '../common/helper';
import axios, { AxiosResponse } from 'axios';
import { SenderMessageDetails } from '../interface';

const Chats = () => {
  //   let hours: number = new Date().getHours();
  //   let minutes: string | number =
  //     Number(new Date().getMinutes()) < 10
  //       ? 0 + String(new Date().getMinutes())
  //       : new Date().getMinutes();

  const baseUrl: string = 'http://localhost:8080';

  const [senderMessageDetails, setSenderMessageDetails] =
    useState<SenderMessageDetails[]>();

  useEffect(() => {
    axios
      .get(`${baseUrl}/getMessages`)
      .then((response: AxiosResponse) =>
        setSenderMessageDetails(response.data),
      );
  }, []);

  const [messageInput, setMessageInput] = useState<string>('');

  const sendMessage = async () => {
    await axios.post(`${baseUrl}/sendMessage`, {
      message: messageInput,
      time: new Date().toLocaleTimeString(),
      avatarNumber: '2',
    });
  };

  console.log(typeof new Date().toLocaleTimeString());

  return (
    <div>
      <div className='pl-4 pr-12 py-5 bg-slate-200'>
        <div className='p-8 bg-white font-workSans rounded-modalRadius shadow-lg'>
          <div className='flex flex-col justify-center bg-green-100 rounded-modalRadius mb-6'>
            <div className='flex mx-4 rounded rounded-3xl items-center text-gray-700'>
              <div className='bg-white ml-4 w-16 h-16 rounded-full flex justify-center items-center border-2 border-green-500 p-1'>
                <img
                  className='rounded-full bg-blue-100'
                  src={`https://avatars.dicebear.com/api/avataaars/2.svg`}
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
              <div>
                {senderMessageDetails?.map((data: SenderMessageDetails) => (
                  <div key={String(data.id)}>
                    <div className='mb-6'>
                      <div className='flex mx-4 items-end mb-4'>
                        <div className='bg-white ml-4 w-12 h-12 rounded-full flex justify-center items-center border-2 border-blue-500 p-1 shadow-xl'>
                          <img
                            className='rounded-full bg-blue-100'
                            src={`https://avatars.dicebear.com/api/avataaars/${data?.avatarNumber}.svg`}
                            alt='avatar'
                          />
                        </div>
                        <div className='ml-5 bg-blue-400 rounded-chatMessageRadius w-[65%] text-lg shadow-xl px-6 py-1'>
                          <p className='text-white font-medium px-2 py-1'>
                            {data.message}
                          </p>
                        </div>
                        <div className='ml-5'>
                          <h4 className='text-gray-700 text-xl'>{data.time}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* <div className='mb-6'>
                  <div className='flex flex-row-reverse mx-4 items-end mb-5'>
                    <div className='bg-white ml-4 w-12 h-12 rounded-full flex justify-center items-center border-2 border-gray-400 p-1 shadow-xl'>
                      <img
                        className='rounded-full bg-green-200'
                        src={randomAvatarGenerator()}
                        alt='avatar'
                      />
                    </div>
                    <div className='px-6 py-1 ml-5 bg-gray-300 rounded-chatMessageRadius w-[65%] text-lg shadow-lg'>
                      <p className='font-medium px-2 py-1'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Placeat quasi cum, ut omnis est magni
                        necessitatibus fugiat hic provident perferendis! dolor,
                        sit amet consectetur adipisicing elit. Placeat ipsum
                        dolor sit amet consectetur adipisicing elit. Tempore
                        amet incidunt libero ratione ut ab nostrum veritatis ex
                        at. Voluptatum, quis ratione iure t.
                      </p>
                    </div>
                    <div className='mr-5'>
                      <h4 className='text-gray-700 text-xl'>
                        {hours}:{minutes}
                      </h4>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className='mt-6 text-white'>
            <form
              action=''
              className='w-full flex flex-col justify-center items-center'
              onSubmit={sendMessage}
            >
              <input
                className='w-[95%] px-8 py-4 rounded rounded-xl  text-xl outline-none bg-violet-600 text-white placeholder-white drop-shadow-xl shadow-xl'
                type='text'
                placeholder='Type Your Message Here'
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
