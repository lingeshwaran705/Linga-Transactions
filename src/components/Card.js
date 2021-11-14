import React from "react";

function Card(props) {
  return (
    <div className="bg-white text-black mb-16 shadow-lg overflow-hidden md:mx-auto lg:mr-0 w-full ">
      <div
        style={{ backgroundImage: `url(${props.content.img})` }}
        className="w-full h-52 md:h-64 bg-no-repeate bg-cover bg-top transform hover:scale-110 tranistion duration-500"
      ></div>
      <div className="p-4">
        <h1 className="text-2xl py-1 mb-2">{props.content.heading}</h1>
        <p className="mb-2 text-gray-600 text-md">
          {props.content.descriptionHeading} <span>{props.content.date}</span>
        </p>
        <p>{props.content.description}</p>
      </div>
      <div>
        <button className="border-2 border-black text-lg font-bold tracking-wide flex space-x-2 px-6 py-4 mx-auto mb-6 group hover:bg-yellow-500 hover:text-black transition duration-300 hover:border-transparent">
          READ MORE
        </button>
      </div>
    </div>
  );
}

export default Card;
