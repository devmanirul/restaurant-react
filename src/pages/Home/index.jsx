import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Header/Banner";
import Story from "../../components/Story";
import Menu from "../../components/Menu";
import Testimonial from "../../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Story />
      <Menu />
      <Testimonial />
    </div>
  );
};

export default Home;
