/* eslint-disable react/prop-types */
const BlogCard = ({ img, title, description, restaurants, date }) => {
  return (
    <div>
      {/* img */}
      <div className="">
        <img src={img} alt="" className="" />
      </div>
      {/* bottom */}
      <div className="p-9 border border-slateMid">
        <div className="flex flex-row gap-5 items-center">
          <p className="uppercase text-black text-base font-medium font-josefin border-y border-cream inline-block py-1">
            {restaurants}
          </p>
          <p className="uppercase text-black text-base font-medium font-josefin border-y border-cream inline-block py-1">
            {date}
          </p>
        </div>
        <h1 className="font-Cormorant text-3xl font-bold text">{title}</h1>
        <p className="text-slateMid font-normal text-lg mt-3">{description}</p>
      </div>
    </div>
  );
};
export default BlogCard;
