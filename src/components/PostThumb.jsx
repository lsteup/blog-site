import { Link } from "react-router-dom";
import { FaRegComment } from "react-icons/fa";

const PostThumb = ({ post, showAuthor }) => {
  const words = post.content.split("").length;
  const time = `${Math.ceil(words / 200)} min. read`;
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(post?.createdAt).toLocaleDateString(
    "en-US",
    dateOptions
  );
  const excerpt = post.content.slice(0, 250);
  return (
    <Link to={`/${post._id}`} className=" py-2 px-2">
      {showAuthor && (
        <div className="flex mb-3 text-stone-500 items-center gap-2 text-sm">
          <div className="flex items-center gap-2">
            <img
              src={post.author.image}
              className="max-w-8  aspect-square object-cover rounded-full overflow-hidden "
              alt=""
            />
            <p className="text-black">{post.author.name}</p>
          </div>
          <p>•</p>
          <p>{date}</p>
        </div>
      )}

      <div className="flex items-center justify-between gap-8">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold ">{post.title}</h3>
          <p className="font-serif hidden sm:block text-stone-700 my-1 mb-6 max-w-prose">
            {excerpt}...
          </p>
        </div>
        <img
          className="max-w-16 sm:max-w-28 xl:max-w-40 aspect-square object-cover"
          src={post.image}
          alt=""
        />
      </div>

      <div className="my-3 flex text-sm  items-center gap-4 text-stone-500">
        <p>{time}</p>
        <p>•</p>
        <div className=" flex items-center gap-2">
          <FaRegComment />
          <p>{post.comments.length}</p>
        </div>
        <p>•</p>
        <p className="underline">Read More</p>
      </div>
    </Link>
  );
};
export default PostThumb;
