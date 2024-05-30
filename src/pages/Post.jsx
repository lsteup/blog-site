import { useEffect, useState } from "react";
import customFetch from "../axios";
import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";

const Post = () => {
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [areNewComments, setAreNewComments] = useState(false);

  const location = window.location.pathname;
  const id = location.slice(1);

  const handleSubmit = async (e, name, content, post) => {
    e.preventDefault();
    setIsLoading(true);
    const comment = {
      name,
      content,
      authorType: "Guest",
      post,
    };
    try {
      const resp = await customFetch.post(`posts/${id}/comments`, comment);
      if (resp.status === 201) {
        setIsLoading(false);
        setAreNewComments(!areNewComments);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPost = async () => {
    try {
      const resp = await customFetch.get(`posts/${id}`);
      setPost(resp.data.post);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [areNewComments]);

  if (isLoading) return <div>...Loading</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.author.name}</p>
      <div>
        {post.comments.map((comment) => {
          return <Comment key={comment._id} comment={comment} />;
        })}
        <CommentForm postId={id} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};
export default Post;
