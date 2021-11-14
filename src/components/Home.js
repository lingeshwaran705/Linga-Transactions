import React from "react";
import Card from "./Card";
import Header from "./Header";
import Content from "./Content";
import Profile from "./Profile";
import Posts from "./Posts";
import Tags from "./Tags";
import Footer from "./Footer";

function Home() {
  return (
    <div className="bg-gray-200 overflow-hidden font-roboto px-2 sm:px-4 md:px-6 ">
      <Header />
      <div className="flex items-start flex-col lg:flex-row">
        <div>
          <Card content={Content[0]} />
          <Card content={Content[1]} />
        </div>
        <div className="lg:ml-8 flex flex-wrap flex-col justify-center items-center lg:space-y-10 md:flex-row lg:block md:items-start md:justify-between space-x-0 lg:space-x-0">
          <Profile />
          <Posts />
          <div>
            <Tags />
          </div>
        </div>
      </div>
      <Footer />
      <div className="p-4 bg-gradient-to-r from-white to-gray-400 mb-10 rounded-xl shadow-xl">
        <p className="text-center text-2xl text-gray-700">Created by Langesh</p>
      </div>
    </div>
  );
}

export default Home;
