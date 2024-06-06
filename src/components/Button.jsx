const Button = ({ text }) => {
  return (
    <div className=" bg-gradient-to-tr w-fit from-red-200 via-red-300 to-yellow-200 shadow-sm rounded-3xl p-0.5">
      <button className=" p-1 px-2 bg-white rounded-3xl" type="submit ">
        {text}
      </button>
    </div>
  );
};
export default Button;
