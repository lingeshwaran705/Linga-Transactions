import React from "react";
import Button from "../components/Button";

function PricingCard(props) {
  return (
    <div
      className={`px-4 py-10 ${
        props.theme === "blue"
          ? "bg-blue-800 focus:scale-110 lg:hover:scale-110"
          : "bg-black focus:scale-125 lg:scale-110 lg:hover:scale-125"
      } text-white flex flex-col flex-1 fustify-center items-center mt-16 space-y-4 transform  transition duration-300 shadow-xl`}
    >
      <div className="text-5xl">{props.logo}</div>
      <h1 className="text-2xl font-semibold ">{props.name}</h1>
      <h1 className="text-4xl font-semibold ">{props.price}</h1>
      <p>{props.duration}</p>
      <div className="text-center tracking-wider leading-relaxed pb-6">
        <p>{props.transactions}</p>
        <p>{props.cback}</p>
        <p>{props.limit}</p>
      </div>
      <Button
        name="Chose Plan"
        color={props.theme === "black" ? "blue" : "black"}
      />
    </div>
  );
}

export default PricingCard;
