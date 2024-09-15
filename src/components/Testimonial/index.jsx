import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="bg-black">
      <div className="p-10 gap-28 ">
        {/* heading section */}
        <div className="w-full ">
          <h3 className="text-white text-lg font-semibold font-Cormorant">
            Testimonial
          </h3>
          <h1 className="text-white text-2xl font-bold font-Cormorant">
            What our clients say{" "}
          </h1>
          <p className="text-white text-base font-normal mt-3 font-josefin">
            We love to hear from customers, so please leave a comment or say
            hello in an email.
          </p>
        </div>
        {/* Carosol container */}
        <div className="flex flex-row gap-5 w-full">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
