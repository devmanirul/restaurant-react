/* eslint-disable react/prop-types */
const ServiceCard = ({ img, title }) => {
  return (
    <div className="bg-[#323841] p-6 w-full">
      <div className="bg-black px-9 md:px-5 py-14 flex flex-col gap-4 items-center justify-center">
        <img src={img} alt="" className="" />
        <p className="font-Cormorant text-white font-bold text-2xl">{title}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
