import BlogCard from '@/components/BlogCard';
import CategoryPills from '@/components/CategoryPills';

const getData = async (category_name) => {
  const res = await fetch(`${process.env.URL}/api/posts/${category_name}/`);

  if (!res.ok) {
    throw new Error('Something went wrong with getting posts by category');
  }

  return res.json();
};

const CategoryPage = async ({ params }) => {
  const categoryName = params.category_name;

  const { posts } = await getData(categoryName);

  return (
    <div className="container mx-auto flex justify-between ">
      <section className="flex flex-col w-3/4 ">
        <h2 className="mb-8 text-3xl font-bold text-primary  sm:text-4xl md:text-[40px] capitalize">
          Posts about {params.category_name}
        </h2>

        <div className="-mx-4 flex flex-wrap">
          {posts.map((post) => {
            return (
              <BlogCard
                key={post.id}
                date={post.createdAt}
                CardTitle={post.title}
                CardDescription={post.desc.substring(0, 75)}
                category={post.catSlug}
                image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
              />
            );
          })}
        </div>
      </section>

      <CategoryPills></CategoryPills>
    </div>
  );
};

export default CategoryPage;
