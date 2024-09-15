import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-row p-10 gap-28">
        <div className="w-full">
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
      </div>
    </div>
  );
};

export default Testimonial;
