import React from "react";

function Footer() {
  return (
    <div className="bg-gray-500 p-6 my-10">
      <div className="flex justify-between">
        <button className="bg-black opacity-40 px-6 py-4 text-white tracking-wider mr-6 sm:mr-8 md:mr-10">
          Previous
        </button>
        <button className="bg-black px-6 py-4 text-white tracking-wider hover:bg-white hover:text-black hover:border-black border-2 border-transparent transition duration-300 hover:font-bold">
          Next
        </button>
      </div>
    </div>
  );
}

export default Footer;
