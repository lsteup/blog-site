import { useEffect, useState } from "react";
import customFetch from "../axios";
import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";
import img from "/placeholder.jpg";
import avatar from "/avatar.jpg";
import { MdModeComment } from "react-icons/md";

const Post = () => {
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [areNewComments, setAreNewComments] = useState(false);

  const location = window.location.pathname;
  const id = location.slice(1);

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
    <div className=" p-16 ">
      <img src={img} className="mb-16" alt="" />
      <h1 className="text-4xl font-semibold capitalize mb-4">{post.title}</h1>

      <div className="flex gap-4 my-8">
        <img className="max-w-14 " src={avatar} alt="" />
        <div>
          <p>{post.author.name}</p>
          <div className="my-1 flex text-sm items-center gap-4 text-stone-500">
            <p>{time}</p>
            <p>•</p>
            <p>{date}</p>
            <p>•</p>
            <div className=" flex items-center gap-2 ">
              <MdModeComment size="1em" />
              <p>
                {post.comments.length} comment
                {post.comments.length > 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="font-serif text-lg my-8 min-h-24">{post.content}</p>
      <div className=" flex items-center gap-2 text-stone-500 mb-8">
        <MdModeComment size="1em" />
        <p>
          {post.comments.length} comment
          {post.comments.length > 1 ? "s" : ""}
        </p>
      </div>
      <p className="text-xl">Responses {`(${post.comments.length})`}</p>
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
