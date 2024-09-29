/* eslint-disable react/prop-types */

const PageTitle = ({ title }) => {
  return (
    <div className="bg-black py-10 md:py-24 ">
      <div className="text-center container mx-auto">
        <h1 className="font-Cormorant font-bold text-6xl text-white border-y py-1 border-cream inline-block">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageTitle;
