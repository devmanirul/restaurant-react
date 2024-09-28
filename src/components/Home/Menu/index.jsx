import { useEffect, useState } from "react";
import MenuLeft from "../../../assets/images/menu-item/Menuleft.svg";
import OutLineButton from "../../Shared/OutLineButton";
import MenuList from "./MenuList";
import { menuItemData } from "../constant/menu.constant";

const Menu = () => {
  const [starters, setStarters] = useState([]);
  const [mainDishe, setMaindeshe] = useState([]);
  const [dessert, setDessert] = useState([]);

  useEffect(() => {
    const st = menuItemData.filter((item) => item.category === "Starters");
    const md = menuItemData.filter((item) => item.category === "Main Dish");
    const de = menuItemData.filter((item) => item.category === "Dessert");
    setStarters(st);
    setMaindeshe(md);
    setDessert(de);
  }, []);

  return (
    <div className="flex lg:flex-row md:flex-row flex-col md:gap-32 gap-10 container mx-auto md:py-28 py-14">
      {/* left */}
      <div className="md:w-3/12 w-full md:px-0 px-5 flex flex-col gap-8 md:gap-10 md:text-start text-center">
        <div className="">
          <h3 className="text-black text-xl font-semibold font-Cormorant border-y border-cream inline">
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
          <img src={MenuLeft} alt="" className="w-full object-cover" />
        </div>
        <OutLineButton title={"See all dishes"} />
      </div>
      {/* right */}
      <div className="md:w-9/12 w-full md:text-start text-center">
        {/* Starters */}
        <MenuList heading={"Starters"} items={starters} />
        <MenuList heading={"Main Dish"} items={mainDishe} />
        <MenuList heading={"Dessert"} items={dessert} />
      </div>
    </div>
  );
};

export default Menu;
