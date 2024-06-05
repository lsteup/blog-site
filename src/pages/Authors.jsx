import { useEffect, useState } from "react";
import customFetch from "../axios";
import Author from "./Author";

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const fetchAuthors = async () => {
    try {
      setIsLoading(true);
      const resp = await customFetch.get("/users");
      setAuthors(resp.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const resp = await customFetch.get("/posts");
      setPosts(resp.data.posts);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAuthors();
    fetchPosts();
  }, []);

  if (isLoading) return <div>Loading ...</div>;
  else
    return (
      <div>
        <h1>Meet our Contributors</h1>
        <div>
          {authors.map((author) => {
            return (
              <Author
                posts={posts
                  .filter((post) => post.author._id === author._id)
                  .slice(0, 3)}
                author={author}
              />
            );
          })}
        </div>
      </div>
    );
};
export default Authors;
