import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f] dark:bg-[#EEE2DC] text-gray-300 dark:text-[#123C69]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#4ADE80] dark:border-[#AC3B61]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Towkir, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              Passionate full stack web developer and avid research enthusiast,
              merging the realms of technology and knowledge. My journey is
              marked by a dedication to both elegant code and the pursuit of
              insightful discoveries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
