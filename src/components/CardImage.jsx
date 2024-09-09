import React from 'react'
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { motion } from "framer-motion"
function CardImage({ Data, reference }) {
  const handleDoubleClick = () => {
    window.open(`${Data.Link}`, '_blank');
  };
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.05 }} dragElastic={0.1} className={`h-44 w-44 bg-white rounded-2xl flex-row items-center p-4 shadow-md border-solid border-gray-200 border-[1px] cursor-pointer flex-shrink-0 z-30 relative`} onDoubleClick={handleDoubleClick} >
        <div >
          <FaSquareArrowUpRight className='absolute top-2 text-2xl left-36 z-100 bg-white text-black rounde' />
        </div>
        <div>
          <img src={Data.Image} className='object-cover h-36 w-44 rounded-lg' draggable='false' />
        </div>
      </motion.div>
    </>
  )
}

export default CardImage
