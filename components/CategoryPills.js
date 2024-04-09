import Tag from './Tag';

const getData = async () => {
  const response = await fetch(`${process.env.URL}/api/categories/`, {
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error('categories fetch failed');
  }

  return response.json();
};

export default async function CategoryPills() {
  const { categories } = await getData();

  return (
    <aside className=" w-1/4 ml-4 px-6 ">
      <h3 className="mb-8 text-3xl font-bold text-center text-primary  sm:text-3xl md:text-[28px]">
        Categories
      </h3>
      <div className="flex justify-around flex-wrap gap-y-2">
        {categories.map((category) => (
          <Tag key={category.id} slug={category.slug}></Tag>
        ))}
      </div>
    </aside>
  );
}
