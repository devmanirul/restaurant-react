import FaqQuestionSec from "../../components/FaqQuestionSec";
import Header from "../../components/Shared/Header";
import PageTitle from "../../components/Shared/PageTitle";

const Faq = () => {
  return (
    <div>
      <Header />
      <PageTitle title={"FAQ"} />
      <FaqQuestionSec />
    </div>
  );
};
export default Faq;
