import { useState } from "react";
import HeaderLogo from "../../../assets/images/HeaderLogo.svg";
import { GrCart } from "react-icons/gr";
import { RiMenuLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../../constant/home.constant";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";


const TopHeader = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  return (
    <>
      {/* Top Header */}
      <div className="p-5 md:py-10 md:px-0 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20 py-14 font-josefin container mx-auto">
        <div className="w-full flex flex-row justify-between items-center">
          <p className="text-[#DEDEDE] border border-cream text-center p-3 md:p-5 cursor-pointer md:inline">
            Call - 987 654 321{" "}
          </p>
          {/* hamburger icon */}
          <button
            onClick={() => setHamburgerMenu(!hamburgerMenu)}
            className="md:hidden"
          >
            <RiMenuLine className="text-4xl font-bold text-white" />
          </button>
          {/* Mobile menu items */}
          {hamburgerMenu && (
            <div className="">
              <div
                onClick={() => setHamburgerMenu(!hamburgerMenu)}
                className="bg-dark/90 fixed inset-y-0 inset-x-0 z-0"
              ></div>
              <div className="bg-slate-500 fixed inset-y-0 w-5/12 left-0 z-40 flex flex-col justify-between">
                {/* top */}
                <div className="flex flex-col">
                  {navItems.map((item) => (
                    <NavLink
                      className={
                        "text-lg text-[#DEDEDE] py-5 px-6 border-b last:border-b-0 border-cream hover:bg-cream font-josefin"
                      }
                      key={item.id}
                      to={item.path}
                    >
                      {item.title}
                    </NavLink>
                  ))}
                </div>
                {/* bottom */}
                <div className="flex flex-bottom justify-evenly pb-5 items-center gap-5 text-[#DEDEDE] text-2xl">
                  <Link to={"#"}>
                    <FaInstagram />
                  </Link>
                  <Link to={"#"}>
                    <FaFacebook />
                  </Link>
                  <Link to={"#"}>
                    <FaTwitter />
                  </Link>
                  <Link to={"#"}>
                    <FaPinterest />
                  </Link>
                </div>
              </div>
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
