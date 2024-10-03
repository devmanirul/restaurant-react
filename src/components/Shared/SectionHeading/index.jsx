const SectionHeading = (heading, title, description) => {
  return (
    <div className="max-w-[700px] mx-auto text-center">
      <h3 className="text-black text-lg font-semibold font-josefin border-y border-cream inline-block py-1">
        {heading}
      </h3>
      <h1 className="text-black text-2xl md:text-[40px] font-bold font-Cormorant mt-3 mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-black text-base md:text-xl text-center font-normal mt-3 font-josefin">
          {description}
        </p>
      )}
    </div>
  );
};
export default SectionHeading;
