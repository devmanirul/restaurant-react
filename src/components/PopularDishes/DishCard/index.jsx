/* eslint-disable react/prop-types */
import React from "react";

const DishCard = ({ img, title, description, price }) => {
  return (
    <div className="col-span-1">
      <div className="h-[310px] my-5">
        <img src={img} alt="" className="h-full object-cover" />
      </div>
      <div className="flex flex-row justify-between border-b border-b-[#dcdcdc]">
        <h3 className="text-black font-Cormorant font-bold text-3xl mb-4">
          {title}
        </h3>
        <h3 className="text-black font-Cormorant font-bold text-3xl">
          ${price}
        </h3>
      </div>
      <p className="text-xl font-normal font-josefin mt-3">{description}</p>
    </div>
  );
};

export default DishCard;
