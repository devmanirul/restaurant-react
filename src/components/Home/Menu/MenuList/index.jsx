/* eslint-disable react/prop-types */
const MenuList = ({ heading, items }) => {
  return (
    <div className="pt-2">
      <h2 className="text-[40px] font-bold font-Cormorant text-black">
        {heading}
      </h2>
      {items.map((item) => (
        <div
          key={item.id}
          className="md:w-full flex md:flex-row flex-col gap-5 items-center justify-between mt-8 md:mt-5"
        >
          {/* left */}
          <div className="md:w-[12%]">
            <img
              src={item.img}
              alt=""
              className="rounded-full w-[84px] h-[84px] object-cover"
            />
          </div>
          {/* mid */}
          <div className="w-[80%] flex flex-col">
            <h1 className="font-Cormorant text-2xl md:text-3xl font-bold">
              {item.title}
            </h1>
            <p className="font-josefin text text-lightBlack text-lg md:text-xl">
              {item.description}
            </p>
          </div>
          {/* right */}
          <div className="w-[8%] text-end">
            <p className="W-[8%] font-Cormorant text-2xl md:text-3xl font-bold">
              ${item.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
