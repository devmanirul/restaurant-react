/* eslint-disable react/prop-types */
const Button = ({ title }) => {
  return (
    <button className="text-[22px] font-josefin bg-white text-black px-10 py-[12px] outline-none">
      {title}
    </button>
  );
};
export default Button;
