import React from 'react';
import ChatList from './ChatList';
import Chats from './Chats';

const DefaultView = () => {
  return (
    <div className='bg-slate-200 flex'>
      <div className='w-[34%]'>
        <ChatList />
      </div>
      <div className='w-[66%]'>
        <Chats />
      </div>
    </div>
  );
};

export default DefaultView;
