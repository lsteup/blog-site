import { useEffect, useState } from "react";
import customFetch from "../axios";
import Author from "../components/Author";
import Loading from "../components/Loading";
import { useAppContext } from "../App";

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const posts = useAppContext().posts;

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

  useEffect(() => {
    fetchAuthors();
  }, []);

  if (isLoading) return <Loading />;
  else
    return (
      <div className="p-4 w-11/12 mx-auto ">
        <h1 className="text-2xl xl:text-3xl my-8 text-center font-medium">
          Meet our Contributors
        </h1>
        <div className="my-4 mx-auto w-content ">
          <div className="flex flex-wrap gap-4 justify-center">
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
      </div>
    );
};
export default Authors;
