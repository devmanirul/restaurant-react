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
        <div className="grid grid-cols-4 gap-4">
          {/* left */}
          <div className="col-span-1">
            <div className="">
              <img
                src="https://i.ibb.co.com/GVj4r8Y/galary1.png"
                alt=""
                className="w-full object-cover"
              />
            </div>
            <div className="">
              <img
                src="https://i.ibb.co.com/XtNdd2k/galary2.png"
                alt=""
                className="w-full object-cover"
              />
            </div>
          </div>
          {/* mid */}
          <div className="col-span-2 row-span-2">
            <img
              src="https://i.ibb.co.com/M9G2k77/galary3.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          {/* bottom */}
          <div className="col-span-1">
            <div className="">
              <img
                src="https://i.ibb.co.com/z5ppftD/galary4.png"
                alt=""
                className="w-full object-cover"
              />
            </div>
            <div className="">
              <img
                src="https://i.ibb.co.com/yB1V09R/galary5.png"
                alt=""
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Galary;
