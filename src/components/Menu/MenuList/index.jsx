import React from "react";
import demo from "../../../assets/images/menu-item/Starters/starter1.svg";

const MenuList = ({ heading, title, description, image, price }) => {
  return (
    <div className="pt-6">
      <h2 className="text-[40px] font-bold font-Cormorant text-black">
        Starters
      </h2>
      <div className="flex flex-row gap-5 items-center justify-between">
        {/* left */}
        <div className="w-[12%]">
          <img
            src={demo}
            alt=""
            className="rounded-full w[84px] h-[84px] object-cover"
          />
        </div>
        {/* mid */}
        <div className="w-[80%] flex flex-col">
          <h1 className="font-Cormorant text-3xl font-bold">
            Raw Scallops from Erquy
          </h1>
          <p className="font-josefin">Candied Jerusalem artichokes, truffle</p>
        </div>
        {/* right */}
        <div className="w-[8%] text-end">
          <p className="W-[8%] font-Cormorant text-3xl font-bold">$40</p>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
