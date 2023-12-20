import React from 'react';
import Image from 'next/image';
import Demo from '../../media/1a35816f-99c5-4fad-bbce-150b3549f556.jpg';

const CTA = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className='relative w-full h-full'>
        <Image
          src={Demo}
          className='lg:object-cover'
          alt='demo'
        />
      </div>
    </div>
  );
};

export default CTA;
