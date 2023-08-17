import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#0a192f] dark:bg-[#EEE2DC] text-[#4ADE80] dark:text-[#123C69]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#4ADE80] dark:text-[#AC3B61]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] dark:text-[#123C69]">
          Towkir Ahmed
        </h1>
        <h2 className="text-2xl sm:text-5xl max-w-[700px] font-bold text-[#8892b0] dark:text-[#AC3B61]">
          I'm a full stack developer.
        </h2>
        <p className="text-[#8892b0] dark:text-[#AC3B61] py-4 max-w-[700px]">
          I'm a full stack developer and research enthusiast. Currently, I am
          doing masters in Smart Energy from University of Vaasa.
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="text-white dark:text-[#AC3B61] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4ADE80] hover:text-black dark:hover:bg-[#AC3B61] dark:hover:text-white hover:border-[#4ADE80] border-white dark:border-[#AC3B61] dark:hover:border-[#AC3B61] duration-300">
              View More
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
