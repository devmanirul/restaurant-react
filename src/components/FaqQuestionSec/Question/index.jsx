/* eslint-disable react/prop-types */

const Question = ({ id, question, answer, handleShowMore, showMore }) => {
  return (
    <button
      onClick={() => handleShowMore(id)}
      className="text-left py-7 px-10 border border-[#c4c4c4]"
    >
      <h3 className="text-2xl font-medium text-black">{question}</h3>
      {showMore === id && (
        <p className="text-xl font-josefin text-lightBlack mt-3">{answer}</p>
      )}
    </button>
  );
};
export default Question;
