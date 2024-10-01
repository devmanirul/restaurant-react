import FreshProduct from "../../components/About/FreshProduct";
import Galary from "../../components/About/Galary";
import QualityTradition from "../../components/About/QualityTraition";
import Team from "../../components/About/Team";
import TestimonialAb from "../../components/About/Testimonial";
import Reservation from "../../components/Home/Reservation";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import PageTitle from "../../components/Shared/PageTitle";

const About = () => {
  return (
    <div>
      <Header />
      <PageTitle title={"About Us"} />
      <QualityTradition />
      <FreshProduct />
      <Team />
      <TestimonialAb />
      <Galary />
      <Reservation />
      <Footer />
    </div>
  );
};

export default About;
