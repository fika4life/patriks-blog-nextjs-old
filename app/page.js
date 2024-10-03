import Hero from '@/components/Hero';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';
import { client } from './lib/sanity';
import BlogCard from '@/components/BlogCard';

const getData = async () => {
  const query = `*[_type == 'blog']{
  title,
    smallDescription,
    'slug': slug.current,
    titleImage,
    tags,
    _id,
    _createdAt,
    tags[]-> {
      _id,
      slug,
      name
    }

}`;
  const data = await client.fetch(query);
  return data;
};

const Blog = async () => {
  const posts = await getData();

  let latestPosts = await posts?.slice(0, 3);

  return (
    <>
      <Hero></Hero>
      <section className=" *:pb-10 pt-20  lg:pt-[120px]">
        <div className="container mx-auto">
          <section className="flex flex-col">
            <h2 className="mb-8 text-3xl font-bold text-primary sm:text-4xl md:text-[40px]">
              Latest Posts
            </h2>
            <div className=" flex flex-wrap">
              {latestPosts?.map((post) => (
                <BlogCard
                  key={post._id}
                  CardTitle={post.title}
                  CardDescription={post.smallDescription}
                  date={post._createdAt}
                  image={post.titleImage.asset._ref}
                  category={post.tags[0]?.name || 'Uncategorized'}
                  slug={post.slug}
                ></BlogCard>
              ))}
            </div>
          </section>
          <Link href="/blog">
            <button
              type="button"
              className="rounded-sm border-2 border-primary px-16 py-2.5 text-center text-sm font-medium text-primary shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-secondary focus:ring focus:ring-secondary disabled:cursor-not-allowed disabled:border-primary disabled:bg-primary"
            >
              More posts <FaAngleRight className="inline"></FaAngleRight>
            </button>{' '}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Blog;
