import React from "react";

function Button(props) {
  return (
    <button
      className={`py-2 px-8 ${
        props.color === "black" ? "bg-black" : "bg-blue-800"
      } tracking-wide hover:bg-pink-600 transition duration-300 w-full text-center text-white sm:w-auto mt-6 mb-16 rounded`}
    >
      {props.name}
    </button>
  );
}

export default Button;
