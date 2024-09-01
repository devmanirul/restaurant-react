import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar text-white">
      {/* items */}
      <div className="flex-1 gap-3 border-t border-b py-2">
        <NavLink className="btn btn-ghost bg-lightBlack px-2 py-1">
          Homes
        </NavLink>
        <NavLink className="btn btn-ghost bg-lightBlack px-2 py-1">
          About
        </NavLink>
        <NavLink className="btn btn-ghost bg-lightBlack px-2 py-1">
          Menu
        </NavLink>
        <NavLink className="btn btn-ghost bg-lightBlack px-2 py-1">
          Reservation
        </NavLink>
        <NavLink className="btn btn-ghost bg-lightBlack px-2 py-1">
          Gallery
        </NavLink>
        <NavLink className="btn btn-ghost bg-lightBlack px-2 py-1">
          Blog
        </NavLink>
        <NavLink className="btn btn-ghost bg-lightBlack px-2 py-1">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
