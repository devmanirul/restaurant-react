/* eslint-disable react/prop-types */
import React from "react";

const OutLineButton = ({ title }) => {
  return (
    <div className="">
      <button className="py-5 px-8 border border-cream text-cream">
        {title}
      </button>
    </div>
  );
};

export default OutLineButton;
