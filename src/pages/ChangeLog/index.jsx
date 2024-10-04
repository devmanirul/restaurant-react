import Change from "../../components/Changelog";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import PageTitle from "../../components/Shared/PageTitle";

const ChangeLog = () => {
  return (
    <div>
      <Header />
      <PageTitle title={"Changelog"} />
      <Change />
      <Footer />
    </div>
  );
};
export default ChangeLog;
