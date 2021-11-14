import React from "react";

const tags = [
  "Travel",
  "New York",
  "London",
  "IKEA",
  "NORWAY",
  "Ideas",
  "Baby",
  "Family",
  "News",
  "Cloting",
  "Shoping",
  "Sports",
  "Games",
];

function Tags() {
  const styles =
    "text-sm bg-gray-200 text-center px-2 tracking-tightner cursor-pointer hover:bg-gray-400";
  const active =
    "text-sm bg-black text-white text-center px-2 tracking-wide flex justify-center items-center cursor-pointer hover:bg-white hover:text-black transition duration-300";
  return (
    <div className="bg-white md:w-full mt-10 lg:mt-0">
      <header className="text-xl bg-gray-400 text-center text-white px-4">
        Tags
      </header>
      <div className="p-4 flex flex-wrap  space-x-2 sm:space-x-4 space-y-6">
        {tags.map((tag, index) => {
          return (
            <span className={tag === "Travel" ? active : styles} key={index}>
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Tags;
