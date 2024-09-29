import QualityTradition from "../../components/About/QualityTraition";
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
      <Reservation />
      <Footer />
    </div>
  );
};

export default About;
