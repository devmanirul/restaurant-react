import React, { useEffect, useState } from "react";
import MenuLeft from "../../assets/images/menu-item/Menuleft.svg";
import OutLineButton from "../OutLineButton";
import MenuList from "./MenuList";
import { menuItemData } from "../constant/menu.constant";

const Menu = () => {
  const [starters, setStarters] = useState([]);
  const [mainDishe, setMaindeshe] = useState([]);
  const [dessert, setDessert] = useState([]);

  useEffect(() => {}, []);
  return (
    <div className="flex flex-row gap-32 container mx-auto py-28">
      {/* left */}
      <div className="w-4/12 flex flex-col gap-10">
        <div className="">
          <h3 className="text-black text-lg font-semibold font-Cormorant border-y border-cream inline">
            MENU
          </h3>
          <h1 className="text-black text-2xl font-bold font-Cormorant">
            Try Our Special Offers
          </h1>
          <p className="text-black text-base font-normal mt-3 font-josefin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            optio dolores, facere aperiam placeat animi. Repudiandae temporibus
            autem cupiditate molestias.
          </p>
        </div>
        <div className="">
          <img src={MenuLeft} alt="" className="" />
        </div>
        <OutLineButton title={"See all dishes"} />
      </div>
      {/* right */}
      <div className="w-8/12">
        <MenuList />
      </div>
    </div>
  );
};

export default Menu;
