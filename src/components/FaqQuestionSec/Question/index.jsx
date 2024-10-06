/* eslint-disable react/prop-types */
import { useState } from "react";

const Question = ({ id, question, answer }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <button
      onClick={() => setShowMore(!showMore)}
      className="text-start py-7 px-10 border border-[#c4c4c4]"
    >
      <h3 className="text-2xl font-medium text-black">{question}</h3>

      {showMore && (
        <p className="hidden text-xl font-josefin text-lightBlack mt-3">
          {answer}
        </p>
      )}
    </button>
  );
};
export default Question;
