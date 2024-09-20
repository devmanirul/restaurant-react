import React from "react";
import HeaderLogo from "../../../assets/images/HeaderLogo.svg";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <>
      {/* Top Header */}
      <div className="flex md:flex-row flex-col justify-between items-center gap-6 py-14 font-josefin container mx-auto">
        <div className="">
          <p className="text-[#DEDEDE] border border-cream px-8 py-4 cursor-pointer">
            Call - 987 654 321{" "}
          </p>
        </div>
        <div className="">
          <img src={HeaderLogo} alt="" className="" />
        </div>
        <div className="flex flex-row justify-center items-center gap-8">
          <div className="text-[#DEDEDE] text-2xl  cursor-pointer">
            <GrCart />
          </div>
          <Link
            to={"/reservation"}
            className="bg-cream text-black text-xl font-semibold px-8 py-4"
          >
            Reservation
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
