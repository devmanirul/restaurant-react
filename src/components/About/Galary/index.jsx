import GalaryCard from "./GalaryCard";

const Galary = () => {
  return (
    <div className="py-32">
      <div className="container mx-auto flex flex-col gap-10">
        {/* top heading */}
        <div className="md:w-full flex flex-col gap-5">
          <div className="text-center">
            <h3 className="text-black text-lg font-semibold font-Cormorant  border-y border-cream inline leading-10">
              Galary
            </h3>
            <h1 className="text-black text-2xl font-bold font-Cormorant">
              What We Make
            </h1>
          </div>
        </div>
        {/* galary pic */}
        <div className="grid grid-cols-12 grid-rows-12 gap-4">
          {/* Img 1 */}
          <GalaryCard
            className={"row-span-6 col-span-3"}
            img={"https://i.ibb.co.com/GVj4r8Y/galary1.png"}
          />
          {/* Img 2 */}
          <GalaryCard
            className={"row-span-12 col-span-6"}
            img={"https://i.ibb.co.com/XtNdd2k/galary2.png"}
          />
          {/* Img 3 */}
          <GalaryCard
            className={"row-span-6 col-span-3"}
            img={"https://i.ibb.co.com/M9G2k77/galary3.png"}
          />
          {/* Img 4 */}
          <GalaryCard
            className={"row-span-6 col-span-3"}
            img={"https://i.ibb.co.com/z5ppftD/galary4.png"}
          />
          <GalaryCard
            className={"row-span-6 col-span-3"}
            img={"https://i.ibb.co.com/yB1V09R/galary5.png"}
          />
        </div>
      </div>
    </div>
  );
};
export default Galary;
