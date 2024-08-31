import React from "react";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <div className="bg-black mx-auto w-full">
      {/* TopHeder */}
      <TopHeader />
      {/* Navbar */}
      <Navbar />
    </div>
  );
};

export default Header;
