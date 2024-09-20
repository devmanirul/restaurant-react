import React from "react";
import menu1 from "../../assets/images/offer/menu1.jpg";
import menu2 from "../../assets/images/offer/menu2.jpg";
import menu3 from "../../assets/images/offer/menu3.jpg";
import menu4 from "../../assets/images/offer/menu4.jpg";
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
      {/* images */}
      {/* <div className="flex flex-row gap-7 mt-10">
        <div className="">
          <img src={menu1} alt="" className="w-[672px]" />
        </div>
        <div className="">
          <img src={menu2} alt="" className="w-[672px]" />
        </div>
        <div className="">
          <img src={menu3} alt="" className="w-[672px]" />
        </div>
        <div className="">
          <img src={menu4} alt="" className="w-[672px]" />
        </div>
      </div> */}
      <DishCard />
    </div>
  );
};

export default PopularDishes;
