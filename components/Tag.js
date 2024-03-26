const Tag = ({ name }) => {
  return (
    <span className="inline-flex  border-primary  border-2 items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-primary ">
      {name}
    </span>
  );
};

export default Tag;
