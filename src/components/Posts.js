import React from "react";
import PostItem from "./PostItem";
import PostContent from "./PostContent";

function Posts() {
  return (
    <div className="w-full mt-10 md:mt-0 lg:mt-10 bg-white p-4 shadow-lg w-1/2 sm:w-5/12 lg:w-full">
      <header className="p-4 py-6 bg-gray-400 text-white text-center text-2xl">
        Popular Posts
      </header>
      <div className="divide-y divide-gray-400">
        {PostContent.map((post) => {
          return (
            <PostItem
              name={post.name}
              content={post.content}
              imge={post.img}
              key={post.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
