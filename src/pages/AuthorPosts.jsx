import { useParams } from "react-router-dom";
import PostContainer from "../components/PostContainer";
import Sidebar from "../components/Sidebar";

const AuthorPosts = () => {
  const author = useParams().id;

  return (
    <div className="flex box-border min-h-screen justify-center">
      <PostContainer author={author} />
      <Sidebar />
    </div>
  );
};
export default AuthorPosts;
