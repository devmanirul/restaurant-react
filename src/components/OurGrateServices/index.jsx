import React from "react";
import ServiceCard from "../ServiceCard";
import calenderIcon from "../../assets/images/service/Icon1.jpg";
import listIcon from "../../assets/images/service/Icon2.jpg";
import bikeIcon from "../../assets/images/service/Icon3.jpg";

const servicesList = [
  { id: 1, title: "Opened 24/7", img: calenderIcon },
  { id: 2, title: "Special Menus", img: listIcon },
  { id: 3, title: "Home Delivery", img: bikeIcon },
];

const OurGrateServices = () => {
  return (
    <div className="bg-black lg:py-40 py-20 ">
      <div className="container mx-auto flex lg:flex-row  flex-col items-center justify-between gap-10">
        {/* heaction heading */}
        <div className="w-4/12">
          <h3 className="text-white text-xl font-semibold font-Cormorant border-y border-cream inline p-1">
            What we offer
          </h3>
          <h1 className="text-white text-2xl font-bold font-Cormorant mt-2">
            Our Great Services
          </h1>
          <p className="text-white text-base font-normal mt-3 font-josefin">
            Lorem Ipsum is that it has a more-or-less normal distribution
            content making it look like readable English.
          </p>
        </div>
        {/* information container */}
        <div className="w-8/12 flex lg:flex-row md:flex-row flex-col items-center gap-10">
          {servicesList.map((item) => (
            <ServiceCard key={item.id} title={item.title} img={item.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurGrateServices;
