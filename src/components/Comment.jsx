const Comment = ({ comment }) => {
  return (
    <div className="border border-stone-500 p-2 my-4">
      <p>{comment.content}</p>
      <p>{comment.author}</p>
    </div>
  );
};
export default Comment;
