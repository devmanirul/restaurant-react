/* eslint-disable react/prop-types */
const SectionHeading = ({
  heading,
  title,
  description,
  className,
  titleStyle,
  headingStyle,
  descriptionStyle,
}) => {
  return (
    <div className={`max-w-[700px] mx-auto text-center ${className}`}>
      <h3
        className={`text-black text-lg font-semibold font-josefin border-y border-cream inline-block py-1 ${
          headingStyle && headingStyle
        }`}
      >
        {heading}
      </h3>
      <h1
        className={`text-black text-2xl md:text-[40px] font-bold font-Cormorant mt-3 mb-4 ${
          titleStyle && titleStyle
        }`}
      >
        {title}
      </h1>
      {description && (
        <p
          className={`text-black text-base md:text-xl text-center font-normal mt-3 font-josefin ${
            descriptionStyle && descriptionStyle
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
export default SectionHeading;
