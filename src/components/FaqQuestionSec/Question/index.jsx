/* eslint-disable react/prop-types */
const Question = ({ id, question, answer }) => {
  return (
    <div>
      <h3 className="">{question}</h3>
      <p className="">{answer}</p>
    </div>
  );
};
export default Question;
