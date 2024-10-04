import ProtectedPage from "../../components/ProtectedPage";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import PageTitle from "../../components/Shared/PageTitle";

const Password = () => {
  return (
    <div>
      <Header />
      <PageTitle title={"Password"} />
      <ProtectedPage />
      <Footer />
    </div>
  );
};
export default Password;
