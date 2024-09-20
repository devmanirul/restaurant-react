import React from "react";
import Price1 from "../../assets/images/offer/Price1.svg";
import Burger from "../../assets/images/offer/burger.svg";
import bg1 from "../../assets/images/offer/burgerBg.svg";

const Offer = () => {
  return (
    <div className="py-24 container mx-auto">
      {/* offer top */}
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-black text-lg font-semibold font-Cormorant border-y border-cream inline">
          OFFER
        </h3>
        <h1 className="text-black text-2xl font-bold font-Cormorant">
          Our special Offer dishes
        </h1>
        <p className="text-black text-base text-center font-normal mt-3 font-josefin">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as <br /> opposed to using 'Content here, content making.
        </p>
      </div>
      {/* offer bottom */}
      <div className="flex flex-row justify-between w-[1376px] h-[408]">
        {/* left */}
        <div className="flex flex-row px-10 py-14 bg-[#C6EAF2] relative my-10">
          {/* left */}
          <div className="">
            {/* price img */}
            <div className="my-3">
              <img src={Price1} alt="" />
            </div>
            {/* offer */}
            <h3 className="text-black text-lg font-medium font-josefin border-y border-black inline py-1">
              50% Offer Going
            </h3>
            {/* menu name */}
            <h1 className="font-Cormorant text-3xl text-black font-bold  py-2">
              Chicken Burger
            </h1>
            <p className="">
              Lorem Ipsum is that it has a <br /> more-or-less normal
            </p>
          </div>
          {/* right */}
          <div className="">
            <div className="py-8">
              <img src={Burger} alt="" className="z-10" />
            </div>
          </div>
          <div className="absolute top-0 right-24">
            <img src={bg1} alt="" className="z-0" />
          </div>
        </div>
        <div className="">Right</div>
      </div>
    </div>
  );
};

export default Offer;
