import React from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import { testimonialData } from "../constant/home.constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import downImage from "../../assets/images/testimonial-down.svg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };
  return (
    <div className="bg-black slider-container">
      <div className="container mx-auto py-12 gap-28">
        {/* heading section */}
        <div className="w-full ">
          <h3 className="text-white text-lg font-semibold font-Cormorant  border-y border-cream inline">
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
        <div className="w-full py-8">
          <Slider {...settings}>
            {testimonialData.map((item) => (
              <div key={item.id} className="pl-10 -translate-x-10">
                <TestimonialCard
                  img={item.img}
                  name={item.name}
                  country={item.country}
                  comment={item.comment}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* down image */}
      <div className="">
        <img src={downImage} alt="" className="" />
      </div>
    </div>
  );
};

export default Testimonial;
