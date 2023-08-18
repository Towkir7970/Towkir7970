import React from "react";

import JavaScript from "../assets/javascript.png";
import NextJs from "../assets/nextjs.png";
import NodeJs from "../assets/node.png";
import PHP from "../assets/php.png";
import Python from "../assets/python.png";
import ReactImg from "../assets/react.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-[#0a192f] dark:bg-[#EEE2DC] text-gray-300 dark:text-[#123C69]"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#4ADE80] dark:border-[#AC3B61] ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] dark:shadow-[#EEE2DC] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="Javascript" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] dark:shadow-[#EEE2DC] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] dark:shadow-[#EEE2DC] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={NodeJs} alt="NodeJS" />
            <p className="my-4">NodeJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] dark:shadow-[#EEE2DC] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={NextJs} alt="NextJs" />
            <p className="my-4">NextJs</p>
          </div>
          <div className="shadow-md shadow-[#040c16] dark:shadow-[#EEE2DC] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={PHP} alt="PHP" />
            <p className="my-4">PHP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] dark:shadow-[#EEE2DC] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="Python" />
            <p className="my-4">Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
