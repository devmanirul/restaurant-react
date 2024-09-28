import Header from "../../components/Shared/Header";
import Banner from "../../components/Home/Banner";
import Story from "../../components/Home/Story";
import Menu from "../../components/Home/Menu";
import Testimonial from "../../components/Home/Testimonial";
import SpecialOffer from "../../components/Home/SpecialOffer";
import OurGrateServices from "../../components/Home/OurGrateServices";
import PopularDishes from "../../components/Home/PopularDishes";
import Blog from "../../components/Home/Blog";
import Reservation from "../../components/Home/Reservation";
import Footer from "../../components/Shared/Footer";

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
      <Reservation />
      <Footer />
    </div>
  );
};

export default Home;
