import { useState } from "react";
import { useAppContext } from "../App";
import PostThumb from "../components/PostThumb";
import Sidebar from "../components/Sidebar";
import { CiSearch } from "react-icons/ci";

const Posts = () => {
  const allPosts = useAppContext().posts;
  const [posts, setPosts] = useState(allPosts);

  const handleReset = () => {
    setPosts(allPosts);
  };

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = allPosts.filter(
      (post) =>
        post.author.name.toLowerCase().startsWith(query) ||
        post.title.toLowerCase().startsWith(query)
    );
    setPosts(filtered);
  };

  return (
    <div className="flex box-border">
      <Sidebar />
      <div className=" p-4 max-w-2xl xl:max-w-4xl mx-auto w-full">
        <p className="text-stone-900 text-2xl mt-8 px-2">
          Dive into a World of Stories and Ideas from Our Community
        </p>

        <form
          className="flex my-6 py-1 px-3   max-w-md w-full items-center border-stone-100 border rounded-full bg-stone-50 "
          onReset={handleReset}
          action=""
        >
          <CiSearch className="z-10 text-stone-800  " size="1.6em" />
          <input
            onChange={(e) => handleChange(e)}
            className="focus:ring-0 focus:outline-none  active:border-none w-full bg-stone-50 rounded-xl text-sm px-2 py-1 placeholder:text-stone-600  placeholder:font-light"
            type="text"
            placeholder={`Search for a Post or Author`}
          />
        </form>
        <div className="divide-y divide-stone-200 w-full">
          <div></div>
          {posts.map((post) => {
            return (
              <div className="w-full" key={post._id}>
                <PostThumb post={post} showAuthor={true}>
                  {" "}
                </PostThumb>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Posts;
