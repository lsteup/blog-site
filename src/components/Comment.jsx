const Comment = ({ comment }) => {
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(comment.createdAt).toLocaleDateString(
    "en-US",
    dateOptions
  );
  return (
    <div className="  my-4 shadow-md bg-white p-4 mt-8">
      <p>{comment.content}</p>
      <p>{comment.author}</p>
      <p>{date}</p>
    </div>
  );
};
export default Comment;
