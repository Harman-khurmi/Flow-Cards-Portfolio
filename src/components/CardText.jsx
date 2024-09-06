import React from 'react'
import { motion } from "framer-motion"
function CardText({ Data, reference,type}) {
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.05 }} dragElastic={0.1} className={` ${type} rounded-3xl flex-row items-center p-4 shadow-md border-solid border-gray-200 border-[1px] cursor-pointer flex-shrink-0 z-30 relative font-medium italic bg-sky-400 text-white`} >
        <div >
          <h1 className='font-bold text-6xl'>"</h1>
          <h2 className='font-medium text-[20px] y-2 items-center '>{Data.Heading}</h2>
        </div>
      </motion.div>
    </>
  )
}

export default CardText
// h-44 w-[25rem]