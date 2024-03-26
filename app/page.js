import BlogCard from '@/components/BlogCard';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';

const Blog = () => {
  return (
    <>
      <Hero></Hero>
      <section className=" *:pb-10 pt-20  lg:pt-[120px]">
        <div className="container mx-auto ">
          <section className="flex flex-col">
            <h2 className="mb-8 text-3xl font-bold text-primary dark:text-white sm:text-4xl md:text-[40px]">
              Latest Posts
            </h2>
            <div className="-mx-4 flex flex-wrap">
              <BlogCard
                date="Dec 22, 2023"
                CardTitle="Meet AutoManage, the best AI management tools"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
              />
              <BlogCard
                date="Dec 22, 2023"
                CardTitle="Meet AutoManage, the best AI management tools"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/Y23YC07/image-02.jpg"
              />
              <BlogCard
                date="Dec 22, 2023"
                CardTitle="Meet AutoManage, the best AI management tools"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/7jdcnwn/image-03.jpg"
              />
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
