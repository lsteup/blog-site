const Comment = ({ comment }) => {
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(comment.createdAt).toLocaleDateString(
    "en-US",
    dateOptions
  );
  return (
    <div className="  my-4 shadow-md bg-white p-4 mt-8">
      <p>{comment.content}</p>
      <div className="text-sm flex gap-2 mt-2">
        <p className="font-medium ">{comment.author}</p>
        <p className="text-stone-500">{date}</p>
      </div>
    </div>
  );
};
export default Comment;
