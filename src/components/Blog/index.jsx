import { blogData } from "../constant/home.constant";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="py-20">
      {/* heading */}
      <div className="max-w-[700px] mx-auto text-center">
        <h3 className="text-black text-lg font-semibold font-josefin border-y border-cream inline-block py-1">
          BLOG
        </h3>
        <h1 className="text-black text-[40px] font-bold font-Cormorant mt-3 mb-4">
          Be First Who Read News
        </h1>
        <p className="text-black text-xl text-center font-normal mt-3 font-josefin">
          {`Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.`}
        </p>
      </div>
      <div className="flex flex-row gap-7 container mx-auto mt-10">
        {blogData.map((item) => (
          <BlogCard
            key={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
            restaurants={item.restaurants}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};
export default Blog;
