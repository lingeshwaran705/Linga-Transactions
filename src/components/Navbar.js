import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  const [click, setClick] = useState(false);
  let navActive =
    "absolute sm:static top-full right-0 flex flex-col  text-center text-lg bg-gray-800 w-full h-screen space-y-4 px-4";
  let navStyle =
    "absolute sm:static items-center top-full right-full flex flex-col sm:flex-row text-center text-lg bg-gray-800 w-full sm:w-auto h-screen sm:h-auto space-y-4 sm:space-y-0 px-4 ";
  let link =
    " py-4 sm:py-2 sm:mx-4 relative hover:text-pink-600 sm:hover:text-white downborder ";
  let signUp =
    "py-4 sm:ml-4 sm:px-3 md:px-4 sm:py-1 sm:mx-4 relative bg-black border-2 hover:bg-gray-800 border-white block tracking-wider focus:bg-white focus:text-black";

  const clickHandler = () => {
    setClick((prev) => !prev);
  };

  const clickHandlerForLink = () => {
    setClick(false);
  };

  return (
    <div className="bg-gray-800 z-20 fixed w-full text-white flex justify-between items-center px-8 py-4 font-roboto">
      <div className="text-2xl space-x-3">
        <i className="fab fa-wolf-pack-battalion text-3xl"></i>
        <span>Linga</span>
      </div>
      <nav className={click ? navActive : navStyle}>
        <Link onClick={clickHandlerForLink} className={link} to="/">
          Home
        </Link>
        <Link onClick={clickHandlerForLink} className={link} to="/Services">
          Services
        </Link>
        <Link onClick={clickHandlerForLink} className={link} to="/Products">
          Products
        </Link>
        <Link onClick={clickHandlerForLink} className={signUp} to="/signup">
          SIGN UP
        </Link>
      </nav>
      <div className="sm:hidden" onClick={clickHandler}>
        <i
          className={`fas ${
            click ? "fa-times" : "fa-bars"
          } cursor-pointer text-2xl`}
        ></i>
      </div>
    </div>
  );
}

export default Navbar;
