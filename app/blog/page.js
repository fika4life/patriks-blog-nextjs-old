import BlogCard from '@/components/BlogCard';
import Tag from '@/components/Tag';
import posts from '@/posts.json';

const BlogPage = () => {
  return (
    <div className="container mx-auto flex justify-between ">
      <section className="flex flex-col w-3/4 ">
        <h2 className="mb-8 text-3xl font-bold text-primary  sm:text-4xl md:text-[40px]">
          All Posts
        </h2>
        <div className="-mx-4 flex flex-wrap">
          {posts.map((post) => (
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

      <aside className=" w-1/4 ml-4 px-6 ">
        <h3 className="mb-8 text-3xl font-bold text-center text-primary  sm:text-3xl md:text-[28px]">
          Categories
        </h3>
        <div className="flex justify-around flex-wrap gap-y-2">
          <Tag name={'Finance'}></Tag>
          <Tag name={'Saving'}></Tag>
          <Tag name={'Investing'}></Tag>
          <Tag name={'Dreaming Big'}></Tag>
          <Tag name={'Accounting'}></Tag>
          <Tag name={'Taxes'}></Tag>
        </div>
      </aside>
    </div>
  );
};

export default BlogPage;
