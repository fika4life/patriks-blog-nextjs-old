import posts from '@/posts.json';
import BlogCard from '@/components/BlogCard';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';

const Blog = () => {
  let latestPosts = posts.slice(0, 3);
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
              {latestPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  CardTitle={post.title}
                  CardDescription={post.body.slice(0, 60)}
                  date={post.createdAt}
                  image={post.imgUrl}
                  category={post.category}
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
