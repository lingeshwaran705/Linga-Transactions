import React from "react";

function PostItem(props) {
  return (
    <div className="p-4 flex items-center space-x-4">
      <div
        style={{ backgroundImage: `url(${props.imge})` }}
        className="w-16 h-16 bg-cover bg-center bg-no-repeate"
      ></div>
      <div>
        <p className="text-lg font-bold tracking-wide">{props.name}</p>
        <p className="text-md text-gray-600">{props.content}</p>
      </div>
    </div>
  );
}

export default PostItem;
