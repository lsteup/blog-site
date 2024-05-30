import { useState } from "react";
import customFetch from "../axios";

const CommentForm = ({ handleSubmit, postId }) => {
  const initialState = {
    name: "",
    content: "",
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  return (
    <form
      className="border border-stone-500 p-2"
      onSubmit={(e) => handleSubmit(e, values.name, values.content, postId)}
    >
      <textarea
        className="w-full"
        onChange={handleChange}
        placeholder="write your comment"
        name="content"
        id="content"
        cols="30"
      ></textarea>
      <div className="flex justify-between">
        <input
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <button type="submit">post</button>
      </div>
    </form>
  );
};
export default CommentForm;
