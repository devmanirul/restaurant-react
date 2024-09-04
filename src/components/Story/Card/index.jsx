import React from "react";

const Card = ({ icon: ImageIcon, title, description }) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="text-5xl bg-black text-white p-3 rounded-full">
        <ImageIcon />
      </div>
      <div className="">
        <h3 className="font-Cormorant text-2xl font-bold">{title}</h3>
        <p className="font-josefin text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Card;
