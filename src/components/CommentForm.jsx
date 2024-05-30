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
      onSubmit={(e) => handleSubmit(e, values.name, values.content, postId)}
    >
      <input
        onChange={handleChange}
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
      <textarea
        onChange={handleChange}
        placeholder="write your comment"
        name="content"
        id="content"
        cols="30"
        rows="10"
      ></textarea>
      <button type="submit">post</button>
    </form>
  );
};
export default CommentForm;
