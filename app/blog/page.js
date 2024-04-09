import BlogCard from '@/components/BlogCard';
import CategoryPills from '@/components/CategoryPills';

const getData = async () => {
  const res = await fetch(`${process.env.URL}/api/posts/`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Posts fetch failed');
  }
  return res.json();
};

const BlogPage = async () => {
  const { posts } = await getData();
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
              CardDescription={post.desc.slice(0, 74)}
              date={post.createdAt}
              image={post.imgUrl}
              category={post.catSlug}
            ></BlogCard>
          ))}
        </div>
      </section>
      <CategoryPills></CategoryPills>
    </div>
  );
};

export default BlogPage;
