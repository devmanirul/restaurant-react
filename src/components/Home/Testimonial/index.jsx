import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import { testimonialData } from "../constant/home.constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <div className="bg-black slider-container">
      <div className="container mx-auto md:py-12 py-8 md:gap-28">
        {/* heading section */}
        <div className="md:w-full md:text-start text-center">
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
        <div className="w-full md:py-8 py-6 md:text-start text-center">
          <Slider {...settings}>
            {testimonialData.map((item) => (
              <div key={item.id} className="md:pl-10 pl-3 md:-translate-x-10">
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
    </div>
  );
};

export default Testimonial;
