import { RiDoubleQuotesR } from "react-icons/ri";
import TestimonialAbCard from "./TestimonialAbCard";
import { TestimonialAbData } from "../constant/TestimonialAbData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialAb = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  return (
    <div className="bg-black">
      <div className="container mx-auto  py-20">
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
          <div className="flex flex-row items-center justify-center text-cream text-5xl">
            <RiDoubleQuotesR />
          </div>
        </div>
        {/* bottom */}
        <Slider {...settings}>
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
      </div>
    </div>
  );
};
export default TestimonialAb;
