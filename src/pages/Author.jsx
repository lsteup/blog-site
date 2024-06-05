import { useEffect, useState } from "react";
import PostThumb from "../components/PostThumb";
import { Link } from "react-router-dom";

const Author = ({ author, posts }) => {
  console.log(posts);
  return (
    <div className="border p-2">
      <p>{author.name}</p>
      <img
        className="max-w-36 aspect-square object-cover"
        src={author.image}
        alt=""
      />
      <p>{author.bio}</p>
      <div>
        {posts.map((post) => {
          return <PostThumb post={post} />;
        })}
      </div>
      <Link>see All</Link>
    </div>
  );
};
export default Author;
