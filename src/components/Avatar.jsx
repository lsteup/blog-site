const Avatar = ({ author, small }) => {
  console.log(author);
  return (
    <div className="flex items-center gap-2 mt-2 mb-1">
      <img
        className={
          small
            ? `max-w-6 rounded-full overflow-hidden aspect-square object-cover  `
            : `max-w-8 rounded-full overflow-hidden aspect-square object-cover  `
        }
        src={author.image}
        alt=""
      />
      <p className={small ? "font-medium text-xs" : "font-semibold text-sm"}>
        {author.name}
      </p>
    </div>
  );
};
export default Avatar;
