import { useEffect, useState } from "react";
import PostThumb from "../components/PostThumb";
import { Link } from "react-router-dom";

const Author = ({ author, posts }) => {
  console.log(author.image);
  const photo = author.image.startsWith("/https://res.cloudinary.com");
  return (
    <div className="border p-4 bg-stone-50 rounded shadow-sm my-4 max-w-md">
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
          return <PostThumb post={post} />;
        })}
      </div>
    </div>
  );
};
export default Author;
