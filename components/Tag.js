import Link from 'next/link';

const Tag = ({ slug }) => {
  return (
    <Link
      href={`/blog/category/${slug}`}
      className="inline-flex  border-primary  border-2 items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-primary capitalize"
    >
      {slug}
    </Link>
  );
};

export default Tag;
