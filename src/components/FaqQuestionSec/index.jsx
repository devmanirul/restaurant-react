import { useState } from "react";
import { faqData } from "../constant/faq.constant";
import SectionHeading from "../Shared/SectionHeading";
import Question from "./Question";

const FaqQuestionSec = () => {
  const [showMore, setShowMore] = useState(null);

  const handleShowMore = (id) => {
    setShowMore(id);
  };
  return (
    <div className="container mx-auto my-28">
      <SectionHeading
        heading={"questions"}
        title={"Frequently Asked Questions"}
        headingStyle={"uppercase"}
      />
      {/* Question container */}
      <div className="max-w-[930px] mx-auto mt-8 flex flex-col gap-4">
        {faqData.map((faq) => (
          <Question key={faq.id} {...faq} handleShowMore={handleShowMore} showMore={showMore} />
        ))}
      </div>
    </div>
  );
};
export default FaqQuestionSec;
