import React from 'react';
import ChatList from './ChatList';
import Chats from './Chats';
// import TestComponent from './Test';

const DefaultView = () => {
  const activeUsers: number[] = Array.from(Array(20).keys());
  const messages: number[] = Array.from(Array(40).keys());
  //   const messagesData: number[] = Array.from(Array(5).keys());

  return (
    <div className='bg-slate-200 flex'>
      <div className='w-[34%]'>
        <ChatList activeUsers={activeUsers} messages={messages} />
      </div>
      <div className='w-[66%]'>
        <Chats />
      </div>
      {/* <TestComponent /> */}
    </div>
  );
};

export default DefaultView;
