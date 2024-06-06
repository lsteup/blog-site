import { useEffect, useState } from "react";
import PostThumb from "./PostThumb";
import { Link } from "react-router-dom";

const Author = ({ author, posts }) => {
  console.log(author.image);
  const photo = author.image.startsWith("/https://res.cloudinary.com");
  return (
    <div className="bg-gradient-to-tr w-fit from-red-200 via-red-300 to-yellow-200 p-0.5  rounded shadow-sm my-4 h-fit max-w-md">
      <div className="bg-white p-4 ">
        <img
          className="max-w-48 aspect-square object-cover mx-auto my-6"
          src={author.image}
          alt=""
        />
        <p className="text-lg font-medium my-2 mt-4">{author.name}</p>
        <p className="text-stone-800 font-light font-serif">{author.bio}</p>
        <h3 className="mt-4 font-medium underline ">Recent Posts</h3>
        <div className="px-8">
          {posts.map((post) => {
            return <PostThumb small={true} post={post} />;
          })}
        </div>
        <Link to={`${author._id}`}>see all</Link>
      </div>
    </div>
  );
};
export default Author;
