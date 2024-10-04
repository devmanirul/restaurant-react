import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-black py-12 md:py-20">
      <div className="container mx-auto flex md:flex-row flex-col-reverse items-center gap-10 md:gap-32">
        {/* left */}
        <div className="md:w-full text-white md:text-start text-center md:px-0 px-3">
          <h1 className="font-Cormorant font-bold lg:text-8xl text-4xl">
            Welcome to Restaurantate
          </h1>
          <p className="text-lg text-[#DFDFDF] font-josefin my-8 ">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry standard dummy .
          </p>
          <Link to={"/menu"}>
            <button className="font-josefin text-xl p-5 text-white border border-cream px-3 md:mb-0 mb-5">
              View Menus
            </button>
          </Link>
        </div>
        {/* right */}
        <div className="md:w-full md:relative md:px-0 px-3">
          <div className="md:w-full flex justify-center md:absolute md:-bottom-96">
            <img
              src="https://i.ibb.co.com/jgKCHVg/Banner.png"
              alt=""
              className="z-30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
