import HeaderLogo from "../../../assets/images/HeaderLogo.svg";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <>
      {/* Top Header */}
      <div className="p-5 md:py-10 md:px-0 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20 py-14 font-josefin container mx-auto">
        <div className="w-full">
          <p className="text-[#DEDEDE] border border-cream text-center p-3 md:p-5 cursor-pointer md:inline">
            Call - 987 654 321{" "}
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <img src={HeaderLogo} alt="" className="w-44 md:w-[190px]" />
        </div>
        <div className="w-full flex flex-row md:justify-end justify-between items-center gap-10">
          <div className="text-[#DEDEDE] text-2xl  cursor-pointer">
            <GrCart />
          </div>
          <Link
            to={"/reservation"}
            className="bg-cream text-black text-xl font-semibold p-3 md:py-5 px-8 md:px-14"
          >
            Reservation
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
