import { useEffect, useState } from "react";
import customFetch from "../axios";
import { HashLink as Link } from "react-router-hash-link";
import Notification from "./Notification";
import { useAppContext } from "../App";
import Loading from "./Loading";

const Sidebar = () => {
  const posts = useAppContext().posts;
  const author = posts[0].author._id;
  const [activity, setActivity] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getComments = async () => {
    try {
      setIsLoading(true);
      const result = await customFetch.get(`/comments`);

      setActivity(result.data.comments);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  if (isLoading) return <Loading />;
  return (
    <div className="pt-12 pl-4 pr-8 xl:px-12 min-w-60 border-r  mr-8 hidden lg:block max-w-xs xl:max-w-sm">
      <h1 className="text-2xl  capitalize text-stone-500 2xl:text-3xl">
        recent activity
      </h1>

      <div className="py-8 divide-y flex flex-col gap-4  divide-stone-200 divide-dotted ">
        {!activity.length && (
          <p className=" text-stone-800">No activity to show ...</p>
        )}
        <p></p>

        {activity.map((comment) => {
          return (
            <Link
              to={`/dashboard/${comment.post._id}/#${comment._id}`}
              className=""
              key={comment._id}
            >
              <p>{comment.content.slice(0, 75)}...</p>
              <p>{comment.author}</p>
              <p>{comment.post.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Sidebar;
