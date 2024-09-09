import React from "react";
import { motion } from "framer-motion";

// Function to truncate the subheading if it exceeds the word limit
function CardSmall({ Data, reference, wordLimit = 5 }) {
  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };
  const handleDoubleClick = () => {
    window.open(`${Data.Link}`, "_blank");
  };
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.05 }}
        dragElastic={0.1}
        className={`${Data.buttonStatus
          ? "h-44 w-44"
          : "h-[5rem] w-[25rem] flex justify-left gap-5 font-medium"
          } bg-white rounded-2xl flex-row items-center p-4  shadow-md border-solid border-gray-200 border-[1px] cursor-pointer flex-shrink-0 ${Data.order}
          ${Data.up}
          ${Data.east}
          ${Data.zindex}`}
        onDoubleClick={handleDoubleClick}
      >
        <div>
          <img
            src={Data.Image}
            className="object-cover h-12 w-12 flex justify-center content-center items-center rounded-lg my-1"
            draggable="false"
          />
        </div>
        <div>
          <h3 className=" text-sm width-full break-words my-3">
            {truncateText(Data.Subheading, wordLimit)}
          </h3>
        </div>
        <div
          className={` ${Data.buttonStatus ? "h-7" : "hidden"
            }  w-[5rem] rounded-md content-center text-center my-4 ${Data.btnColor} ${Data.textColor}`}
        >
          <button>{Data.Button}</button>
        </div>
      </motion.div>
    </>
  );
}

export default CardSmall;
