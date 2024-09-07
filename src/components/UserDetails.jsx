import React from 'react'
import myImage from '../assets/mypic.jpg'
function UserDetails() {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <>
      <div className='h-[85vh] w-[36vw] flex-col  pl-20 pt-16 fixed' >
        <img src={myImage} className='h-[12rem] w-[12rem] object-cover rounded-full' draggable="false" />
        <div className='mt-8'>
          <h1 className='font-bold text-[44px]'>Harmanpreet Singh</h1>
          <p className='pr-0 pt-3 text-xl font-light text-zinc-600 leading-[26px]'>Exploring the techscape with a designer's eye and a coder's heart, I create magic in the pixels.
            <br />
            <h3 className='py-1 pt-4'>✦ Sofware Engineer</h3>
            <h3 className='py-1'>✦ Full Stack Web Developer</h3>
            <h3 className='py-1'>✦ UI/UX Designer</h3>
            <h3 className='py-1'>✦ Punjab, India</h3>
          </p>

        </div>
        <div>
          <button
            onClick={handleRefresh}
            className="bg-blue-500 text-white px-4 py-2 my-10 font-[400] rounded-md"
          >
            Reset Cards
          </button>
        </div>
      </div>
    </>
  )
}

export default UserDetails;
