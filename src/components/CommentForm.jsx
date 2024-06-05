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
      className="shadow-md bg-white p-4 mt-8"
      onSubmit={(e) => handleSubmit(e, values.name, values.content, postId)}
    >
      <textarea
        className="w-full resize-none focus:outline-none placeholder:text-stone-400"
        onChange={handleChange}
        placeholder="What are your thoughts?"
        name="content"
        id="content"
        cols="30"
      ></textarea>
      <div className="flex justify-between text-sm">
        <input
          className="focus:outline-none placeholder:text-stone-400"
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          placeholder="Name"
        />

        <div className="flex gap-4">
          <button type="reset">Cancel</button>
          <button
            className="p-2 border border-black bg-stone-200 rounded-3xl"
            type="submit "
          >
            Respond
          </button>
        </div>
      </div>
    </form>
  );
};
export default CommentForm;
