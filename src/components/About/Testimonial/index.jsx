import {
  RiArrowLeftWideFill,
  RiArrowRightWideFill,
  RiDoubleQuotesR,
} from "react-icons/ri";
import TestimonialAbCard from "./TestimonialAbCard";
import { TestimonialAbData } from "../constant/TestimonialAbData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const TestimonialAb = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-black">
      <div className="container mx-auto py-14 md:py-20 relative">
        {/* top heading */}
        <div className="md:w-full flex flex-col gap-5">
          <div className="text-center">
            <h3 className="text-white text-lg font-semibold font-Cormorant  border-y border-cream inline leading-10">
              Testimonial
            </h3>
            <h1 className="text-white text-2xl font-bold font-Cormorant">
              What our clients say{" "}
            </h1>
          </div>
        </div>
        {/* bottom */}
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {TestimonialAbData.map((test) => (
            <div key={test.id} className="">
              <TestimonialAbCard
                description={test.description}
                img={test.img}
                name={test.name}
                rank={test.rank}
              />
            </div>
          ))}
        </Slider>
        {/* slider button */}
        <div className="hidden md:flex flex-row justify-between w-full absolute top-1/2 px-24 -translate-y-12">
          <button onClick={previous} className="text-4xl font-light text-cream">
            <RiArrowLeftWideFill />
          </button>
          <button onClick={next} className="text-4xl font-bold text-cream">
            <RiArrowRightWideFill />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TestimonialAb;
