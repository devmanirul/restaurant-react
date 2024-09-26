/* eslint-disable react/prop-types */
const Card = ({ icon: ImageIcon, title, description }) => {
  return (
    <div className="flex md:flex-row flex-col items-center gap-4 md:text-start text-center">
      <div className="text-5xl bg-black text-white p-3 rounded-full  cursor-pointer">
        <ImageIcon />
      </div>
      <div className=" cursor-pointer">
        <h3 className="font-Cormorant text-2xl font-bold">{title}</h3>
        <p className="font-josefin text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Card;
