import ErrorDiv from "../../components/ErrorDiv";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import PageTitle from "../../components/Shared/PageTitle";

const ErrorPage = () => {
  return (
    <div className="">
      <Header />
      <PageTitle title={"404"} />
      <ErrorDiv />
      <Footer />
    </div>
  );
};

export default ErrorPage;
