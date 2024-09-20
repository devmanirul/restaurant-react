import React from "react";
import popular1 from "../../assets/images/offer/popular1.png";
import popular2 from "../../assets/images/offer/popular2.png";
import popular3 from "../../assets/images/offer/popular3.png";
import popular4 from "../../assets/images/offer/popular4.png";
import { popularDishesData } from "../constant/home.constant";
import DishCard from "./DishCard";

const PopularDishes = () => {
  return (
    <div className="container mx-auto py-20 ">
      {/* top */}
      <div className="max-w-[700px] mx-auto text-center">
        <h3 className="text-black text-lg font-semibold font-josefin border-y border-cream inline-block py-1">
          MENU
        </h3>
        <h1 className="text-black text-[40px] font-bold font-Cormorant mt-3 mb-4">
          Popular Dishes
        </h1>
        <p className="text-black text-xl text-center font-normal mt-3 font-josefin">
          {`Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making.`}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-7">
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
      </div>
    </div>
  );
};

export default PopularDishes;
