import React from "react";
import Button from "../components/Button";
import svg from "../img/svg-1.svg";

function Card(props) {
  const darkTheme = `bg-gray-800 text-white font-roboto lg:overflow-auto w-full md:h-screen flex flex-col ${
    props.alternate ? "lg:flex-row-reverse" : "lg:flex-row"
  } lg:px-16 justify-center pt-32 md:pt-64 lg:pt-32 items-center`;
  const whiteTheme = `bg-white text-black font-roboto lg:overflow-auto w-full md:h-screen flex ${
    props.alternate ? "lg:flex-row-reverse" : "lg:flex-row"
  } flex-col  lg:px-16 justify-center pt-32 md:pt-64 lg:pt-32 items-center`;
  return (
    <div className={`${props.theme === "dark" ? darkTheme : whiteTheme}`}>
      <div className="w-11/12 lg:w-1/2 ">
        <span className="font-semibold leading-relaxed inline-block text-pink-600 tracking-wide">
          {props.title}
        </span>
        <h1 className="text-3xl font-bold tracking-wider pb-6 pt-4 ">
          {props.heading}
        </h1>
        <p
          className={`"tracking-wider text-lg ${
            props.theme === "black" ? "opacity-80" : "text-lg"
          } z-10"`}
        >
          {props.para}
        </p>
        <Button name={props.btn} />
      </div>
      <img
        src={props.svg}
        className="w-80 h-80 flex-shrink sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
        alt="not found"
      />
    </div>
  );
}

export default Card;
