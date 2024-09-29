import QualityTradition from "../../components/About/QualityTraition";
import Header from "../../components/Shared/Header";
import PageTitle from "../../components/Shared/PageTitle";

const About = () => {
  return (
    <div>
      <Header />
      <PageTitle title={"About Us"} />
      <QualityTradition />
    </div>
  );
};

export default About;
