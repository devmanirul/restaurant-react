import React from "react";
import { NavLink } from "react-router-dom";

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
    <div className="bg-black border-y-2 py-4 border-slate">
      <div className="container mx-auto">
        {navItems.map((item) => (
          <NavLink className={"text-lg text-white py-5 px-6 hover:bg-cream font-josefin"} key={item.id} to={item.path}>
            {item.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
