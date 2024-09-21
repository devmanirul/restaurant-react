import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../../../assets/images/Banner.svg";

const Banner = () => {
  return (
    <div className="bg-black pt-7">
      <div className="container mx-auto flex flex-row items-center gap-32">
        {/* left */}
        <div className="w-full text-white">
          <h1 className="font-Cormorant font-bold lg:text-8xl text-2xl">
            Welcome to Restaurantate
          </h1>
          <p className="text-lg text-[#DFDFDF] font-josefin my-8">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry standard dummy .
          </p>
          <Link to={"/menu"}>
            <button className="font-josefin text-xl p-5 text-white border border-cream px-3">
              View Menus
            </button>
          </Link>
        </div>
        {/* right */}
        <div className="w-full relative px-20 -bottom-20">
          <div className="flex justify-center relative z-10">
            <img src={bannerImage} alt="" className="z-30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
