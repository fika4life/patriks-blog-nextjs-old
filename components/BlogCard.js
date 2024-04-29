import Link from 'next/link';

import money from '/public/money.jpeg';
import Image from 'next/image';

// TODO: limit overflow of title

const BlogCard = ({
  image,
  date,
  CardTitle,
  CardDescription,
  slug,
  category
}) => {
  const locale = 'en-US';

  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  };

  let formattedDate = new Date(date);
  formattedDate = formattedDate.toLocaleDateString(locale, options);

  return (
    <>
      <Link href={`/blog/${slug}`} className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <Image
              src={image || money}
              width={400}
              height={400}
              style={{ width: '100%' }}
              alt={CardTitle}
            ></Image>
          </div>
          <div>
            {formattedDate && (
              <p className="mb-1 text-sm text-primary">
                <time> {formattedDate}</time> |
                <span className="capitalize"> {category}</span>
              </p>
            )}
            <h3 className="mb-4 inline-block text-xl font-semibold text-primary hover:text-primary  sm:text-2xl lg:text-xl xl:text-2xl">
              {CardTitle}
            </h3>
            <div
              className="text-base text-primary"
              dangerouslySetInnerHTML={{ __html: CardDescription }}
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
