import React from 'react'
import myImage from '../assets/mypic.jpg'
function CardSmall({ smalldata }) {
  return (
    <>
      <div className='h-40 w-[11rem] bg-zinc-100 rounded-2xl flex items-center p-5 shadow-xl'>
        <div>
          <img src={myImage} className='h-10 w-10 object-cover rounded-xl mb-3' />
          <p className='text-sm font-[400] mb-3'>{smalldata.heading}</p>
          <button className='bg-blue-500 text-slate-100 p-1 h-8 w-24 font-medium rounded-lg text-sm'>{smalldata.button}</button>
        </div>

      </div>
    </>
  )
}

export default CardSmall
