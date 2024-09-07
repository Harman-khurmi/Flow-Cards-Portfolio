import React from 'react'
import myImage from '../assets/mypic.jpg'
function UserDetails() {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <>
      <div className='h-[85vh] w-[36vw] flex-col  pl-16 pt-16 fixed' >
        <img src={myImage} className='h-44 w-44 object-cover rounded-full' draggable="false" />
        <div className='mt-8'>
          <h1 className='font-semibold text-5xl'>Harmanpreet Singh</h1>
          <p className='pr-5 pt-3 text-xl font-medium text-zinc-600 leading-6'>Exploring the techscape with a designer's eye and a coder's heart, I create magic in the pixels.
            <br /><br />
            ✦ Punjab, India
            <br />
            ✦ Web-Developer & UI/UX Designer</p>

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
