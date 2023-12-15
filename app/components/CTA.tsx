import React from 'react'
import Image from 'next/image'
import Demo from '../../media/1a35816f-99c5-4fad-bbce-150b3549f556.jpg'

const CTA = () => {
  return (
    <div>
   
        <Image
        src={Demo}
        className='h-50 w-full'
        alt='demo'
        />

    </div>
  )
}

export default CTA