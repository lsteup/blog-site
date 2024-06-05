import { useEffect, useState } from "react";
import customFetch from "../axios";
import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";

import { FaRegComment } from "react-icons/fa";
import Recommendations from "../components/Recommendations";
import { Link, useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [areNewComments, setAreNewComments] = useState(false);

  const { id } = useParams();
  console.log(id);

  const words = post?.content.split("").length;
  const time = `${Math.ceil(words / 200)} min. read`;
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(post?.createdAt).toLocaleDateString(
    "en-US",
    dateOptions
  );

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
    <div className=" p-4 my-4 ">
      <Link className="text-stone-500 underline" to="/">
        Back to Posts
      </Link>
      <h1 className="text-4xl font-semibold capitalize my-4">{post.title}</h1>
      <div className="flex items-center gap-2 mb-4 border-b pb-4 border-stone-400">
        <img
          className="max-w-10 aspect-square object-cover"
          src={post.author.image}
          alt=""
        />
        <div className="text-sm">
          <p className="text-base">{post.author.name}</p>
          <div className="flex gap-2 text-stone-500">
            <p className="">{time}</p>
            <p>•</p>
            <p>{date}</p>
          </div>
        </div>
      </div>
      {post.image && (
        <img
          src={post.image}
          className="my-8 2xl:my-8 2xl:mt-16 2xl:max-w-3xl max-h-[50vh] max-w-[80vw] mx-auto"
          alt=""
        />
      )}

      <pre className="max-w-prose p-4 font-serif text-lg min-h-24 text-wrap">
        {post.content}
      </pre>
      <Link className="text-stone-500 underline" to="/">
        Back to Posts
      </Link>
      <Recommendations author={post.author} current={post._id} />

      <h2 className="  text-xl font-medium my-4">
        Responses {`(${post.comments.length})`}
      </h2>
      <div className="mt-4">
        <CommentForm postId={id} handleSubmit={handleSubmit} />
        {post.comments.map((comment) => {
          return <Comment key={comment._id} comment={comment} />;
        })}
      </div>
    </div>
  );
};
export default Post;
