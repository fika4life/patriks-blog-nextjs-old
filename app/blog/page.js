import BlogCard from '@/components/BlogCard';
import CategoryPills from '@/components/CategoryPills';
import { client, urlFor } from '../lib/sanity';
import { revalidate } from './[slug]/page';

const getData = async () => {
  const query = `*[_type == 'blog']{
  title,
    smallDescription,
    'slug': slug.current,
    titleImage,
    tags,
    _createdAt,
    _id,
    tags[]-> {
      _id,
      slug,
      name
    }

}`;

  const data = await client.fetch(query);

  return data;
};

const BlogPage = async () => {
  const posts = await getData();
  return (
    <div className="container mx-auto px-24 flex justify-between ">
      <section className="flex flex-col w-3/4 ">
        <h2 className="mb-8 text-3xl font-bold text-primary  sm:text-4xl md:text-[40px]">
          All Posts
        </h2>
        <div className="-mx-4 flex flex-wrap">
          {posts.length > 0 &&
            posts?.map((post) => (
              <BlogCard
                key={post._id}
                CardTitle={post?.title}
                CardDescription={post.smallDescription}
                date={post._createdAt}
                image={post.titleImage.asset._ref || money}
                category={post?.tags[0].name || 'Uncategorized'}
                slug={post.slug}
              ></BlogCard>
            ))}
        </div>
      </section>
      <CategoryPills></CategoryPills>
    </div>
  );
};

export default BlogPage;
