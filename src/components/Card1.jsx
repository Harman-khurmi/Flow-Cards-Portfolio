import React from 'react';
import { motion } from "framer-motion";

function Card1({ Data, reference, wordLimit = 10 }) {
  const truncateText = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.05 }} dragElastic={0.1}

        className='h-44 w-[25rem] bg-white rounded-2xl p-5 flex gap-5 justify-between items-center flex-shrink-0 shadow-sm border-solid border-gray-200 border-[1px] cursor-pointer z-20'>

        <div>
          <div>
            <img src={Data.Image} className='object-cover h-8 w-8 flex justify-center content-center items-center rounded-lg my-0' />
          </div>
          <h2 className='font-semibold text-xl my-2 '>{Data.Heading}</h2>
          <p className='text-sm w-[12rem] break-words'>{truncateText(Data.Subheading, wordLimit)}</p>
        </div>
        <div>
          <img src={Data.Image} className='object-cover h-32 w-36 flex justify-center content-center items-center rounded-lg  ' />
        </div>
      </motion.div>
    </>
  )
}

export default Card1;

