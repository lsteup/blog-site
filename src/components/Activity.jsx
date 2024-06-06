import { Link } from "react-router-dom";

const Activity = ({ activity }) => {
  return (
    <div className="my-8">
      <h1 className=" mb-4 ">Recent Comments</h1>
      <div className="flex flex-col gap-4 ">
        {activity.map((comment) => {
          return (
            <Link
              to={`/dashboard/${comment.post._id}/#${comment._id}`}
              className="text-sm"
              key={comment._id}
            >
              <p className="text-sm text-stone-500">
                {comment.content.slice(0, 75)}...
              </p>

              <p className="mt-1 font-medium underline">{comment.post.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Activity;
