import Tag from './Tag';

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <p className="mb-1 text-sm text-primary">
                Andrea Felsted • <time> {date}</time>
              </p>
            )}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-primary hover:text-primary  sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-primary dark:text-dark-6">
              {CardDescription}
            </p>
          </div>
          <div className="mt-4 flex gap-2">
            <Tag name={'Finance'}></Tag>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
