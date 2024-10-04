/* eslint-disable react/prop-types */

import { RiDoubleQuotesR } from "react-icons/ri";

const TestimonialAbCard = ({ description, img, name, rank }) => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* quotes */}
      <div className="flex flex-row items-center justify-center text-cream text-5xl pb-5">
        <RiDoubleQuotesR />
      </div>
      {/* card description */}
      <div className="md:px-80 flex flex-col justify-center items-center gap-7">
        <p className="text-center text-white">{description}</p>
        {/* averter */}
        <div className="md:h-20 w-20 relative">
          <img src={img} alt="" />
          <div className="bg-cream text-black w-6 h-6 flex justify-center items-center rounded-full absolute top-0 left-0 border-2 border-black">
            <RiDoubleQuotesR />
          </div>
        </div>
        {/* name and rank */}
        <div className="flex flex-col gap-3 items-center justify-center">
          <h3 className="text-white text-xl">{name}</h3>
          <p className="text-cream">{rank}</p>
        </div>
      </div>
    </div>
  );
};
export default TestimonialAbCard;
