import React from "react";
import { storyList } from "../constant/home.constant";
import Card from "./Card";
import storyImage from "../../assets/images/story.svg";
import sign from "../../assets/images/sign.svg";

const Story = () => {
  return (
    <section className="py-28 relative bg-lightCream z-0">
      <div className="container mx-auto">
        {/* story top */}
        <div className="flex flex-row items-center justify-between">
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
        <div className="pt-14 flex flex-row w-full">
          {/* left */}
          <div className="w-5/12">
            <img src={storyImage} alt="" className="" />
          </div>
          {/* mid */}
          <div className="w-2/12 flex flex-row items-center justify-center">
            <div className="border-r-2 bg-lightBlack h-full"></div>
          </div>
          {/* left */}
          <div className="w-5/12">
            {/* top */}
            <div className="">
              <h1 className="text-2xl font-extrabold font-Cormorant pb-3">
                The Story
              </h1>
              <p className="font-josefin text-sm">
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using 'Content here, content gfshere',
                makinlook like readable English. Many desktop publishing
                packages.
              </p>
            </div>
            {/* mid */}
            <div className="flex flex-row pt-5">
              {/* left */}
              <div className="">
                <h1 className="text-xl font-bold font-Cormorant">1996</h1>
                <p className="font-josefin text-sm mt-1">
                  Lorem Ipsum is that it has a more-or-less normal distribution
                </p>
              </div>
              {/* right */}
              <div className="">
                <h1 className="text-xl font-bold font-Cormorant">2021</h1>
                <p className="font-josefin text-sm mt-1">
                  Lorem Ipsum is that it has a more-or-less normal Content
                  content
                </p>
              </div>
            </div>
            {/* bottom */}
            <div className="pt-5">
              <h1 className="">JOSEFINE</h1>
              <div className="mt-2">
                <img src={sign} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
