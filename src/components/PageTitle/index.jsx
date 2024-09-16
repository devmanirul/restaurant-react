import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div className="bg-black py-24">
      <div className="container mx- text-center">
        <h1 className="font-Cormorant font-bold text-6xl text-white border-y py-1 border-cream inline-block">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageTitle;
