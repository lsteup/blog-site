import { useEffect, useState } from "react";
import customFetch from "../axios";
import Loading from "./Loading";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

const KeyAuthors = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [picks, setPicks] = useState();

  const fetchAuthors = async () => {
    try {
      setIsLoading(true);
      const resp = await customFetch.get("/users");
      const authorsData = resp.data.data;

      const randomInts = new Set();
      while (randomInts.size < 3) {
        console.log(randomInts);
        randomInts.add(Math.floor(Math.random() * authorsData.length));
      }

      setPicks(Array.from(randomInts).map((int) => authorsData[int]));
      setIsLoading(false);
    } catch (error) {
      console.log("failed to fetch authors", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  if (isLoading) return <Loading />;
  else
    return (
      <div className="my-8">
        <h1 className=" mb-4 ">Author Highlights</h1>
        <div className="flex flex-col gap-2">
          {picks.map((author) => {
            return (
              <Link to={`/authors/${author._id}`} key={author._id}>
                <Avatar author={author} />
                <p className="text-sm text-stone-600">
                  {author.bio.slice(0, 80)}...
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    );
};
export default KeyAuthors;
