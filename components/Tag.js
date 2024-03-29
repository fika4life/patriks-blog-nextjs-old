import Link from 'next/link';

Link;

const Tag = ({ name }) => {
  return (
    <Link
      href={`/blog/category/${name}`}
      className="inline-flex  border-primary  border-2 items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-primary"
    >
      {name}
    </Link>
  );
};

export default Tag;
