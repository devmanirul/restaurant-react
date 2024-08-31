import React from "react";
import HeaderLogo from "../../../assets/images/HeaderLogo.svg";

const TopHeader = () => {
  return (
    <>
      {/* Top Header */}
      <div className="flex flex-row justify-between items-center px-10 py-14 font-josefin">
        <div className="">
          <p className="text-white border-2 border-cream px-3 py-5">
            Call - 987 654 321{" "}
          </p>
        </div>
        <div className="">
          <img src={HeaderLogo} alt="" className="" />
        </div>
        <div className="">
          <img src="" alt="" className="" />
          <button className="bg-cream px-3 py-5">Reservation</button>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
