import React from "react";
import menu1 from "../../../assets/images/offer/menu1.jpg"

const DishCard = () => {
    return (
      <div>
        <div className="h-[310px] border-2 border-red-400">
          <img src={menu1} alt="" className="" />
        </div>
        <div className="flex flex-row justify-between">
          <h3 className="text-black font-Cormorant font-bold text-3xl px-4 border-b border-b-[#dcdcdc] mb-4">
            Chicken Manjoori{" "}
          </h3>
          <h3 className="text-black font-Cormorant font-bold text-3xl">$15</h3>
        </div>
        <p className="text-xl font-normal font-josefin">Lorem Ipsum is that it has a more-or-less normal</p>
      </div>
    );
};

export default DishCard;
