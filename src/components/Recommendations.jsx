import { Link } from "react-router-dom";
import { useAppContext } from "../App";
import PostThumb from "./PostThumb";
import { FaRegComment } from "react-icons/fa";
import { useEffect } from "react";

const Recommendations = ({ author, current }) => {
  const allPosts = useAppContext().posts;

  let posts = allPosts.filter(
    (post) => post.author._id === author._id && post._id != current
  );

  posts = posts.slice(0, 3);

  return (
    <div className="mt-4 border-y border-stone-200 py-4 ">
      <h2 className="  text-xl  mt-4">More Posts from {author.name}:</h2>
      <div className="px-8 divide-y">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostThumb small={true} key={post._id} post={post} />
          ))
        ) : (
          <p className="text-stone-400 my-8">No more posts ...</p>
        )}
      </div>
    </div>
  );
};
export default Recommendations;
