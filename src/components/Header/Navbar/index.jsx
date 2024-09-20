import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About", path: "/about" },
    { id: 3, title: "Menu", path: "/menu" },
    { id: 4, title: "Reservation", path: "/reservation" },
    { id: 5, title: "Gallery", path: "/gallery" },
    { id: 6, title: "Blog", path: "/blog" },
    { id: 7, title: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-black border-y border-[#5c6168]">
      <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between">
        {/* left navbar */}
        <div className="flex flex-row ">
          {navItems.map((item) => (
            <NavLink
              className={
                "text-lg text-[#DEDEDE] py-5 px-6 hover:bg-cream font-josefin"
              }
              key={item.id}
              to={item.path}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        {/* right navbar */}
        <div className="flex flex-row items-center gap-5 text-[#DEDEDE] text-2xl">
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
  );
};

export default Navbar;
