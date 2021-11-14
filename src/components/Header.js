import React from "react";

function Header() {
  return (
    <div className=" text-center py-10">
      <h1 className="text-3xl sm:text-5xl lg:text-7xl mb-2">MY BLOG</h1>
      <p className="text-xl md:text-2xl lg:mt-4 mt-6 leading-relaxed text-gray-600">
        Welcome to the blog of{" "}
        <span className="ml-2 text-white bg-black px-1">Langesh</span>
      </p>
    </div>
  );
}

export default Header;
