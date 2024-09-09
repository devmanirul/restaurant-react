import React from "react";

const PageTitle = ({title}) => {
  return (
    <div className="bg-black py-24 text-center">
      <div className="container mx-auto">
        <h1 className="font-Cormorant font-bold text-6xl text-white">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageTitle;
