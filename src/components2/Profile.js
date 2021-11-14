import React from "react";
import profile from "../img/profile.jpg";
import Skills from "./Skills";

function Profile() {
  return (
    <div className="w-full md:w-1/2 text-center sm:p-4 shadow-0xl">
      <Avatar />
      <Dev />
      <Skills />
    </div>
  );
}

function Dev() {
  return (
    <div>
      <div className="p-4 w-full group text-center">
        <h1 className="font-bold text-gray-800 sm:tracking-wider text-3xl sm:text-4xl  py-2 text-center w-full">
          Web Developer
        </h1>
        <h1 className="font-bold text-gray-800 tracking-wider text-3xl sm:text-4xl  py-2 text-center w-full">
          <i class="fab fa-d-and-d"></i>
        </h1>
        <h1 className="font-bold text-gray-800 tracking-wider text-3xl sm:text-4xl  py-2 text-center w-full">
          Designer
        </h1>
        <span className="w-10 animate-ping sm:animate-none sm:w-16 sm:h-16 font-serif h-10 mx-auto my-10 bg-gradient-to-tr rounded-full text-3xl text-white font-bold flex items-center justify-center from-blue-400 to-pink-500">
          L
        </span>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div
      style={{ backgroundImage: `url(${profile})` }}
      className="bg-cover bg-center h-screen sm:h-80 flex items-center justify-center relative"
    >
      <p className="text-white text-5xl sm:text-3xl sm:absolute bottom-0 left-0 p-4 tracking-wider text-roboto">
        Langesh
      </p>
    </div>
  );
}

export default Profile;
