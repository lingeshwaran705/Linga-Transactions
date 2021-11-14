import React from "react";

function Range(props) {
  return (
    <div className=" ml-2 mt-4">
      <h1 className="sm:text-lg font-semibold">{props.title}</h1>
      <div className="mt-2 rounded-full w-full bg-black">
        <div
          style={{ width: props.percent + "%" }}
          className="bg-gradient-to-r font-semibold rounded-full from-purple-400 to-pink-500 text-white text-center sm:text-lg"
        >
          {props.percent + "%"}
        </div>
      </div>
    </div>
  );
}

export default Range;
