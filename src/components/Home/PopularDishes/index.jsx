import { popularDishesData } from "../constant/home.constant";
import OutLineButton from "../../Shared/OutLineButton";
import DishCard from "./DishCard";

const PopularDishes = () => {
  return (
    <div className="container mx-auto py-10 md:px-0 px-5">
      {/* top heading */}
      <div className="max-w-[700px] mx-auto text-center">
        <h3 className="text-black text-lg font-semibold font-josefin border-y border-cream inline-block py-1">
          MENU
        </h3>
        <h1 className="text-black text-[40px] font-bold font-Cormorant mt-3 mb-4">
          Popular Dishes
        </h1>
        <p className="text-black text-base md:text-xl text-center font-normal mb-4 md:mb-0 mt-3 font-josefin">
          {`Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making.`}
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-3 md:gap-7">
        {popularDishesData.map((dish) => (
          <DishCard
            key={dish.id}
            img={dish.img}
            title={dish.title}
            description={dish.description}
            price={dish.price}
          />
        ))}
      </div>
      <div className="text-center my-5">
        <OutLineButton title={"See all dishes"} />
      </div>
    </div>
  );
};

export default PopularDishes;
