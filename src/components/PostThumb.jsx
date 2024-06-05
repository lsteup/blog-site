import { Link } from "react-router-dom";
import { FaRegComment } from "react-icons/fa";

const PostThumb = ({ post }) => {
  const words = post.content.split("").length;
  const time = `${Math.ceil(words / 200)} min. read`;
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(post?.createdAt).toLocaleDateString(
    "en-US",
    dateOptions
  );
  const excerpt = post.content.split(".").slice(0, 2).join(". ");
  return (
    <div>
      <Link to={`/${post._id}`} className=" py-2 px-2">
        <div className="flex py-2 mb-2 text-stone-500 items-center gap-2 text-sm">
          <div className="flex items-center gap-2">
            <img
              src={post.author.image}
              className="max-w-8  aspect-square object-cover "
              alt=""
            />
            <p className="text-black">{post.author.name}</p>
          </div>
          <p>•</p>
          <p>{date}</p>
        </div>
        <div className="flex items-center justify-between gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold my-2">
              {post.title}
            </h3>
            <p className="font-serif hidden sm:block text-stone-700 my-4 mb-6 max-w-prose">
              {excerpt}
            </p>
          </div>
          <img
            className="max-w-16 sm:max-w-28 xl:max-w-40 aspect-square object-cover"
            src={post.image}
            alt=""
          />
        </div>

        <div className="my-2 flex text-xs  items-center gap-4 text-stone-500">
          <p>{time}</p>
          <p>•</p>
          <div className=" flex items-center gap-2">
            <FaRegComment />
            <p>{post.comments.length}</p>
          </div>
          <p>•</p>
          <p className="underline">See More</p>
        </div>
      </Link>
    </div>
  );
};
export default PostThumb;
