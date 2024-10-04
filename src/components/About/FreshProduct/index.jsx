import FreshCard from "./FreshCard";
import { freshData } from "../constant/about.constant";

const FreshProduct = () => {
    return (
      <div className={`bg-freshBg-image`}>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 container mx-auto text-white md:h-[496px] md:w-[1920px]">
          {freshData.map((fresh) => (
            <FreshCard
              key={fresh.id}
              img={fresh.img}
              title={fresh.title}
              describe={fresh.describe}
              see={fresh.see}
            />
          ))}
        </div>
      </div>
    );
};
export default FreshProduct;
