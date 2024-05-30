import { useAppContext } from "../App";
import PostThumb from "../components/PostThumb";

const Posts = () => {
  const posts = useAppContext().posts;

  return (
    <div>
      <h1>posts</h1>
      <div>
        {posts.map((post) => {
          return (
            <PostThumb key={post._id} post={post}>
              {" "}
            </PostThumb>
          );
        })}
      </div>
    </div>
  );
};
export default Posts;
