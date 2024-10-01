/* eslint-disable react/prop-types */
import { RiDoubleQuotesR } from "react-icons/ri";
import Slider from "react-slick";

const TestimonialAbCard = ({ description, img, name, rank }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="px-80 flex flex-col justify-center items-center gap-7">
          <p className="text-center text-white">{description}</p>
          {/* averter */}
          <div className="md:h-20 w-20 relative">
            <img src={img} alt="" />
            <div className="bg-cream text-black w-6 h-6 flex justify-center items-center rounded-full absolute top-0 left-0 border-2 border-black">
              <RiDoubleQuotesR />
            </div>
          </div>
          {/* name and rank */}
          <div className="flex flex-col gap-3 items-center justify-center">
            <h3 className="text-white text-xl">{name}</h3>
            <p className="text-cream">{rank}</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default TestimonialAbCard;
