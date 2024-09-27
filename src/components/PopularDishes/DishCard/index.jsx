/* eslint-disable react/prop-types */
const DishCard = ({ img, title, description, price }) => {
  return (
    <div className="col-span-1 md:my-10">
      <div className="md:h-[310px] my-3 md:my-5">
        <img src={img} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-row justify-between border-b border-b-[#dcdcdc]">
        <h3 className="text-black font-Cormorant font-bold text-2xl md:text-3xl mb-2 md:mb-4">
          {title}
        </h3>
        <h3 className="text-black font-Cormorant font-bold text-2xl md:text-3xl">
          ${price}
        </h3>
      </div>
      <p className="text-base md:text-xl font-normal font-josefin mt-2 md:mt-3">
        {description}
      </p>
    </div>
  );
};

export default DishCard;
