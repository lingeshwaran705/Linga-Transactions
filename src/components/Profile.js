import React from "react";
import profile from "../img/profile.jpg";

function Profile() {
  return (
    <div className=" shadow-lg bg-white w-full sm:w-5/12 lg:w-full">
      <div
        style={{ backgroundImage: `url(${profile})` }}
        className="w-full h-80 lg:h-64 bg-top bg-cover "
      ></div>
      <div className="p-4">
        <h1 className="text-2xl mb-4">Langesh</h1>
        <p>
          Just me, myself and I, exploring the universe of uknownment. I have a
          heart of love and a interest of lorem ipsum and mauris neque quam
          blog. I want to share my world with you.
        </p>
      </div>
    </div>
  );
}

export default Profile;
