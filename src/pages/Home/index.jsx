import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Header/Banner";
import Story from "../../components/Story";
import Menu from "../../components/Menu";
import Testimonial from "../../components/Testimonial";
import SpecialOffer from "../../components/SpecialOffer";
import PopularDishes from "../../components/PopularDishes";
import OurGrateServices from "../../components/OurGrateServices";
import Blog from "../../components/Blog";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Story />
      <Menu />
      <Testimonial />
      <SpecialOffer />
      <PopularDishes />
      <OurGrateServices />
      <Blog />
    </div>
  );
};

export default Home;
