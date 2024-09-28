/* eslint-disable react/prop-types */
const BlogCard = ({ img, title, description, restaurants, date }) => {
  return (
    <div>
      {/* img */}
      <div className="">
        <img src={img} alt="" className="w-full object-cover" />
      </div>
      {/* bottom */}
      <div className="p-5 md:p-9 border border-slateMid">
        <div className="flex flex-row gap-5 items-center">
          <p className="uppercase text-black text-base font-medium font-josefin border-y border-cream inline-block py-1">
            {restaurants}
          </p>
          <p className="uppercase text-black text-base font-medium font-josefin border-y border-cream inline-block py-1">
            {date}
          </p>
        </div>
        <h1 className="font-Cormorant text-xl md:text-3xl font-bold text text-center md:text-start mt-2">
          {title}
        </h1>
        <p className="text-slateMid font-normal text-base text-justify md:text-start md:text-lg mt-3">
          {description}
        </p>
      </div>
    </div>
  );
};
export default BlogCard;
