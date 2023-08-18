import React from "react";

const Research = () => {
  return (
    <div
      name="research"
      className="w-full h-screen bg-[#0a192f] dark:bg-[#EEE2DC] text-gray-300 dark:text-[#123C69] add-padding"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <p className="text-4xl font-bold inline border-b-4 border-[#4ADE80] dark:border-[#AC3B61]">
          Research
        </p>
        <ul className="text-xl pt-4 max-w-[600px]">
          <li class="w-full border-b-2 border-neutral-100 dark:border-[#123C69] border-opacity-100 py-4">
            Performance Comparison of Different Machine Learning Classifiers in
            Categorizing Bangla News Articles
            <br />
            <a
              href="https://ieeexplore.ieee.org/abstract/document/9885853/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#4ADE80] dark:hover:text-[#AC3B61] duration-300"
            >
              Link
            </a>
          </li>
          <li class="w-full border-b-2 border-neutral-100 dark:border-[#123C69] border-opacity-100 py-4">
            Machine Learning and Deep Learning Techniques For Genre
            Classification of Bangla Music
            <br />
            <a
              href="https://ieeexplore.ieee.org/abstract/document/9836434"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#4ADE80] dark:hover:text-[#AC3B61] duration-300"
            >
              Link
            </a>
          </li>
          <li class="w-full border-b-2 border-neutral-100 dark:border-[#123C69] border-opacity-100 py-4">
            A Comprehensive Approach to Enhance Dark Image Implementing Image
            Processing Techniques
            <br />
            <a
              href="https://ieeexplore.ieee.org/abstract/document/9945730"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#4ADE80] dark:hover:text-[#AC3B61] duration-300"
            >
              Link
            </a>
          </li>
          <li class="w-full py-4">
            Bangla News Popularity Prediction Using Machine Learning Techniques
            <br />
            <a
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4096379"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#4ADE80] dark:hover:text-[#AC3B61] duration-300"
            >
              Link
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Research;
