import React from "react";
import popular1 from "../../../assets/images/offer/popular1.png";

const DishCard = () => {
  return (
    <div className="col-span-1">
      <div className="h-[310px] border-2 border-red-400 mb-5">
        <img src={popular1} alt="" className="h-full" />
      </div>
      <div className="flex flex-row justify-between border-b border-b-[#dcdcdc]">
        <h3 className="text-black font-Cormorant font-bold text-3xl mb-4">
          Chicken Manjoori{" "}
        </h3>
        <h3 className="text-black font-Cormorant font-bold text-3xl">$15</h3>
      </div>
      <p className="text-xl font-normal font-josefin">
        Lorem Ipsum is that it has a more-or-less normal
      </p>
    </div>
  );
};

export default DishCard;
