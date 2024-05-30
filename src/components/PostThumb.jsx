import { Link } from "react-router-dom";
import img from "/placeholder.jpg";
import { MdModeComment } from "react-icons/md";

const PostThumb = ({ post }) => {
  const words = post.content.split("").length;
  const time = `${Math.ceil(words / 200)} min. read`;
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(post?.createdAt).toLocaleDateString(
    "en-US",
    dateOptions
  );
  return (
    <Link to={`/${post._id}`}>
      <div className=" py-4 ">
        <h3 className="text-2xl font-semibold my-1">{post.title}</h3>
        <div className="flex justify-between items-center gap-16">
          <div className="text-stone-500 my-4 grow ">
            <p className="text-stone-500 my-2">{post.content.slice(0, 200)}</p>
            <div className="my-4 flex text-xs  items-center gap-4 text-stone-500">
              <p>{time}</p>
              <p>•</p>
              <p>{date}</p>
            </div>
            <div className=" mt-6 flex justify-between">
              <div className=" flex items-center gap-2 text-lg">
                <MdModeComment size=".8em" />
                <p>{post.comments.length}</p>
              </div>
              <div className="flex gap-4 text-black">
                <p>posted by</p>
                <p>{post.author.name}</p>
              </div>
            </div>
          </div>

          <img className="max-w-48" src={img} alt="" />
        </div>
      </div>
    </Link>
  );
};
export default PostThumb;
