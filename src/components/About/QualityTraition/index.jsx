import OutLineButton from "../../Shared/OutLineButton";

const QualityTradition = () => {
  return (
    <div className="w-full py-14 md:py-36 flex flex-col-reverse md:flex-row gap-10 md:gap-40 container mx-auto  md:px-0 px-5">
      {/* left */}
      <div className="md:w-6/12">
        {/* top */}
        <div className="md:text-start text-center">
          <h3 className="text-black text-xl font-semibold font-Cormorant border-y border-cream inline">
            About us
          </h3>
          <h1 className="text-black text-2xl font-bold font-Cormorant my-5">
            Quality and Tradition
          </h1>
          <p className="text-black text-base font-normal font-josefin">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content gfshere making
            look like readable English. Many desktop publishing packages.
          </p>
        </div>
        {/* bottom */}
        <div className="pt-8 flex flex-col justify-center md:justify-start items-center md:items-start">
          <h1 className="text-black">JOSEFINE</h1>
          <div className="mt-5 ">
            <img
              src={"https://i.ibb.co.com/3WDXmJs/sign.png"}
              alt=""
              className="md:h-full h-14 md:text-start text-center"
            />
          </div>
        </div>
        <div className="my-5 md:text-start text-center">
          <OutLineButton title={"See More"} />
        </div>
      </div>
      {/* right */}
      <div className="md:w-6/12 relative">
        <div className="">
          <img
            src={"https://i.ibb.co.com/8KBCh2Q/quality-Left.png"}
            alt=""
            className=""
          />
        </div>
        {/* ceo div */}
        <div className="absolute shadow-[5px_5px_20px_-0px_rgba(0,0,0,0.3)] px-7 py-3 -left-36 -bottom-20 bg-white hidden md:block">
          <div className="flex flex-col gap-4">
            {/* top */}
            <div className="flex flex-row gap-5">
              <div className="">
                <img
                  src={"https://i.ibb.co.com/XyHLkyd/CEO.png"}
                  alt=""
                  className=""
                />
              </div>
              <div className="flex flex-col gap-1 justify-center">
                <h3 className="">Josefine</h3>
                <p className="">CEO & Founder</p>
              </div>
            </div>
            {/* bottom */}
            <div className="flex flex-col gap-4">
              <p className="">
                Capitalize on low hanging fruit <br /> to identify a ballpark
              </p>
              <div className="flex flex-row gap-1">
                <img
                  src={"https://i.ibb.co.com/tckX74n/Vector.png"}
                  alt=""
                  className=""
                />
                <img
                  src={"https://i.ibb.co.com/tckX74n/Vector.png"}
                  alt=""
                  className=""
                />
                <img
                  src={"https://i.ibb.co.com/tckX74n/Vector.png"}
                  alt=""
                  className=""
                />
                <img
                  src={"https://i.ibb.co.com/tckX74n/Vector.png"}
                  alt=""
                  className=""
                />
                <img
                  src={"https://i.ibb.co.com/tckX74n/Vector.png"}
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};
export default QualityTradition;
