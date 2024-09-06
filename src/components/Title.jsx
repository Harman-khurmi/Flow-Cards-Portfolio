import React from 'react'
import { motion } from "framer-motion"
function Title({ Data, reference }) {
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.05 }} dragElastic={0.1}

        className='h-14 w-[50rem] bg-white rounded-3xl p-4  shadow-sm border-solid border-gray-200 border-[0px] cursor-pointer flex-shrink-0 mt-8 mb-3'>
        <div>
          <h2 className='font-semibold text-[20px] y-2 items-center '>{Data.Heading}</h2>
        </div>
      </motion.div>
    </>

  )
}
export default Title;
