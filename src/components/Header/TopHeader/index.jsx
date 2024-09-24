import { useState } from "react";
import HeaderLogo from "../../../assets/images/HeaderLogo.svg";
import { GrCart } from "react-icons/gr";
import { RiMenuLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const TopHeader = () => {
  const [hamBurgerMenu, setHamburgerMenu] = useState(false);
  return (
    <>
      {/* Top Header */}
      <div className="p-5 md:py-10 md:px-0 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20 py-14 font-josefin container mx-auto">
        <div className="w-full flex flex-row  justify-between items-center">
          <p className="text-[#DEDEDE] border border-cream text-center p-3 md:p-5 cursor-pointer md:inline">
            Call - 987 654 321{" "}
          </p>
          {/* hamburger icon */}
          <button
            onClick={() => setHamburgerMenu(!hamBurgerMenu)}
            className="md:hidden"
          >
            <RiMenuLine className="text-4xl font-bold text-white" />
          </button>
          {/* Mobile menu items */}
          {hamBurgerMenu && (
            <div className="bg-slate-400 fixed inset-y-0 w-6/12 left-0">
              <div className="bg-dark/70 fixed inset-y-0 inset-x-0"></div>
            </div>
          )}
        </div>
        <div className="w-full flex items-center justify-center">
          <img src={HeaderLogo} alt="" className="w-44 md:w-[350px]" />
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
