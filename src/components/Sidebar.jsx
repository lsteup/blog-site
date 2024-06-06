import { useEffect, useState } from "react";
import customFetch from "../axios";
import { HashLink as Link } from "react-router-hash-link";
import Notification from "./Notification";
import { useAppContext } from "../App";
import Loading from "./Loading";
import StaffPicks from "./StaffPicks";
import KeyAuthors from "./KeyAuthors";
import Activity from "./Activity";

const Sidebar = () => {
  const posts = useAppContext().posts;
  const author = posts[0].author._id;
  const [activity, setActivity] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getComments = async () => {
    try {
      setIsLoading(true);
      const result = await customFetch.get(`/comments`);

      setActivity(result.data.comments);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  if (isLoading) return <Loading />;
  return (
    <div className="no-scrollbar overflow-y-auto max-h-screen overflow-scroll  pl-6 pr-8 sticky top-0 xl:px-12 min-w-60 border-l  mr-8 hidden lg:block max-w-xs xl:max-w-sm">
      <StaffPicks />
      <Activity activity={activity.slice(0, 3)} />
      <KeyAuthors />
    </div>
  );
};
export default Sidebar;
