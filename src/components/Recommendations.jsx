import { Link } from "react-router-dom";
import { useAppContext } from "../App";
import PostThumb from "./PostThumb";
import { FaRegComment } from "react-icons/fa";
import { useEffect } from "react";

const Recommendations = ({ author, current }) => {
  const allPosts = useAppContext().posts;

  const posts = allPosts.filter(
    (post) => post.author._id === author._id && post._id != current
  );

  return (
    <div className="border-y border-stone-200 py-4 ">
      <h2 className="  text-xl font-medium mb-4">
        More Posts from this Author:
      </h2>
      <div className="px-8 divide-y">
        {posts.length > 0 ? (
          posts.map((post) => <PostThumb key={post._id} post={post} />)
        ) : (
          <p className="text-stone-400 mt-4">No more posts ...</p>
        )}
      </div>
    </div>
  );
};
export default Recommendations;
