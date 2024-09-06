import React from 'react'
import { motion } from "framer-motion"
function Card1({ Data, reference }) {
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={0.1}

        className='h-40 w-[22rem] bg-zinc-100 rounded-2xl p-4 flex gap-5 justify-center items-center flex-shrink-0 shadow-xl'>
        <div>
          <h2 className='font-semibold text-2xl '>{Data.Heading}</h2>
          <p className='text-sm'>{Data.Subheading}</p>
        </div>
        <div>
          <img src={Data.Image} className='object-cover h-28 w-36 flex justify-center content-center items-center rounded-lg  ' />
        </div>
      </motion.div>
    </>
  )
}

export default Card1;

