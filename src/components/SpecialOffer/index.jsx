import React from "react";
import downImage from "../../assets/images/testimonial-down.svg";
import poster1 from "../../assets/images/offer/offerLeft.svg";
import poster2 from "../../assets/images/offer/offerRight.svg";

const SpecialOffer = () => {
  return (
    <div>
      {/* down image */}
      <div className="">
        <img src={downImage} alt="" className="" />
      </div>
      {/* offer content section */}
      <div className="container mx-auto py-20 ">
        {/* top */}
        <div className="max-w-[700px] mx-auto text-center">
          <h3 className="text-black text-lg font-semibold font-josefin border-y border-cream inline-block py-1">
            OFFER
          </h3>
          <h1 className="text-black text-[40px] font-bold font-Cormorant mt-3 mb-4">
            Our special Offer dishes
          </h1>
          <p className="text-black text-xl text-center font-normal mt-3 font-josefin">
            {`Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making.`}
          </p>
        </div>
        {/* images */}
        <div className="flex flex-row gap-7 mt-10">
          <div className="">
            <img src={poster1} alt="" className="w-[672px]"/>
          </div>
          <div className="">
            <img src={poster2} alt="" className="w-[672px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
