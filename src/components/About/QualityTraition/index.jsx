import qualityPic from "../../../assets/images/about/qualityLeft.png";
const QualityTradition = () => {
  return (
    <div className="w-full flex flex-row gap-36 container mx-auto">
      {/* left */}
      <div className="w-6/12">
        <div className="">
          <h3 className="text-black text-xl font-semibold font-Cormorant border-y border-cream inline">
            MENU
          </h3>
          <h1 className="text-black text-2xl font-bold font-Cormorant">
            Try Our Special Offers
          </h1>
          <p className="text-black text-base font-normal mt-3 font-josefin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            optio dolores, facere aperiam placeat animi. Repudiandae temporibus
            autem cupiditate molestias.
          </p>
        </div>
      </div>
      {/* right */}
      <div className="w-6/12">
        <div className="">
          <img src={qualityPic} alt="" className="" />
        </div>
      </div>
    </div>
  );
};
export default QualityTradition;
