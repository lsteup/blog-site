import { useState } from "react";
import { useAppContext } from "../App";
import PostThumb from "../components/PostThumb";
import Sidebar from "../components/Sidebar";
import { CiSearch } from "react-icons/ci";

const PostContainer = ({ author }) => {
  let authorName;

  const allPosts = author
    ? useAppContext().posts.filter((post) => post.author._id === author)
    : useAppContext().posts;

  if (author) {
    authorName = allPosts[0].author.name;
  }

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
    <div className=" p-4 max-w-2xl xl:max-w-3xl  w-full pr-16 ">
      <p className="text-stone-900 text-2xl xl:text-3xl mt-8 px-2">
        {author
          ? `${authorName}`
          : "Dive into a World of Stories and Ideas from Our Community"}
      </p>

      <div className="flex items-center justify-between">
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
        <p className="text-stone-500">{posts.length} posts</p>
      </div>
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
  );
};
export default PostContainer;
