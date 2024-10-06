/* eslint-disable react/prop-types */

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Question = ({ id, question, answer, handleShowMore, showMore }) => {
  return (
    <button
      onClick={() => handleShowMore(id)}
      className="text-left py-7 px-10 border border-[#c4c4c4]"
    >
      <div className="flex flex-row justify-between items-center gap-5">
        <h3 className="text-2xl font-medium text-black">{question}</h3>
        <IoIosArrowDown className="h-10 w-10" />
      </div>

      {showMore === id && (
        <div className="flex flex-row justify-between items-center gap-5">
          <p className="text-xl font-josefin text-lightBlack mt-3">{answer}</p>

          <IoIosArrowUp className="h-10 w-10" />
        </div>
      )}
    </button>
  );
};
export default Question;
