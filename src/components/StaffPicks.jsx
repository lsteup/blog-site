import { Link } from "react-router-dom";
import { useAppContext } from "../App";
import Avatar from "./Avatar";

const StaffPicks = () => {
  const posts = useAppContext().posts;

  const randomInts = new Set();
  while (randomInts.size < 3) {
    console.log(randomInts);
    randomInts.add(Math.floor(Math.random() * posts.length));
  }

  const picks = Array.from(randomInts).map((int) => posts[int]);

  console.log(picks);
  return (
    <section className="my-8">
      <h1 className=" mb-4 ">Staff Picks</h1>
      <div className="flex flex-col gap-2">
        {picks.map((post) => {
          return (
            <Link key={post._id} className="" to={`/${post._id}`}>
              <Avatar small={true} key={post._id} author={post.author} />
              <p className="font-semibold text-base">{post.title}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default StaffPicks;
