/* eslint-disable react/prop-types */

const TeamCard = ({ img, name, rank }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 md:gap-5">
      <div className="">
        <img src={img} alt="" className="" />
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <h3 className="font-medium text-xl">{name}</h3>
        <p className="">{rank}</p>
      </div>
    </div>
  );
};
export default TeamCard;
