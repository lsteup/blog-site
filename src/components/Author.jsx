import { useEffect, useState } from "react";
import PostThumb from "./PostThumb";
import { Link } from "react-router-dom";
import Button from "./Button";

const Author = ({ author, posts }) => {
  console.log(author.image);
  const photo = author.image.startsWith("/https://res.cloudinary.com");
  return (
    <div className="bg-gradient-to-tr w-full from-red-300 via-red-400 to-yellow-300 p-0.5  rounded shadow-sm my-4  max-w-md">
      <div className="flex flex-col  bg-white p-4 h-full">
        <img
          className="max-w-48 aspect-square object-cover mx-auto my-6"
          src={author.image}
          alt=""
        />
        <div className="grow">
          <p className="text-lg font-medium my-2 mt-4">{author.name}</p>
          <p className="text-stone-800 font-light font-serif">{author.bio}</p>
        </div>

        <Link className="my-4 underline" to={`${author._id}`}>
          <p>See Posts</p>
        </Link>
      </div>
    </div>
  );
};
export default Author;
