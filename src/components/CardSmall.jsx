import React from 'react'
import { motion } from "framer-motion"
// Function to truncate the subheading if it exceeds the word limit
function CardSmall({ Data, reference, wordLimit = 5 }) {
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

        className='h-44 w-44 bg-white rounded-2xl flex-row items-center p-4  shadow-md border-solid border-gray-200 border-[1px] cursor-pointer flex-shrink-0'>
        <div>
          <img src={Data.Image} className='object-cover h-12 w-12 flex justify-center content-center items-center rounded-lg my-1' />
        </div>
        <div>
          <h3 className='text-sm width-full break-words my-3'>{truncateText(Data.Subheading, wordLimit)}</h3>
        </div>
        <div className='h-7 w-[5rem] bg-zinc-300 rounded-md content-center text-center my-4'>
          <button>{Data.Button}</button>
        </div>
      </motion.div>
    </>
  )
}


export default CardSmall;

