import React from "react";
import BurgerHomepage from "../assets/projects/Burger-Builder-homepage.png";
import Aero from "../assets/projects/aerofighters-homepage.png";
import QuizHome from "../assets/projects/quiz-app-homepage.png";
import SbsHome from "../assets/projects/sbs-homepage.png";
import RegHome from "../assets/projects/sbsregistration-homepage.png";
import WeatherHome from "../assets/projects/weather-app-homepage.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300 dark:text-[#123C69] bg-[#0a192f] dark:bg-[#EEE2DC]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#4ADE80] dark:border-[#AC3B61]">
            Work
          </p>
          <p className="py-6">Checkout some of my recent works</p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item column 1 */}
          <div
            style={{ backgroundImage: `url(${SbsHome})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-80 ml-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                South Breeze School Official Website
              </span>
              <div className="pt-8 text-center">
                <a
                  href="http://southbreezeschoolbd.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
                <a href="/">
                  <button
                    disabled
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${RegHome})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-80 ml-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                South Breeze School Registration Portal
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://sbsregistration.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    disabled
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item column 1 */}
          <div
            style={{ backgroundImage: `url(${QuizHome})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-80 ml-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Quiz Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://quiz-app-eight-ecru.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Towkir7970/React-Quiz-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${BurgerHomepage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-80 ml-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Burger Builder App
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    disabled
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Towkir7970/Burger-Builder/tree/main"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item column 1 */}
          <div
            style={{ backgroundImage: `url(${WeatherHome})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-80 ml-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather Forecast Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    disabled
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Towkir7970/Weather-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Aero})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-80 ml-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                Aerofighters - 2D Game
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    disabled
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Towkir7970/Aerofighters"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
