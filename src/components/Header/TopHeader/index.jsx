import React from "react";
import HeaderLogo from "../../../assets/images/HeaderLogo.svg";
import { GrCart } from "react-icons/gr";

const TopHeader = () => {
  return (
    <>
      {/* Top Header */}
      <div className="flex flex-row justify-between items-center px-10 py-14 font-josefin container mx-auto">
        <div className="">
          <p className="text-white border-2 border-cream px-3 py-5">
            Call - 987 654 321{" "}
          </p>
        </div>
        <div className="">
          <img src={HeaderLogo} alt="" className="" />
        </div>
        <div className="flex flex-row justify-center items-center gap-8">
          <div className="text-white text-2xl">
            <GrCart />
          </div>
          <button className="bg-cream text-black px-3 py-5">Reservation</button>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
