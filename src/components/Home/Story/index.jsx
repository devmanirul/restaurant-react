import { storyList } from "../constant/home.constant";
import Card from "./Card";

const Story = () => {
  return (
    <section className="md:py-28 py-14 relative bg-lightCream z-0">
      <div className="container mx-auto">
        {/* story top */}
        <div className="flex lg:flex-row flex-col md:gap-0 gap-5 items-center justify-between text-black md:px-0 px-3">
          {storyList.map((story) => (
            <Card
              Key={story.id}
              icon={story.icon}
              title={story.title}
              description={story.description}
            />
          ))}
        </div>
        {/* story bottom */}
        <div className="pt-14 flex md:flex-row flex-col md:gap-0 gap-5 w-full">
          {/* left */}
          <div className="md:w-6/12 w-11/12 md:ml-0 ml-3">
            <div className="">
              <img
                src="https://i.ibb.co.com/S586Jj4/story.png"
                alt=""
                className=""
              />
            </div>
          </div>
          {/* mid */}
          <div className="w-1/12 flex flex-row md:place-items-stretch items-center justify-center">
            <div className="border-r-2 bg-lightBlack"></div>
          </div>
          {/* left */}
          <div className="md:w-5/12 md:px-0 px-4">
            {/* top */}
            <div className="">
              <h1 className="text-2xl font-extrabold font-Cormorant pb-3 text-black md:text-start text-center">
                The Story
              </h1>
              <p className="font-josefin text-base text-[#555555] mt-3 md:text-start text-center">
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using 'Content here, content gasher',
                makinlook like readable English. Many desktop publishing
                packages.
              </p>
            </div>
            {/* mid */}
            <div className="flex flex-row md:gap-5 gap-3 md:pt-8 pt-5">
              {/* left */}
              <div className="">
                <h1 className="text-xl font-bold font-Cormorant text-black md:text-start text-center">
                  1996
                </h1>
                <p className="font-josefin text-base mt-1 text-[#555555] md:text-start text-center">
                  Lorem Ipsum is that it has a more-or-less normal distribution
                </p>
              </div>
              {/* right */}
              <div className="">
                <h1 className="text-xl font-bold font-Cormorant text-black md:text-start text-center">
                  2021
                </h1>
                <p className="font-josefin text-base mt-1 text-[#555555] md:text-start text-center">
                  Lorem Ipsum is that it has a more-or-less normal Content
                  content
                </p>
              </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
