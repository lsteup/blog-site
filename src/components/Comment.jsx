const Comment = ({ comment }) => {
  return (
    <div>
      <p>{comment.content}</p>
      <p>{comment.author}</p>
    </div>
  );
};
export default Comment;
