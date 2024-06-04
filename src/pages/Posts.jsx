import { useState } from "react";
import { useAppContext } from "../App";
import PostThumb from "../components/PostThumb";
import Sidebar from "../components/Sidebar";

const Posts = () => {
  const allPosts = useAppContext().posts;
  const [posts, setPosts] = useState(allPosts);

  const handleReset = () => {
    setPosts(allPosts);
  };

  const handleChange = (e) => {
    console.log("hi");
    const query = e.target.value.toLowerCase();
    const filtered = allPosts.filter(
      (post) =>
        post.author.name.toLowerCase().startsWith(query) ||
        post.title.toLowerCase().startsWith(query)
    );
    setPosts(filtered);
    console.log("change");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className=" p-4 max-w-2xl xl:max-w-4xl mx-auto">
        <div className="my-8 px-2">
          <h1 className="font-semibold text-3xl mb-2">Our Recent Stories</h1>
          <p className="text-zinc-500">
            Dive into a World of Stories and Ideas from Our Community
          </p>
        </div>
        <form
          className="flex mb-4 gap-4 max-w-4xl w-full items-center  "
          onReset={handleReset}
          action=""
        >
          <input
            onChange={(e) => handleChange(e)}
            className="my-2 border border-black w-full  rounded-lg px-2 py-1 placeholder-stone-500 "
            type="text"
            placeholder="Search for a Post or Author"
          />
          <button
            className=" py-1 font-medium text-sm px-2 border border-black"
            type="reset"
          >
            Clear
          </button>
        </form>
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
    </div>
  );
};
export default Posts;
