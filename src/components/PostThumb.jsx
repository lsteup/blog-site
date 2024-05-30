import { Link } from "react-router-dom";

const PostThumb = ({ post }) => {
  return (
    <Link to={`/${post._id}`}>
      <div className="border border-black p-8">
        <h3>{post.title}</h3>
        <p>{post.author.name}</p>
        <p>{post.content.slice(0, 200)}</p>
      </div>
    </Link>
  );
};
export default PostThumb;
