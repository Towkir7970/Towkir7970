import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] dark:bg-[#EEE2DC] flex justify-center items-center p-4 add-padding"
    >
      <form
        method="POST"
        action="https://getform.io/f/f3305b58-cc36-4205-8b3c-2a984861716a"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#4ADE80] dark:border-[#AC3B61] text-gray-300 dark:text-[#123C69]">
            Contact
          </p>
          <p className="text-gray-300 dark:text-[#123C69] py-4">
            Submit the form below or shoot me an email at mygmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] dark:bg-[#EDC7B7] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] dark:bg-[#EDC7B7]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] dark:bg-[#EDC7B7] p-2"
          placeholder="Message"
          name="message"
          rows="10"
        ></textarea>
        <button className="text-white dark:text-[#AC3B61] border-2 hover:bg-[#4ADE80] hover:text-black dark:hover:bg-[#AC3B61] dark:hover:text-white hover:border-[#4ADE80] border-white dark:border-[#AC3B61] dark:hover:border-[#AC3B61] px-4 py-3 my-8 mx-auto flex items-center duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
