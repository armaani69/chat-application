import React, { useState } from 'react';

const TestComponent = () => {
  const [testInput, setTestInput] = useState('');

  console.log(testInput);

  const randomAvatarGenerator = () => {
    let avatars: string = `https://avatars.dicebear.com/api/avataaars/${Math.random()}.svg`;
    return avatars;
  };

  return (
    <div>
      <div>
        <form action=''>
          <label htmlFor='message'>Message</label>
          <input
            type='text'
            className='border border-black'
            value={testInput}
            onChange={(e) => setTestInput(e.target.value)}
          />
        </form>
        <div>
          <img src={randomAvatarGenerator()} alt='' />
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
