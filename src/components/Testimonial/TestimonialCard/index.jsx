/* eslint-disable react/prop-types */
const TestimonialCard = ({ img, name, country, comment }) => {
  return (
    <div className="h-[380px] text-white bg-[#343942] md:px-10 md:py-12 py-3 w-full">
      <div className="flex md:flex-row flex-col items-center gap-6 border-b border-b-[#797E89] pb-7 mb-6">
        <div className="md:h-20 w-20">
          <img src={img} alt="" />
        </div>
        <div className="">
          <h3 className="font-Cormorant text-3xl font-bold">{name}</h3>
          <p className="text-xl font-normal font-josefin">{country}</p>
        </div>
      </div>

      <p className="italic text-[22px]">{`"${comment}`}</p>
    </div>
  );
};

export default TestimonialCard;
