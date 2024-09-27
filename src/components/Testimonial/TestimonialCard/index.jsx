/* eslint-disable react/prop-types */
import { RiDoubleQuotesR } from "react-icons/ri";

const TestimonialCard = ({ img, name, country, comment }) => {
  return (
    <div className="h-[380px] text-white bg-[#343942] md:px-10 md:py-12 py-3 w-full">
      <div className="flex md:flex-row flex-col items-center gap-6 border-b border-b-[#797E89] md:pb-7 pb-4 md:mb-6 mb-2">
        <div className="md:h-20 w-20 relative">
          <img src={img} alt="" />
          <div className="bg-cream text-black w-6 h-6 flex justify-center items-center rounded-full absolute top-0 left-0 border-2 border-black">
            <RiDoubleQuotesR />
          </div>
        </div>
        <div className="">
          <h3 className="font-Cormorant text-3xl font-bold">{name}</h3>
          <p className="text-xl text-cream font-normal font-josefin">
            {country}
          </p>
        </div>
      </div>

      <p className="italic text-[22px]">{`"${comment}`}</p>
    </div>
  );
};

export default TestimonialCard;
