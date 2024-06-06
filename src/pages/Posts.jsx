import { useState } from "react";
import { useAppContext } from "../App";
import PostThumb from "../components/PostThumb";
import Sidebar from "../components/Sidebar";
import { CiSearch } from "react-icons/ci";
import PostContainer from "../components/PostContainer";

const Posts = () => {
  return (
    <div className="flex box-border min-h-screen justify-center">
      <PostContainer />
      <Sidebar />
    </div>
  );
};
export default Posts;
