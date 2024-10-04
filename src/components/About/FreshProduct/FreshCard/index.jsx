/* eslint-disable react/prop-types */

const FreshCard = ({ img, title, describe, see }) => {
  return (
    <div className="border-l first:border-none border-slateMid">
      <div className="flex flex-col items-center justify-center px-5 md:px-0 py-10 ">
        <div className="">
          <img src={img} alt="" className="" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-medium text-3xl text-center">{title}</h3>
          <p className="text-center">{describe}</p>
        </div>
        <p className="text-cream">{see}</p>
      </div>
    </div>
  );
};
export default FreshCard;
