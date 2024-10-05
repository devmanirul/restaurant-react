/* eslint-disable react/prop-types */
const Input = ({ placeholder, className, type }) => {
  return (
    <input
      type={type}
      className={`border border-[#858585] placeholder:text-black invert  text-xl outline-none font-medium font-josefin p-5 bg-transparent ${className}  
      }`}
      placeholder={placeholder}
    />
  );
};
export default Input;
