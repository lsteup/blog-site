import { useState } from "react";
import { useAppContext } from "../App";
import PostThumb from "../components/PostThumb";

const Posts = () => {
  const posts = useAppContext().posts;

  return (
    <div className="bg-stone-50 p-16">
      <div className="my-6">
        <h1 className="font-semibold text-3xl mb-2">Our Recent Stories</h1>
        <p className="text-zinc-500">
          Dive into a World of Stories and Ideas from Our Community
        </p>
      </div>
      <div className="divide-y divide-stone-200">
        <div></div>
        {posts.map((post) => {
          return (
            <div key={post._id}>
              <PostThumb post={post}> </PostThumb>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Posts;
