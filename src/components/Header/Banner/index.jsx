import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../../../assets/images/Banner.svg";
import bgIcon from "../../../assets/images/icon/bgIcon.svg";

const Banner = () => {
  return (
    <div className="bg-black pt-7">
      <div className="container mx-auto flex flex-row items-center gap-32">
        {/* left */}
        <div className="w-full text-white">
          <h1 className="font-Cormorant font-bold text-8xl">
            Welcome to Restaurantate
          </h1>
          <p className="text-lg font-josefin mb-11">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry standard dummy .
          </p>
          <Link to={"/menu"}>
            <button className="font-josefin text-xl p-5 text-white border-2 border-cream px-3">
              View Menus
            </button>
          </Link>
        </div>
        {/* right */}
        <div className="w-full relative px-20 -bottom-16">
          <div className="absolute -right-8 -top-10">
            <img src={bgIcon} alt="" className="h-72" />
          </div>
          <div className="bg-slateMid p-7 flex justify-center rounded-t-full relative z-10">
            <img src={bannerImage} alt="" className="rounded-t-full z-30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
