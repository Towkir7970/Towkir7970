import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-[#0a192f] dark:bg-[#EEE2DC] text-gray-300 dark:text-[#123C69]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#4ADE80] dark:border-[#AC3B61]">
              Experience
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold mb-5">
            <p className="inline border-b-4 border-[#4ADE80] dark:border-[#AC3B61]">
              Job Experience
            </p>
            <br />
            <p className="pt-3">Web Developer</p>
            <p className="text-xl font-bold">South Breeze School</p>
            <p className="text-xl font-bold">Dhaka, Bangladesh</p>
            <p className="text-xl font-bold">August 2021 - Present</p>
            <br />
            <p>Web Developer Intern</p>
            <p className="text-xl font-bold">Innovation Softs</p>
            <p className="text-xl font-bold">Dhaka, Bangladesh</p>
            <p className="text-xl font-bold">January 2019 – April 2019</p>
          </div>
          <div className="text-3xl font-bold">
            <p className="inline border-b-4 border-[#4ADE80] dark:border-[#AC3B61]">
              Post-Secondary Education
            </p>
            <p className="pt-3">Master of Science</p>
            <p className="text-xl font-bold">Smart Energy</p>
            <p className="text-xl font-bold">September, 2023 – </p>
            <p className="text-xl font-bold">University of Vaasa</p>
            <p className="text-xl font-bold">Vaasa, Finland</p>
            <br />
            <p>Bachelor of Science</p>
            <p className="text-xl font-bold">Computer Science and Enginering</p>
            <p className="text-xl font-bold">April, 2017 – 13 January, 2022</p>
            <p className="text-xl font-bold">
              Ahsanulah University of Science and Technology
            </p>

            <p className="text-xl font-bold">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
