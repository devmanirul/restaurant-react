const SpecialOffer = () => {
  return (
    <div className="w-full">
      {/* testimonial down image */}
      <div className="bg-[1E1E1E] w-full">
        <div className="">
          <img
            src="https://i.ibb.co.com/1KHMfNN/testimonial-down.png"
            alt=""
            className=""
          />
        </div>
      </div>
      {/* offer content section */}
      <div className="container mx-auto md:py-20 py-10 md:px-0 px-5">
        {/* top heading */}
        <div className="max-w-[700px] mx-auto text-center">
          <h3 className="text-black text-lg font-semibold font-josefin border-y border-cream inline-block py-1">
            OFFER
          </h3>
          <h1 className="text-black text-2xl md:text-[40px] font-bold font-Cormorant mt-3 mb-4">
            Our special Offer dishes
          </h1>
          <p className="text-black text-base md:ext-xl text-center font-normal mt-3 font-josefin">
            {`Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making.`}
          </p>
        </div>
        {/* images */}
        <div className="w-full flex flex-row gap-7 mt-10">
          <div className="w-full border">
            <img
              src={"https://i.ibb.co.com/sQNRvgy/offer-Left.png"}
              alt=""
              className="w-full object-cover"
            />
          </div>
          <div className="w-full border object-cover">
            <img
              src={"https://i.ibb.co.com/PNXMDFV/offer-Right.png"}
              alt=""
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
